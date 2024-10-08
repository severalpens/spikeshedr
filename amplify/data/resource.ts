//relative path: amplify/data/resource.ts
import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any user authenticated via an API key can "create", "read",
"update", and "delete" any "Todo" records.
=========================================================================*/
const schema = a.schema({
  ConsentGiven: a
    .model({
      IsGiven: a.boolean(),
    }).authorization((allow) => [allow.owner()]),

    RaceTime: a
    .model({
      RaceDate: a.date(),
      RaceDistance: a.integer(),
      RaceMins: a.integer(),
      RaceSecs: a.integer(),
    }).authorization((allow) => [allow.owner()]),


    TtTaskTimeBlock: a.model({
      StartTime: a.datetime(),
      EndTime: a.datetime(),
      TtTaskId: a.id()
    }).authorization(allow => [allow.owner()]),

    TtTask: a.model({
      ProjectName: a.string(),
      TaskName: a.string().required(),
      IsRunning: a.boolean(),
    }).authorization(allow => [allow.owner()]),

    Tx: a.model({
      TxDate: a.string(),
      TxDateTime: a.datetime(),
      TxDateDate: a.date(),
      TxAmount: a.integer(),
      TxType: a.string(),
      TxCategory: a.string(),
      TxDescription: a.string(),
    }).authorization(allow => [allow.owner()]),

    

    Contact: a.model({
      Email: a.string(),
      Message: a.string(),
    }).authorization(allow => [allow.owner()]),



    Todo: a.model({
      Name: a.string(),
      IsCompleted: a.boolean(),
    }).authorization(allow => [allow.owner()]),


    ShoppingListItem: a.model({
      Name: a.string(),
      IsCompleted: a.boolean(),
    }).authorization(allow => [allow.owner()]),


});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    // This tells the data client in your app (generateClient())
    // to sign API requests with the user authentication token.
    defaultAuthorizationMode: 'userPool',
  },
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
