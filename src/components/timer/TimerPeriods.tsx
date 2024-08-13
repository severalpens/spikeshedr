import { Authenticator } from '@aws-amplify/ui-react';
import { Link } from "react-router-dom";

function TimerPeriods() {

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1 className="text-xl mb-4">{user?.signInDetails?.loginId}'s Periods</h1>
          <div id="breadcrumb" className="mb-8">
            <Link to="/timer">Timer</Link> &gt; Periods
          </div>
          <div>
            TBD
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

export default TimerPeriods;
