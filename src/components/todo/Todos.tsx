import { useEffect, useState } from "react";
import type { Schema } from "../../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import '@aws-amplify/ui-react/styles.css';
import TodoCreateForm from '../../../ui-components/TodoCreateForm';
import { AuthUser } from "aws-amplify/auth";

const client = generateClient<Schema>();

function Todos({ user }: { user: AuthUser }) {

  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [isAllSelected, setIsAllSelected] = useState<boolean>(false);
  const [selectedTodoIDs, setSelectedTodoIDs] = useState<Array<string>>([]);

  useEffect(() => {
    const sub = client.models.Todo.observeQuery().subscribe({
      next: ({ items }) => {
        setTodos([...items]);
      },
    });
    return () => sub.unsubscribe();
  }, []);


  function deleteAllTodos() {
    selectedTodoIDs.forEach(async (id) => {
      await client.models.Todo.delete({ id });
    });
    setSelectedTodoIDs([]);
    setIsAllSelected(false);
  }



  return (
    <main>
    {user && (
    <section>
    <h1 className="text-xl mb-4">To Dos (Prototype)</h1>
    <div id="newItemForm" className="mb-12">
      <button
        onClick={() => setShowForm(!showForm)}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  w-48"
      >
        {showForm ? 'Hide New Item Form' : 'Add New Item'}
      </button>
      {showForm && <TodoCreateForm />}
    </div>
      <div >
        <div className="flex justify-end mb-4">
          <button id="deleteSelectedButton"
            onClick={() => deleteAllTodos()}
            className="bg-blue-500 hover:bg-blue-700 disabled:bg-blue-300 text-white  px-4 rounded text-sm"
            disabled={selectedTodoIDs.length === 0}
          >
            Delete Selected
          </button>
        </div>
        <div className="overflow-x-auto">
          <table  id="todosTable" className="table-auto w-full" >
            <thead>
              <tr>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">IsCompleted</th>
                <th className="border px-4 py-2">
                  <input
                    className="mr-2"
                    type="checkbox"
                    checked={isAllSelected}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedTodoIDs(todos.map(todo => todo.id));
                        setIsAllSelected(true);
                      } else {
                        setSelectedTodoIDs([]);
                        setIsAllSelected(false);
                      }
                    }}
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              {todos                
                .map((todo) => (
                  <tr key={todo.id}>
                    <td className="border px-4 py-2">{todo.Name}</td>
                    <td className="border px-4 py-2">
                      <input
                        type="checkbox"
                        id="isCompletedInput"
                        onChange={(e) => {
                          if (e.target.checked) {
                            
                            client.models.Todo.update({ id: todo.id, IsCompleted: true });
                          } else {
                            client.models.Todo.update({ id: todo.id, IsCompleted: false });
                          }
                        }}
                        checked={todo.IsCompleted ?? false}
                      />
                    </td>
                    <td className="border px-4 py-2">
                      <input
                        type="checkbox"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedTodoIDs([...selectedTodoIDs, todo.id]);
                          } else {
                            setSelectedTodoIDs(selectedTodoIDs.filter(id => id !== todo.id));
                          }
                        }}
                        checked={selectedTodoIDs.includes(todo.id)}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
  </section>
)}
  </main>
);
  
}

export default Todos;

