import { useState, useRef } from "react";

import StepsContainer from "./components/StepsContainer";
import NextStepBtn from "./components/NextStepBtn";
import Info from "./components/Info";
import Plan from "./components/Plan";
import Addons from "./components/Addons";
import Summary from "./components/Summary";
import Thanks from "./components/Thanks";

function App() {
  const [step, setStep] = useState(1); //info, plan, add-on, summary, thanks

  const formRef = useRef(null);

  //handle Info comp. validation & submission:
  const [validated, setValidated] = useState(false); //state for the error messages.

  function handleNextStep() {
    setStep((prevStep) => prevStep + 1);
  }

  function handleValidateForm(event) {
    event.preventDefault();
    event.stopPropagation();

    const form = formRef.current;

    if (form?.checkValidity() === false) {
      setValidated(true);
    } else {
      handleNextStep();
    }
  }

  //////////////////////////////////////////////

  const [cycle, setCycle] = useState("monthly"); //monthly, yearly

  const [plan, setPlan] = useState("arcade"); // arcade, advanced, pro

  /////////////////////////////////////////////
  const [addon, setAddon] = useState({
    "Online Service": false,
    "Larger Storage": false,
    "Customizable Profile": false,
  });

  return (
    <main className="bg-main vh-100 d-flex flex-column justify-content-center align-items-center">
      <section className="white-container row bg-white rounded-5 d-flex ">
        <StepsContainer step={step} />

        {step === 1 && (
          <Info
            onValidateForm={handleValidateForm}
            validated={validated}
            formRef={formRef}
          />
        )}
        {step === 2 && (
          <Plan
            setCycle={setCycle}
            cycle={cycle}
            setStep={setStep}
            setPlan={setPlan}
            plan={plan}
          />
        )}

        {step === 3 && (
          <Addons
            addon={addon}
            setAddon={setAddon}
            setStep={setStep}
            cycle={cycle}
          />
        )}

        {step === 4 && (
          <Summary cycle={cycle} plan={plan} addon={addon} setStep={setStep} />
        )}

        {step === 5 && <Thanks />}
      </section>

      <NextStepBtn
        onValidateForm={handleValidateForm}
        validated={validated}
        step={step}
        setStep={setStep}
      />
    </main>
  );
}

export default App;
