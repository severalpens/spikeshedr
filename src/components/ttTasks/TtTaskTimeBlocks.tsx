import { useEffect,  useState } from "react";
import type { Schema } from "../../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import '@aws-amplify/ui-react/styles.css';


const client = generateClient<Schema>();


function TtTaskTimeBlocks() {
  const [ttTaskTimeBlocks, setTtTaskTimeBlocks] = useState<Array<Schema["TtTaskTimeBlock"]["type"]>>([]);
  const [ttTasks, setTtTasks] = useState<Array<Schema["TtTask"]["type"] & { Name: string }>>([]);
  useEffect(() => {
    client.models.TtTask.observeQuery().subscribe({
      next: (data) => setTtTasks([...data.items]),
    });
    client.models.TtTaskTimeBlock.observeQuery().subscribe({
      next: (data) => setTtTaskTimeBlocks([...data.items]),
    });
  }, []);

  
  return (
    <div id="ttTaskTimeBlockTableDiv">
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
          .map((ttTaskTimeBlock) => (
            <tr key={ttTaskTimeBlock.id}>
              <td className="border px-4 py-2">
                {ttTasks.find((ttTask) => ttTask.id === ttTaskTimeBlock.TtTaskId)?.Name}
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
    </div>

  );
}

export default TtTaskTimeBlocks;

