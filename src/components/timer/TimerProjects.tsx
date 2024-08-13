import { useEffect,  useState } from "react";
import type { Schema } from "../../../amplify/data/resource";
// import regression from 'highcharts-regression';
import { generateClient } from "aws-amplify/data";
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import TimerProjectCreateForm from '../../../ui-components/TimerProjectCreateForm';
import { Link } from "react-router-dom";
const client = generateClient<Schema>();

function TimerProjects() {
  const [timerProjects, setTimerProjects] = useState<Array<Schema["TimerProject"]["type"]>>([]);
  const [showForm, setShowForm] = useState<boolean>(false);
 
  useEffect(() => {
    client.models.TimerProject.observeQuery().subscribe({
      next: (data) => setTimerProjects([...data.items]),
    });
  }, []);


  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1 className="text-xl mb-4">{user?.signInDetails?.loginId}'s Projects</h1>
          <div id="breadcrumb" className="mb-8">
            <Link to="/timer">Timer</Link> &gt; Projects
          </div>
          <div id="newTimeForm" className="mb-12">
            <button
              onClick={() => setShowForm(!showForm)}
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  w-48"
            >
              {showForm ? 'Hide New Item Form' : 'Add New'}
            </button>
            {showForm && <TimerProjectCreateForm />}
          </div>
          <div id="timerProjectsTable" >
            <div className="flex justify-end mb-4">
            </div>
            <div className="overflow-x-auto">
              <table className="table-auto w-full" >
                <thead>
                  <tr>
                    <th className="border px-4 py-2">Project Name</th>
                  </tr>
                </thead>
                <tbody>
                  {timerProjects
                    .map((timerProject) => (
                      <tr key={timerProject.id}>
                        <td className="border px-4 py-2">
                          <Link to={`/timer/projects/${timerProject.id}`}>{timerProject.Name}</Link>
                          </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
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

export default TimerProjects;
