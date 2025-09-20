import React, { useState } from "react";
import CreateAccount from "./Components/CreateAccount";
import ProfileSetup from "./Components/ProfileSetup";
import ServiceListing from "./Components/ServiceListing";
import SuccessPage from "./Components/SuccessPage";
import "./App.css";

const App = () => {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({});

  const handleContinue = (data) => {
    setUserData({ ...userData, ...data });
    setStep((prev) => prev + 1);
  };

  const handleFinish = (data) => {
    const finalData = { ...userData, ...data };
    console.log("Final Signup Data:", finalData);
   setStep(4);
  };



  return (

    <div className="app-container">
      {step === 1 && <CreateAccount onContinue={handleContinue} />}
      {step === 2 && <ProfileSetup onFinish={handleContinue} />}
      {step === 3 && <ServiceListing onSubmit={handleFinish} />}
   {step === 4 && <SuccessPage/>}
    </div>

  );

};



export default App;



