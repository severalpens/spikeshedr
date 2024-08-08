import { useEffect, useState } from "react";
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import SwimTimeCreateForm from '../../ui-components/SwimTimeCreateForm'

const client = generateClient<Schema>();


function SwimTimes() {
  const [swimTimes, setSwimTimes] = useState<Array<Schema["SwimTime"]["type"]>>([]);

  useEffect(() => {
    client.models.SwimTime.observeQuery().subscribe({
      next: (data) => setSwimTimes([...data.items]),
    });
  }, []);

  function deleteSwimTime(id: string) {
    client.models.SwimTime.delete({ id })
  }

  return (
    <Authenticator>
      {({ signOut, user }) => (
    <main>
          <h1>{user?.signInDetails?.loginId}'s swimTimes</h1>
          <SwimTimeCreateForm />
      <ul>
        {swimTimes.map((swimTime) => (
          <li onClick={() => deleteSwimTime(swimTime.id)}
           key={swimTime.id}>{swimTime.SwimDate}</li>
        ))}
      </ul>
      <button onClick={signOut}>Sign out</button>
    </main>
        
      )}
      </Authenticator>
  );
}

export default SwimTimes;
