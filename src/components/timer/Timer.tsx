import { Authenticator } from '@aws-amplify/ui-react';
import { Link } from "react-router-dom";

function Timer() {

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
          <button onClick={signOut} className="my-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  w-48">
            Sign out
          </button>
        </main>
      )}
    </Authenticator>
  );
}

export default Timer;
