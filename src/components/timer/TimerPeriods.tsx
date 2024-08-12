import { useEffect,  useState } from "react";
import type { Schema } from "../../../amplify/data/resource";
// import regression from 'highcharts-regression';
import { generateClient } from "aws-amplify/data";
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import TimerPeriodCreateForm from '../../../ui-components/TimerPeriodCreateForm';
import { Link } from "react-router-dom";
const client = generateClient<Schema>();

function TimerPeriods() {
  const [timerPeriods, setTimerPeriods] = useState<Array<Schema["TimerPeriod"]["type"]>>([]);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [showTable] = useState<boolean>(true);
  const [selectedPeriodIDs, setSelectedPeriodIDs] = useState<Array<string>>([]);

 
  useEffect(() => {
    client.models.TimerPeriod.observeQuery().subscribe({
      next: (data) => setTimerPeriods([...data.items]),
    });
  }, []);

    
  function deletePeriods() {
    selectedPeriodIDs.forEach(async (id) => {
      await client.models.TimerPeriod.delete({id});
    });
    setSelectedPeriodIDs([]);
    }


  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1 className="text-xl mb-4">{user?.signInDetails?.loginId}'s Periods</h1>
          <em >
            <Link className="px-2 border rounded"to="/seedPeriodTimes">
              Seed Periods
            </Link>
          </em>
          <div id="newPeriodForm" className="mb-8">
            <button
              onClick={() => setShowForm(!showForm)}
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  w-48"
            >
              {showForm ? 'Hide Form' : 'Add New Period'}
            </button>
            {showForm && <TimerPeriodCreateForm />}
          </div>
          <div id="periodsTable">
            <table className="table-auto" hidden={!showTable}>
              <thead>
                <tr>
                  <th className="border px-4 py-2">Period Name</th>
                  <th className="border px-4 py-2">
                    <input
                      className="mr-2"
                      type="checkbox"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedPeriodIDs(timerPeriods.map(period => period.id));
                        }
                        else {
                          setSelectedPeriodIDs([]);
                        }
                      }
                      }
                    />  

                    <button id="deleteSelectedPeriodTimes"
                      onClick={() => deletePeriods()}
                      className="bg-blue-500 hover:bg-blue-700 disabled:bg-blue-300 text-white font-bold py-2 px-4 rounded  w-48"
                      disabled={selectedPeriodIDs.length === 0}
                    >
                      Delete Selected
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {timerPeriods.map((period) => (
                  <tr key={period.id}>
                    <td className="border px-4 py-2">{period.startTime}</td>
                      <td className="border px-4 py-2">
                        <input
                          type="checkbox"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedPeriodIDs([...selectedPeriodIDs, period.id]);
                            } else {
                              setSelectedPeriodIDs(selectedPeriodIDs.filter(id => id !== period.id));
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

export default TimerPeriods;
