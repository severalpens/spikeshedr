import { useEffect, useState } from "react";
import type { Schema } from "../../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import '@aws-amplify/ui-react/styles.css';
import TtTaskCreateForm from '../../../ui-components/TtTaskCreateForm';
import { AuthUser } from "aws-amplify/auth";
import TtTaskTimeBlocks from "./TtTaskTimeBlocks";


const client = generateClient<Schema>();


function TtTasks({ user }: { user: AuthUser }) {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [ttTaskTimeBlocks, setTtTaskTimeBlocks] = useState<Array<Schema["TtTaskTimeBlock"]["type"]>>([]);
  const [ttTasks, setTtTasks] = useState<Array<Schema["TtTask"]["type"]>>([]);
  const [isButtonsDisabled, setIsButtonsDisabled] = useState<boolean>(false);

  useEffect(() => {
    client.models.TtTask.observeQuery().subscribe({
      next: (data) => setTtTasks([...data.items]),
    });
    client.models.TtTaskTimeBlock.observeQuery().subscribe({
      next: (data) => setTtTaskTimeBlocks([...data.items]),
    });
  }, []);


// deleteAllTaskTimeBlocks();

  const setAllIsRunningToFalse = async () => {
    const tasks = ttTasks.filter((task) => task.IsRunning);

    for await (const task of tasks) {
      await client.models.TtTask.update({ id: task.id, IsRunning: false });
      
    }

  }

  const startStopTask = async (ttTask: Schema["TtTask"]["type"]) => {
    setIsButtonsDisabled(true);

    if (!ttTask.IsRunning) {
      await setAllIsRunningToFalse();
      await client.models.TtTask.update({ id: ttTask.id, IsRunning: true });
      await client.models.TtTaskTimeBlock.create({ TtTaskId: ttTask.id, StartTime: new Date().toISOString() });
    }

    else{
      await setAllIsRunningToFalse();
      const timeBlocks = ttTaskTimeBlocks.filter((timeBlock) =>  !timeBlock.EndTime);
      for await (const timeBlock of timeBlocks) {
        await client.models.TtTaskTimeBlock.update({ id: timeBlock.id, EndTime: new Date().toISOString() });
    }

    }

    setIsButtonsDisabled(false);
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
        <table id="ttTasksTable" className="table-auto w-full" >
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
                    <button id="StartStopTaskButton"
                      disabled={isButtonsDisabled}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => startStopTask(ttTask)}
                    >{ttTask.IsRunning ? 'Stop' : 'Start'}</button>
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

