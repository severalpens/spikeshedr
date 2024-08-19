import '@aws-amplify/ui-react/styles.css';
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import RaceTimesAuthWrapper from './components/raceTimes/RaceTimesAuthWrapper';
import TtTasksAuthWrapper from './components/ttTasks/TtTasksAuthWrapper';
import CookiesConsent from './components/CookiesConsent';
import React, { useEffect } from 'react';
import TxsAuthWrapper from './components/txs/TxsAuthWrapper';


function App() {
  const [consentGiven, setConsentGiven] = React.useState<boolean>(false);

  useEffect(() => {
    setConsentGiven(localStorage.getItem('consentGiven') === 'true');
  }
  , []);


return (
    <div className="container mx-auto font-sans">
      <Navbar  />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="racetimes" element={<RaceTimesAuthWrapper  />} />
        <Route path="tttasks" element={<TtTasksAuthWrapper   />} />
        <Route path="txs" element={<TxsAuthWrapper   />} />
      </Routes>
      <div hidden={consentGiven}>
        <CookiesConsent/>
      </div>
    </div>
  );
}

export default App;
