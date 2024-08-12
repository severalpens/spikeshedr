import { useEffect,  useState } from "react";
import type { Schema } from "../../../amplify/data/resource";
// import regression from 'highcharts-regression';
import { generateClient } from "aws-amplify/data";
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import seedProjectRecords from './seedProjectRecords.json';


const client = generateClient<Schema>();


function SeedProjects() {
  const [, setProjects] = useState<Array<Schema["TimerProject"]["type"]>>([]);
  const [showPrepopulate] = useState<boolean>(true);

 
  useEffect(() => {
    client.models.TimerProject.observeQuery().subscribe({
      next: (data) => setProjects([...data.items]),
    });
  }, []);



  return (
    <Authenticator>
      {() => (
        <main>
          <h1 className="text-xl mb-4">Seed Projects</h1>
          <div>
          <button id="PrePoulateUsingOldProjectTimes" onClick={() => {
              seedProjectRecords.forEach(async (project) => {
                await client.models.TimerProject.create(project);
              });
              alert("Seed Times have been added!");
          }}
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              hidden={!showPrepopulate}
            >
              Seed Projects
            </button>
          </div>
        </main>
      )}
    </Authenticator>
  );
}

export default SeedProjects;
