import { Authenticator } from '@aws-amplify/ui-react';
import { Link } from "react-router-dom";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../../amplify/data/resource";
import timerProjectsSeedData from './timerProjectsSeedData.json';
import { useEffect} from "react";

const client = generateClient<Schema>();

function Timer() {
  useEffect(() => {
  }, []);
  
  const seedTimerProjects = async () => {
    const confirmSeedTimerProjects = window.confirm("Are you sure you want to seed timer projects?");
    if (confirmSeedTimerProjects) {
      try {
        for (const tp of timerProjectsSeedData) {
          const newTimerProject = {
            Name: tp.name,
            timerTasks: tp.timerTasks.map((tt) => ({
              name: tt.name,
              timerPeriods: tt.timerPeriods.map((tp) => ({
                start: tp.start,
                end: tp.end,
              })),
            })),
          };
          console.log("newTimerProject", newTimerProject);  
          await client.models.TimerProject.create(newTimerProject);
        }
        alert("Timer Projects seeded successfully");
      } catch (error) {
        console.error("Error seeding timer projects:", error);
        alert("Failed to seed Timer Projects. Check console for more details.");
      }
    }
  };
  

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1 className="text-xl mb-4">{user?.signInDetails?.loginId}'s Task Timer</h1>
          <div id="" className="mb-8">
            <Link className="my-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  w-48" to="/timerprojects">Projects</Link>
          </div>
          <div id="" className="mb-8">
            <Link className="my-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  w-48" to="/timertasks">Tasks</Link>
          </div>
          <div id="" className="mb-8">
            <Link className="my-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  w-48" to="/timerperiods">Recorded Times</Link>
          </div>
          <div id="" className="mb-8">
          <button id="" onClick={seedTimerProjects} className="bg-blue-500 hover:bg-blue-700 disabled:bg-blue-300 text-white  px-4 rounded text-sm mr-4">
                Seed Timer Projects
              </button>
          </div>
          <button onClick={signOut} className="my-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  w-48">
            Sign out
          </button>
        </main>
      )}
    </Authenticator>
  );
}

export default Timer;
