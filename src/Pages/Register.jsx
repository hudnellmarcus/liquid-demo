import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Register1 = () => {
  <div>1st page</div>

};

const Register2 = () => {

}; 



export const Register = () => {
  const [currentStep, setCurrentStep] = useState(1); 
  const navigate = useNavigate(); 

  const handleNext = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1); 
    } else {
      navigate('/register/2'); 
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Register1 />;
      case 2: 
        return <Register2 />; 
      default:
        return null; 
    }
  }
  return (
    <div>
    {renderStep()}
    </div>
  )
}

export default Register;