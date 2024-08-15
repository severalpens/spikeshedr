import { useEffect,  useState } from "react";
import type { Schema } from "../../../amplify/data/resource";
// import regression from 'highcharts-regression';
import { generateClient } from "aws-amplify/data";
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import TtProjectCreateForm from '../../../ui-components/TtProjectCreateForm';
import { Link } from "react-router-dom";


const client = generateClient<Schema>();


function TtProjects() {
  const [ttProjects, setTtProjects] = useState<Array<Schema["TtProject"]["type"]>>([]);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [isSyncedData, setIsSyncedData] = useState<boolean>(false);
    
  // useEffect( () => {
  //    client.models.TtProject.observeQuery().subscribe({
  //     next: (data) => setTtProjects([...data.items]),
  //   });
  // }, [ttProjects]);

  
  useEffect(() => {
    const sub = client.models.TtProject.observeQuery().subscribe({
      next: ({ items, isSynced }) => {
        setTtProjects([...items]);
        setIsSyncedData(isSynced);
      },
    });
    return () => sub.unsubscribe();
  }, []);
  
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1 className="text-xl mb-4">{user?.signInDetails?.loginId}'s Projects</h1>
          <div id="newTimeForm" className="mb-12">
            <button
              onClick={() => setShowForm(!showForm)}
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  w-48"
            >
              {showForm ? 'Hide Form' : 'Add New'}
            </button>
            {showForm && <TtProjectCreateForm />}
          </div>
          {isSyncedData && (
              <div className="overflow-x-auto">
                <table  id="ttProjectsTable" className="table-auto w-full" >
                  <thead>
                    <tr>
                      <th className="border px-4 py-2">Projects</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ttProjects
                      .map((ttProject) => (
                        <tr key={ttProject.id}>
                          <td className="border px-4 py-2">
                            <Link to={`/ttprojecttasks/${ttProject.id}`}>{ttProject.Name}</Link>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
            </div>
          )}
          <div className="flex justify-end">
          <button onClick={signOut} className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  w-48">
            Sign out
          </button>
            
          </div>
        </main>
      )}
    </Authenticator>
  );
}

export default TtProjects;

