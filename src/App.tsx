import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import SwimTimeCreateForm from '../ui-components/SwimTimeCreateForm'

const client = generateClient<Schema>();


function App() {
  const [swimTimes, setSwimTimes] = useState<Array<Schema["SwimTime"]["type"]>>([]);

  useEffect(() => {
    client.models.SwimTime.observeQuery().subscribe({
      next: (data) => setSwimTimes([...data.items]),
    });
  }, []);

  // function createSwimTime() {
  //   client.models.SwimTime.create({ content: window.prompt("SwimTime content") });
  // }
  
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
      <div>
        🥳 App successfully hosted. Try creating a new swimTime.
        <br />
        <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
          Review next step of this tutorial.
        </a>
      </div>
      <button onClick={signOut}>Sign out</button>
    </main>
        
      )}
      </Authenticator>
  );
}

export default App;
