import { Button } from "react-bootstrap";

function NextStepBtn({
  onValidateForm: handleValidateForm,
  validated,
  step,
  setStep,
}) {
  return (
    <section
      className={`${
        step <= 4 ? "" : "d-none"
      } d-flex justify-content-between align-items-center d-lg-none bg-white w-100 p-3`}
    >
      {step > 1 ? (
        <Button
          variant="link"
          className="back-link text-tertiary"
          onClick={() => setStep((prevStep) => prevStep - 1)}
        >
          Go Back
        </Button>
      ) : (
        ""
      )}
      <Button
        variant="primary"
        size="lg"
        type="submit"
        className={`${step === 4 ? "btn-info" : ""} text-white ms-auto`}
        onClick={handleValidateForm}
      >
        {step < 4 ? "Next Step" : "Confirm"}
      </Button>
    </section>
  );
}

export default NextStepBtn;
