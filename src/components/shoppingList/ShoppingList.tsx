import { useEffect, useState } from "react";
import type { Schema } from "../../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import '@aws-amplify/ui-react/styles.css';
import ShoppingListItemCreateForm from '../../../ui-components/ShoppingListItemCreateForm';
import { AuthUser } from "aws-amplify/auth";

const client = generateClient<Schema>();

function ShoppingList({ user }: { user: AuthUser }) {

  const [shoppingList, setShoppingList] = useState<Array<Schema["ShoppingListItem"]["type"]>>([]);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [isAllSelected, setIsAllSelected] = useState<boolean>(false);
  const [selectedItemIDs, setSelectedItemIDs] = useState<Array<string>>([]);

  useEffect(() => {
    const sub = client.models.ShoppingListItem.observeQuery().subscribe({
      next: ({ items }) => {
        setShoppingList([...items]);
      },
    });
    return () => sub.unsubscribe();
  }, []);


  function deleteAllShoppingList() {
    selectedItemIDs.forEach(async (id) => {
      await client.models.ShoppingListItem.delete({ id });
    });
    setSelectedItemIDs([]);
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
      {showForm && <ShoppingListItemCreateForm />}
    </div>
      <div >
        <div className="flex justify-end mb-4">
          <button id="deleteSelectedButton"
            onClick={() => deleteAllShoppingList()}
            className="bg-blue-500 hover:bg-blue-700 disabled:bg-blue-300 text-white  px-4 rounded text-sm"
            disabled={selectedItemIDs.length === 0}
          >
            Delete Selected
          </button>
        </div>
        <div className="overflow-x-auto">
          <table  id="shoppingListTable" className="table-auto w-full" >
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
                        setSelectedItemIDs(shoppingList.map(item => item.id));
                        setIsAllSelected(true);
                      } else {
                        setSelectedItemIDs([]);
                        setIsAllSelected(false);
                      }
                    }}
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              {shoppingList                
                .map((item) => (
                  <tr key={item.id}>
                    <td className="border px-4 py-2">{item.Name}</td>
                    <td className="border px-4 py-2">
                      <input
                        type="checkbox"
                        id="isCompletedInput"
                        onChange={(e) => {
                          if (e.target.checked) {
                            
                            client.models.ShoppingListItem.update({ id: item.id, IsCompleted: true });
                          } else {
                            client.models.ShoppingListItem.update({ id: item.id, IsCompleted: false });
                          }
                        }}
                        checked={item.IsCompleted ?? false}
                      />
                    </td>
                    <td className="border px-4 py-2">
                      <input
                        type="checkbox"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedItemIDs([...selectedItemIDs, item.id]);
                          } else {
                            setSelectedItemIDs(selectedItemIDs.filter(id => id !== item.id));
                          }
                        }}
                        checked={selectedItemIDs.includes(item.id)}
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

export default ShoppingList;

