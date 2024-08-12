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
  const [showTable] = useState<boolean>(true);
  const [selectedProjectIDs, setSelectedProjectIDs] = useState<Array<string>>([]);

 
  useEffect(() => {
    client.models.TimerProject.observeQuery().subscribe({
      next: (data) => setTimerProjects([...data.items]),
    });
  }, []);

    
  function deleteProjects() {
    selectedProjectIDs.forEach(async (id) => {
      await client.models.TimerProject.delete({id});
    });
    setSelectedProjectIDs([]);
    }


  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1 className="text-xl mb-4">{user?.signInDetails?.loginId}'s Projects</h1>
          <em >
            <Link className="px-2 border rounded"to="/seedProjectTimes">
              Seed Projects
            </Link>
          </em>
          <div id="newProjectForm" className="mb-8">
            <button
              onClick={() => setShowForm(!showForm)}
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  w-48"
            >
              {showForm ? 'Hide Form' : 'Add New Project'}
            </button>
            {showForm && <TimerProjectCreateForm />}
          </div>
          <div id="projectsTable">
            <table className="table-auto" hidden={!showTable}>
              <thead>
                <tr>
                  <th className="border px-4 py-2">Project Name</th>
                  <th className="border px-4 py-2">
                    <input
                      className="mr-2"
                      type="checkbox"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedProjectIDs(timerProjects.map(project => project.id));
                        }
                        else {
                          setSelectedProjectIDs([]);
                        }
                      }
                      }
                    />  

                    <button id="deleteSelectedProjectTimes"
                      onClick={() => deleteProjects()}
                      className="bg-blue-500 hover:bg-blue-700 disabled:bg-blue-300 text-white font-bold py-2 px-4 rounded  w-48"
                      disabled={selectedProjectIDs.length === 0}
                    >
                      Delete Selected
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {timerProjects.map((project) => (
                  <tr key={project.id}>
                    <td className="border px-4 py-2">{project.name}</td>
                      <td className="border px-4 py-2">
                        <input
                          type="checkbox"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedProjectIDs([...selectedProjectIDs, project.id]);
                            } else {
                              setSelectedProjectIDs(selectedProjectIDs.filter(id => id !== project.id));
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

export default TimerProjects;
