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

  function deleteRaceTime(id: string) {
    client.models.RaceTime.delete({ id })
  }

  return (
    <Authenticator>
      {({ signOut, user }) => (
    <main>
          <h1>{user?.signInDetails?.loginId}'s raceTimes</h1>
          <RaceTimeCreateForm />
      <ul>
        {raceTimes.map((raceTime) => (
          <li onClick={() => deleteRaceTime(raceTime.id)}
           key={raceTime.id}>{raceTime.RaceDate}</li>
        ))}
      </ul>
      <button onClick={signOut}>Sign out</button>
    </main>
        
      )}
      </Authenticator>
  );
}

export default RaceTimes;
