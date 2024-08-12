import '@aws-amplify/ui-react/styles.css';
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import RaceTimes from "./components/raceTimes/RaceTimes";
import SeedRaceTimes from './components/raceTimes/SeedRaceTimes';
import Timer from './components/timer/Timer';
import SeedProjects from './components/timer/SeedProjects';


function App() {
  return (
    <div className="container mx-auto font-sans">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="racetimes" element={<RaceTimes/>} />
        <Route path="seedracetimes" element={<SeedRaceTimes/>} />
        <Route path="timer" element={<Timer/>} />
        <Route path="seedprojects" element={<SeedProjects/>} />
      </Routes>
    </div>
  );
}

export default App;
