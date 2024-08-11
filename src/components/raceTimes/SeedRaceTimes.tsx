import { useEffect,  useState } from "react";
import type { Schema } from "../../../amplify/data/resource";
// import regression from 'highcharts-regression';
import { generateClient } from "aws-amplify/data";
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import oldRaceTimes from './oldRaceTimes.json';


const client = generateClient<Schema>();


function SeedRaceTimes() {
  const [, setRaceTimes] = useState<Array<Schema["RaceTime"]["type"]>>([]);
  const [showPrepopulate] = useState<boolean>(true);

 
  useEffect(() => {
    client.models.RaceTime.observeQuery().subscribe({
      next: (data) => setRaceTimes([...data.items]),
    });
  }, []);



  return (
    <Authenticator>
      {() => (
        <main>
          <h1 className="text-xl mb-4">Seed Race Times</h1>
          <div>
          <button id="PrePoulateUsingOldRaceTimes" onClick={() => {
              oldRaceTimes.forEach(async (raceTime) => {
                await client.models.RaceTime.create(raceTime);
              });
              alert("Seed Times have been added!");
          }}
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              hidden={!showPrepopulate}
            >
              Seed Race Times
            </button>
          </div>
        </main>
      )}
    </Authenticator>
  );
}

export default SeedRaceTimes;
