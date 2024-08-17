import { useEffect,  useState } from "react";
import type { Schema } from "../../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import '@aws-amplify/ui-react/styles.css';


const client = generateClient<Schema>();


function TtTaskTimeBlocks() {
  const [ttTaskTimeBlocks, setTtTaskTimeBlocks] = useState<Array<Schema["TtTaskTimeBlock"]["type"]>>([]);
  const [ttTasks, setTtTasks] = useState<Array<Schema["TtTask"]["type"]>>([]);
  useEffect(() => {
    client.models.TtTask.observeQuery().subscribe({
      next: (data) => setTtTasks([...data.items]),
    });
    client.models.TtTaskTimeBlock.observeQuery().subscribe({
      next: (data) => setTtTaskTimeBlocks([...data.items]),
    });
  }, []);

  const deleteAllTaskTimeBlocks = async () => {
    for (const ttTaskTimeBlock of ttTaskTimeBlocks) {
      await client.models.TtTaskTimeBlock.delete({ id: ttTaskTimeBlock.id });
    }
  }

  
  return (
    <div id="ttTaskTimeBlockTableDiv" className="m-5">
    <table  id="ttTaskTimeBlockTable" className="table-auto w-full" >
      <thead>
        <tr>
          <th className="border px-4 py-2">Task</th>
          <th className="border px-4 py-2">Start Time</th>
          <th className="border px-4 py-2">End Time</th>
        </tr>
      </thead>
      <tbody>
        {ttTaskTimeBlocks
          .sort((a, b) => {
            const aStartTime = a.StartTime ? new Date(a.StartTime) : new Date();
            const bStartTime = b.StartTime ? new Date(b.StartTime) :  new Date();
            return bStartTime.getTime() - aStartTime.getTime();
            
          })
          .map((ttTaskTimeBlock) => (
            <tr key={ttTaskTimeBlock.id}>
              <td className="border px-4 py-2">
                {ttTasks.find((ttTask) => ttTask.id === ttTaskTimeBlock.TtTaskId)?.TaskName}
              </td>
              <td className="border px-4 py-2">
                {ttTaskTimeBlock.StartTime}
              </td>
              <td className="border px-4 py-2">
                {ttTaskTimeBlock.EndTime}
              </td>
            </tr>
          ))} 
      </tbody>
    </table>
    <button onClick={deleteAllTaskTimeBlocks} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  w-48">  
      Delete All Logs
    </button>
    </div>

  );
}

export default TtTaskTimeBlocks;

