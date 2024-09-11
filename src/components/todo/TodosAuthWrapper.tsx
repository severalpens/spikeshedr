import { Authenticator } from '@aws-amplify/ui-react'; // Import Auth module
import '@aws-amplify/ui-react/styles.css';
import Todos from "./Todos";


function TodosAuthWrapper() {
  return (
    <Authenticator>
      {({ signOut, user }) => {
        return (
        <div className="mt-5">
        {user && <Todos  user={user} />}
        <div className="flex justify-end">
          <button onClick={signOut} className="mb-4 mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  w-48">
            Sign out
          </button>
          </div>
        </div>
      )}}
    </Authenticator>
  );
}

export default TodosAuthWrapper;

