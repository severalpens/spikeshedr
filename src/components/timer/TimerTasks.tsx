import { useEffect,  useState } from "react";
import type { Schema } from "../../../amplify/data/resource";
// import regression from 'highcharts-regression';
import { generateClient } from "aws-amplify/data";
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import TimerTaskCreateForm from '../../../ui-components/TimerTaskCreateForm';
import { Link } from "react-router-dom";
const client = generateClient<Schema>();

function TimerTasks() {
  const [timerTasks, setTimerTasks] = useState<Array<Schema["TimerTask"]["type"]>>([]);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [showTable] = useState<boolean>(true);
  const [selectedTaskIDs, setSelectedTaskIDs] = useState<Array<string>>([]);

 
  useEffect(() => {
    client.models.TimerTask.observeQuery().subscribe({
      next: (data) => setTimerTasks([...data.items]),
    });
  }, []);

    
  function deleteTasks() {
    selectedTaskIDs.forEach(async (id) => {
      await client.models.TimerTask.delete({id});
    });
    setSelectedTaskIDs([]);
    }


  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1 className="text-xl mb-4">{user?.signInDetails?.loginId}'s Tasks</h1>
          <em >
            <Link className="px-2 border rounded"to="/seedTaskTimes">
              Seed Tasks
            </Link>
          </em>
          <div id="newTaskForm" className="mb-8">
            <button
              onClick={() => setShowForm(!showForm)}
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  w-48"
            >
              {showForm ? 'Hide Form' : 'Add New Task'}
            </button>
            {showForm && <TimerTaskCreateForm />}
          </div>
          <div id="tasksTable">
            <table className="table-auto" hidden={!showTable}>
              <thead>
                <tr>
                  <th className="border px-4 py-2">Task Name</th>
                  <th className="border px-4 py-2">
                    <input
                      className="mr-2"
                      type="checkbox"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedTaskIDs(timerTasks.map(task => task.id));
                        }
                        else {
                          setSelectedTaskIDs([]);
                        }
                      }
                      }
                    />  

                    <button id="deleteSelectedTaskTimes"
                      onClick={() => deleteTasks()}
                      className="bg-blue-500 hover:bg-blue-700 disabled:bg-blue-300 text-white font-bold py-2 px-4 rounded  w-48"
                      disabled={selectedTaskIDs.length === 0}
                    >
                      Delete Selected
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {timerTasks.map((task) => (
                  <tr key={task.id}>
                    <td className="border px-4 py-2">{task.name}</td>
                      <td className="border px-4 py-2">
                        <input
                          type="checkbox"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedTaskIDs([...selectedTaskIDs, task.id]);
                            } else {
                              setSelectedTaskIDs(selectedTaskIDs.filter(id => id !== task.id));
                            }
                          }}
                        />
                      </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button onClick={signOut} className="my-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  w-48">
            Sign out
          </button>
        </main>
      )}
    </Authenticator>
  );
}

export default TimerTasks;
