import { Button } from "react-bootstrap";

function NextStepBtn({ onValidateForm: handleValidateForm, state, dispatch }) {
  return (
    <section
      className={`${
        state.step <= 4 ? "" : "d-none"
      } d-flex justify-content-between align-items-center d-lg-none bg-white w-100 p-3`}
    >
      {state.step > 1 ? (
        <Button
          variant="link"
          className="back-link text-tertiary"
          onClick={() => dispatch({ type: "PREVIOUS_STEP" })}
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
        className={`${state.step === 4 ? "btn-info" : ""} text-white ms-auto`}
        onClick={handleValidateForm}
      >
        {state.step < 4 ? "Next Step" : "Confirm"}
      </Button>
    </section>
  );
}

export default NextStepBtn;
