import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import '@aws-amplify/ui-react/styles.css';
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SwimTimes from "./components/SwimTimes";

const client = generateClient<Schema>();


function App() {
  return (
    <div className="container mx-auto font-sans">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="swimtimes" element={<SwimTimes/>} />
      </Routes>
    </div>
  );
}

export default App;
