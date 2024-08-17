import { useEffect,  useState } from "react";
import type { Schema } from "../../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import '@aws-amplify/ui-react/styles.css';
import TtTaskCreateForm from '../../../ui-components/TtTaskCreateForm';
import { Link } from "react-router-dom";
import { AuthUser } from "aws-amplify/auth";


const client = generateClient<Schema>();


function TtTasks({user}: {user: AuthUser}) {
  const [ttTasks, setTtTasks] = useState<Array<Schema["TtTask"]["type"]>>([]);
  const [showForm, setShowForm] = useState<boolean>(false);
    
  useEffect(() => {
    const sub = client.models.TtTask.observeQuery().subscribe({
      next: ({ items }) => {
        setTtTasks([...items]);
      },
    });
    return () => sub.unsubscribe();
  }, []);
  
  return (
        <main>
          <h1 className="text-xl mb-4">{user?.signInDetails?.loginId}'s Tasks</h1>
          <div id="newTimeForm" className="mb-12">
            <button
              onClick={() => setShowForm(!showForm)}
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  w-48"
            >
              {showForm ? 'Hide Form' : 'Add New'}
            </button>
            {showForm && <TtTaskCreateForm />}
          </div>
              <div className="overflow-x-auto">
                <table  id="ttTasksTable" className="table-auto w-full" >
                  <thead>
                    <tr>
                      <th className="border px-4 py-2">Tasks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ttTasks
                      .map((ttTask) => (
                        <tr key={ttTask.id}>
                          <td className="border px-4 py-2">
                            <Link to={`/ttprojecttasks/${ttTask.id}`}>{ttTask.TaskName}</Link>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
            </div>
        </main>
  );
}

export default TtTasks;

