import '@aws-amplify/ui-react/styles.css';
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import RaceTimesAuthWrapper from './components/raceTimes/RaceTimesAuthWrapper';
import TtTasksAuthWrapper from './components/ttTasks/TtTasksAuthWrapper';
import CookiesConsent from './components/CookiesConsent';
import React from 'react';


function App() {
  const [consentGiven, setConsentGiven] = React.useState<boolean>(false); 
  return (
    <div className="container mx-auto font-sans">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="racetimes" element={<RaceTimesAuthWrapper/>} />
        <Route path="tttasks" element={<TtTasksAuthWrapper/>} />
      </Routes>
      <div hidden={consentGiven}>
      <CookiesConsent consentGiven={consentGiven} setConsentGiven={setConsentGiven}  />
      </div>
    </div>
  );
}

export default App;
