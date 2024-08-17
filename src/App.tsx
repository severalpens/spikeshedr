import '@aws-amplify/ui-react/styles.css';
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import RaceTimesAuthWrapper from './components/raceTimes/RaceTimesAuthWrapper';
import Timer from './components/timer/Timer';
import TimerProjects from './components/timer/TimerProjects';
import TimerTasks from './components/timer/TimerTasks';
import TimerPeriods from './components/timer/TimerPeriods';
import TtProjects from './components/ttProjects/TtProjects';
import TtProjectTasks from './components/ttProjects/TtProjectTasks';
import TtTaskTimeBlocks from './components/ttProjects/TtTimeBlocks';


function App() {
  return (
    <div className="container mx-auto font-sans">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="racetimes" element={<RaceTimesAuthWrapper/>} />
        <Route path="timer" element={<Timer/>} />
        <Route path="timerprojects" element={<TimerProjects/>} />
        <Route path="timertasks" element={<TimerTasks/>} />
        <Route path="timerperiods" element={<TimerPeriods/>} />
        <Route path="ttprojects" element={<TtProjects/>} />
        <Route path="ttprojecttasks/:projectId" element={<TtProjectTasks/>} />
        <Route path="tttimeblocks/:projectId/:taskId" element={<TtTaskTimeBlocks/>} />
      </Routes>
    </div>
  );
}

export default App;
