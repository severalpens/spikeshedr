import { Authenticator } from '@aws-amplify/ui-react'; // Import Auth module
import '@aws-amplify/ui-react/styles.css';
import TtTasks from "./TtTasks";


function TtTasksAuthWrapper() {

  return (
    <Authenticator>
      {({ signOut, user }) => {
        // setIsLoggedIn(!!user);
        return (
          <div className="mt-5">
            {user && <TtTasks user={user} />}

            <div className="flex justify-end">
              <button onClick={signOut} className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  w-48">
                Sign out
              </button>
            </div>

          </div>
        )
      }}
    </Authenticator>
  );
}

export default TtTasksAuthWrapper;

