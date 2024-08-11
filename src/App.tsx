import '@aws-amplify/ui-react/styles.css';
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import RaceTimes from "./components/raceTimes/RaceTimes";
import SeedRaceTimes from './components/raceTimes/SeedRaceTimes';


function App() {
  return (
    <div className="container mx-auto font-sans">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="racetimes" element={<RaceTimes/>} />
        <Route path="seedracetimes" element={<SeedRaceTimes/>} />
      </Routes>
    </div>
  );
}

export default App;
