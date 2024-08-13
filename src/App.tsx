import '@aws-amplify/ui-react/styles.css';
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import RaceTimes from "./components/raceTimes/RaceTimes";
import Timer from './components/timer/Timer';
import TimerProjects from './components/timer/TimerProjects';
import TimerTasks from './components/timer/TimerTasks';
import TimerPeriods from './components/timer/TimerPeriods';


function App() {
  return (
    <div className="container mx-auto font-sans">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="racetimes" element={<RaceTimes/>} />
        <Route path="timer" element={<Timer/>} />
        <Route path="timerprojects" element={<TimerProjects/>} />
        <Route path="timertasks" element={<TimerTasks/>} />
        <Route path="timerperiods" element={<TimerPeriods/>} />
      </Routes>
    </div>
  );
}

export default App;
