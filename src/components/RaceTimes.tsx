import { useEffect, useState } from "react";
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import RaceTimeCreateForm from '../../ui-components/RaceTimeCreateForm'

const client = generateClient<Schema>();


function RaceTimes() {
  const [raceTimes, setRaceTimes] = useState<Array<Schema["RaceTime"]["type"]>>([]);

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
          <ul>
            {raceTimes.sort((a, b) => {
              const dateA = a.RaceDate ? new Date(a.RaceDate.toString()) : null;
              const dateB = b.RaceDate ? new Date(b.RaceDate.toString()) : null;
              return dateA && dateB ? dateA.getTime() - dateB.getTime() : 0;
            }).map((raceTime) => (
              <li key={raceTime.id}>{raceTime.RaceDistance} | {raceTime.RaceDate} | {raceTime.RaceMins}:{raceTime.RaceSecs}</li>
            ))}
          </ul>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}

export default RaceTimes;
