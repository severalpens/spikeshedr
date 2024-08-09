import { useEffect, useRef, useState } from "react";
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import RaceTimeCreateForm from '../../ui-components/RaceTimeCreateForm';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


const options: Highcharts.Options = {
  title: {
      text: 'Race Times'
  },
  series: [{
      type: 'line',
      data: [1, 2, 3]
  }]
};


const client = generateClient<Schema>();


function RaceTimes() {
  const [raceTimes, setRaceTimes] = useState<Array<Schema["RaceTime"]["type"]>>([]);
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  useEffect(() => {
    client.models.RaceTime.observeQuery().subscribe({
      next: (data) => setRaceTimes([...data.items]),
    });
  }, []);

  // function deleteRaceTime(id: string) {
  //   client.models.RaceTime.delete({ id })
  // }

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>{user?.signInDetails?.loginId}'s raceTimes</h1>
          <RaceTimeCreateForm />
          <table className="table-auto">
            <thead>
              <tr>
                <th className="border px-4 py-2">Race Distance</th>
                <th className="border px-4 py-2">Race Date</th>
                <th className="border px-4 py-2">Race Time</th>
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
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={signOut} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Sign out
          </button>
          <HighchartsReact
      highcharts={Highcharts}
      options={options}
      ref={chartComponentRef}
      
    />
        </main>
      )}
    </Authenticator>
  );
}

export default RaceTimes;
