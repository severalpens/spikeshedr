import { useEffect,  useState } from "react";
import type { Schema } from "../../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import '@aws-amplify/ui-react/styles.css';
import TtTaskCreateForm from '../../../ui-components/TtTaskCreateForm';
import { AuthUser } from "aws-amplify/auth";
import TtTaskTimeBlocks from "./TtTaskTimeBlocks";


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

  const startTask = async (ttTask: Schema["TtTask"]["type"]) => {
    await client.models.TtTaskTimeBlock.create({ StartTime: new Date().toISOString(), TtTaskId: ttTask.id });
  }

const stopTask = async (ttTask: Schema["TtTask"]["type"]) => {
    const ttTaskTimeBlock = await client.models.TtTaskTimeBlock.get({ id: ttTask.id });
    if (!ttTaskTimeBlock?.data?.id) {
      await client.models.TtTaskTimeBlock.create({ StartTime: new Date().toISOString(), TtTaskId: ttTask.id });
    }
    else {
      const ttTaskTimeBlockId = ttTaskTimeBlock.data?.id ?? '';
      await client.models.TtTaskTimeBlock.update({ id: ttTaskTimeBlockId, EndTime: new Date().toISOString() });
    }
  }
  
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
                    <th className="border px-4 py-2"></th>
                    <th className="border px-4 py-2"></th>
                    <th className="border px-4 py-2"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {ttTasks
                      .map((ttTask) => (
                        <tr key={ttTask.id}>
                          <td className="border px-4 py-2">
                            {ttTask.TaskName}
                          </td>
                          <td className="border px-4 py-2">
                            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded  w-48"
                            id="StartTask"
                            onClick={() => startTask(ttTask)}
                            >Start</button>
                          </td>
                          <td className="border px-4 py-2">
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded  w-48"
                            id="StopTask"
                            onClick={() => stopTask(ttTask)}

                            >Stop</button>
                          </td>
                          <td className="border px-4 py-2">
                            Delete
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
            </div>
                       <TtTaskTimeBlocks />

        </main>
  );
}

export default TtTasks;

