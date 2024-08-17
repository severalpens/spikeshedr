import { useEffect,  useState } from "react";
import type { Schema } from "../../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import {  useParams } from "react-router-dom";

const client = generateClient<Schema>();

function TtTaskTimeBlocks() {
  const { projectId } = useParams<{ projectId: string }>();
  const [ttTaskTimeBlocks, setTtTaskTimeBlocks] = useState<Array<Schema["TtTaskTimeBlock"]["type"]>>([]);
  const [isSyncedData, setIsSyncedData] = useState<boolean>(false);
    
  useEffect(() => {
    const sub = client.models.TtTaskTimeBlock.observeQuery().subscribe({
      next: ({ items, isSynced }) => {
        setTtTaskTimeBlocks([...items]);
        setIsSyncedData(isSynced);
      },
    });
    return () => sub.unsubscribe();
  }, [projectId]);

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1 className="text-xl mb-4">{user?.signInDetails?.loginId}'s Projects</h1>
          {isSyncedData && (
              <div className="overflow-x-auto">
                <table  id="ttTaskTimeBlocksTable" className="table-auto w-full" >
                  <thead>
                    <tr>
                      <th className="border px-4 py-2">Projects</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ttTaskTimeBlocks
                      .map((ttTaskTimeBlock) => (
                        <tr key={ttTaskTimeBlock.id}>
                          <td className="border px-4 py-2">
                            {ttTaskTimeBlock.TimerTaskId}
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

export default TtTaskTimeBlocks;

