import { useEffect,  useState } from "react";
import type { Schema } from "../../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Link, useParams } from "react-router-dom";


const client = generateClient<Schema>();


function TtProjectTasks() {

  const { projectId } = useParams<{ projectId: string }>();
    const [ttProjectTasks, setTtProjectTasks] = useState<Array<Schema["TtProjectTask"]["type"]>>([]);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [isSyncedData, setIsSyncedData] = useState<boolean>(false);
    
  useEffect(() => {
    const sub = client.models.TtProjectTask.observeQuery().subscribe({
      next: ({ items, isSynced }) => {
        const filteredItems = items.filter((item) => item.ProjectId === projectId);
        setTtProjectTasks([...filteredItems]);
        setIsSyncedData(isSynced);
      },
    });
    return () => sub.unsubscribe();
  }, [projectId]);

  const addNewTask = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const Name = formData.get('Name') as string;
    const ProjectId = projectId as string;
    await client.models.TtProjectTask.create({
      Name,
      ProjectId,
    });
    form.reset();
  }
  
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
            {showForm && 
              <form className="mt-4" onSubmit={addNewTask} >
                <label htmlFor="Name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" name="Name" id="Name" className="mt-1 p-2 w-96 border border-gray-300 rounded-md" />
                <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  w-48">
                  Submit
                </button>
              </form>
           }
          </div>
          {isSyncedData && (
              <div className="overflow-x-auto">
                <table  id="ttProjectTasksTable" className="table-auto w-full" >
                  <thead>
                    <tr>
                      <th className="border px-4 py-2">Projects</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ttProjectTasks
                      .map((ttProjectTask) => (
                        <tr key={ttProjectTask.id}>
                          <td className="border px-4 py-2">
                            <Link to={`/ttprojecttasks/${ttProjectTask.id}`}>{ttProjectTask.Name}</Link>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
            </div>
          )}
          {!isSyncedData && <p>Loading...</p>}
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

export default TtProjectTasks;

