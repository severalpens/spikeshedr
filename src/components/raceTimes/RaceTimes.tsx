import { useEffect, useRef, useState } from "react";
import type { Schema } from "../../../amplify/data/resource";
// import regression from 'highcharts-regression';
import { generateClient } from "aws-amplify/data";
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import RaceTimeCreateForm from '../../../ui-components/RaceTimeCreateForm';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import oldRaceTimes from './oldRaceTimes.json';


const client = generateClient<Schema>();


function RaceTimes() {
  const [raceTimes, setRaceTimes] = useState<Array<Schema["RaceTime"]["type"]>>([]);
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [showTable, setShowTable] = useState<boolean>(true);
  const [showChart, setShowChart] = useState<boolean>(false);
  const [showPrepopulate, setShowPrepopulate] = useState<boolean>(true);
  const [selectedRaceTimeIDs, setSelectedRaceTimeIDs] = useState<Array<string>>([]);

 
  useEffect(() => {
    client.models.RaceTime.observeQuery().subscribe({
      next: (data) => setRaceTimes([...data.items]),
    });
  }, []);


  const chartData = raceTimes.map(raceTime => {
    const raceDate = raceTime.RaceDate ? new Date(raceTime.RaceDate.toString()).getTime() : null;
    
    const raceTimeInSeconds = raceTime.RaceMins ? raceTime.RaceMins * 60 + (raceTime.RaceSecs || 0) : 0;
    return [raceDate, raceTimeInSeconds];
  }).filter(data => data[0] !== null);

  const chartOptions = {
    title: {
      text: 'Race Times'
    },
    xAxis: {
      type: 'datetime',
      title: {
        text: 'Race Date'
      }
    },
    yAxis: {
      title: {
        text: 'Race Time (seconds)'
      },
    },
    series: [{
      name: 'Race Time',
      data: chartData,
      regression: true,
      regressionSettings: {
        type: 'linear',
        color: 'rgba(223, 83, 83, .9)',
        name: 'Trend Line'
      }
    }]
  };

    
  function deleteTodos() {
    selectedRaceTimeIDs.forEach(async (id) => {
      await client.models.RaceTime.delete({id});
    });
    setSelectedRaceTimeIDs([]);
    }




  const toggleChart = () => {
    setShowChart(!showChart);
  };

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1 className="text-xl mb-4">{user?.signInDetails?.loginId}'s Race Times</h1>
          <div>
          <button id="PrePoulateUsingOldRaceTimes" onClick={() => {
              oldRaceTimes.forEach(async (raceTime) => {
                await client.models.RaceTime.create(raceTime);
              });
              setShowPrepopulate(false);
          }}
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              hidden={!showPrepopulate}
            >
              Prepopulate using old race times
            </button>
          </div>
          <div id="newTimeForm" className="mb-12">
            <button
              onClick={() => setShowForm(!showForm)}
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {showForm ? 'Hide New Time Form' : 'Add New Time'}
            </button>
            {showForm && <RaceTimeCreateForm />}
          </div>
          <div id="raceTimesTable">
            <button
              onClick={() => setShowTable(!showTable)}
              className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {showTable ? 'Hide Results' : 'Show Results'}
            </button>

            <table className="table-auto" hidden={!showTable}>
              <thead>
                <tr>
                  <th className="border px-4 py-2">Race Distance</th>
                  <th className="border px-4 py-2">Race Date</th>
                  <th className="border px-4 py-2">Race Time</th>
                  <th className="border px-4 py-2">
                    <button id="deleteSelectedRaceTimes"
                      onClick={() => deleteTodos()}
                      className="bg-blue-500 hover:bg-blue-700 disabled:bg-blue-300 text-white font-bold py-2 px-4 rounded"
                      disabled={selectedRaceTimeIDs.length === 0}
                    >
                      Delete Selected
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {raceTimes.sort((a, b) => {
                  const dateA = a.RaceDate ? new Date(a.RaceDate.toString()) : null;
                  const dateB = b.RaceDate ? new Date(b.RaceDate.toString()) : null;
                  return dateA && dateB ? dateA.getTime() - dateB.getTime() : 0;
                }).map((raceTime) => (
                  <tr key={raceTime.id}>
                    <td className="border px-4 py-2">{raceTime.RaceDistance}</td>
                    <td className="border px-4 py-2">{raceTime.RaceDate}</td>
                    <td className="border px-4 py-2">{raceTime.RaceMins}:
                      {raceTime.RaceSecs != null ? (raceTime.RaceSecs < 10 ? `0${raceTime.RaceSecs}` : raceTime.RaceSecs) : 0}</td>
                      <td className="border px-4 py-2">
                        <input
                          type="checkbox"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedRaceTimeIDs([...selectedRaceTimeIDs, raceTime.id]);
                            } else {
                              setSelectedRaceTimeIDs(selectedRaceTimeIDs.filter(id => id !== raceTime.id));
                            }
                          }}
                        />
                      </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4" id="chart">
            <button
              onClick={toggleChart}
              className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {showChart ? 'Hide Chart' : 'Show Chart'}
            </button>
            {showChart && (
              <HighchartsReact
                highcharts={Highcharts}
                options={chartOptions}
                ref={chartComponentRef}
              />
            )}
          </div>
          <button onClick={signOut} className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Sign out
          </button>
        </main>
      )}
    </Authenticator>
  );
}

export default RaceTimes;
