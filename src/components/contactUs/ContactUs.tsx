import { useEffect,useState } from "react";
import type { Schema } from "../../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import '@aws-amplify/ui-react/styles.css';
import { AuthUser } from "aws-amplify/auth";
import ContactCreateForm from "../../../ui-components/ContactCreateForm";

const client = generateClient<Schema>();

function ContactUs({ user }: { user: AuthUser }) {
  // const [email, setEmail] = useState<string>('');
  // const [message, setMessage] = useState<string>('');
  const [contacts, setContacts] = useState<Array<Schema["Contact"]["type"]>>([]);
  // const [showForm, setShowForm] = useState<boolean>(false);
  
  useEffect(() => {
    const sub = client.models.Contact.observeQuery().subscribe({
      next: ({ items }) => {
        setContacts([...items]);
      },
    });
    return () => sub.unsubscribe();
  }, []);

  return (
        <main>
          {user && (
          <section>
          <h1 className="text-xl mb-4">Contact Us</h1>
          <div>
            <ContactCreateForm/>
          </div>
          <div className="overflow-x-auto">
                <table  id="raceTimesTable" className="table-auto w-full" >
                  <thead>
                    <tr>
                      <th className="border px-4 py-2">Email</th>
                      <th className="border px-4 py-2">Message</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contacts
                      .map((msg) => (
                        <tr key={msg.id}>
                          <td className="border px-4 py-2">{msg.Email}</td>
                          <td className="border px-4 py-2">{msg.Message}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>

        </section>
      )}
        </main>

      );
}

export default ContactUs;

