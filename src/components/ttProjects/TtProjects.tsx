import { useEffect,  useState } from "react";
import type { Schema } from "../../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import '@aws-amplify/ui-react/styles.css';
import TtProjectCreateForm from '../../../ui-components/TtProjectCreateForm';
import { Link } from "react-router-dom";
import { AuthUser } from "aws-amplify/auth";


const client = generateClient<Schema>();


function TtProjects({user}: {user: AuthUser}) {
  const [ttProjects, setTtProjects] = useState<Array<Schema["TtProject"]["type"]>>([]);
  const [showForm, setShowForm] = useState<boolean>(false);
    
  useEffect(() => {
    const sub = client.models.TtProject.observeQuery().subscribe({
      next: ({ items }) => {
        setTtProjects([...items]);
      },
    });
    return () => sub.unsubscribe();
  }, []);
  
  return (
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
        </main>
  );
}

export default TtProjects;

