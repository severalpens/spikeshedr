import '@aws-amplify/ui-react/styles.css';
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import RaceTimesAuthWrapper from './components/raceTimes/RaceTimesAuthWrapper';
import TtTasksAuthWrapper from './components/ttTasks/TtTasksAuthWrapper';
import CookiesConsent from './components/CookiesConsent';
import React, { useEffect } from 'react';
import TxsAuthWrapper from './components/txs/TxsAuthWrapper';
import Freestyle from './components/freestyle/Freestyle'; // Import the 'Freestyle' component


function App() {
  const [, setConsentGiven] = React.useState<boolean>(false);

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
        <Route path="freestyle" element={<Freestyle />} /> {/* Use the 'Freestyle' component */}

      </Routes>
      <div hidden>
        <CookiesConsent/>
      </div>
    </div>
  );
}

export default App;
