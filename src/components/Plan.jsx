import { Form, Button } from "react-bootstrap";

function Plan({ state, dispatch }) {
  return (
    <div className="form-container mx-auto col-lg-7 d-flex flex-column justify-content-around pe-lg-5 p-3 pt-4 mb-4 mb-lg-0">
      <div>
        <h2 className="text-primary fs-3 fw-bold">Select your plan</h2>
        <p className="text-tertiary" style={{ fontSize: "0.8rem" }}>
          You have the option of monthly or yearly billing.
        </p>
      </div>

      <div className="container">
        <div className="row">
          <div
            className={`${
              state.cycle === "monthly" ? "gap-3" : "gap-1"
            } d-flex flex-column flex-lg-row justify-content-between`}
          >
            <div
              onClick={() => dispatch({ type: "SET_PLAN", payload: "arcade" })}
              className={`${
                state.plan === "arcade" ? "bg-info" : ""
              } hover-container p-3 flex-fill  rounded-4 border  border-2 border-light-subtle d-flex flex-lg-column gap-4`}
            >
              <img
                className="img-fluid align-self-start"
                src="/images/icon-arcade.svg"
              ></img>

              <div>
                <h3 className="text-primary fs-6 m-0">Arcade</h3>
                <p className="m-0 text-tertiary" style={{ fontSize: "0.9rem" }}>
                  {state.cycle === "monthly" ? "$9/mo" : "$90/yr"}
                </p>
                <span
                  className="text-primary fw-normal text-nowrap"
                  style={{ fontSize: "0.8rem" }}
                >
                  {state.cycle === "yearly" && "2 months free"}
                </span>
              </div>
            </div>

            <div
              onClick={() =>
                dispatch({ type: "SET_PLAN", payload: "advanced" })
              }
              className={`${
                state.plan === "advanced" ? "bg-info" : ""
              } hover-container p-3 flex-fill  rounded-4 border  border-2 border-light-subtle d-flex flex-lg-column gap-4`}
            >
              <img
                className="img-fluid align-self-start"
                src="/images/icon-advanced.svg"
              ></img>

              <div>
                <h3 className="text-primary fs-6 m-0">Advanced</h3>
                <p className="m-0 text-tertiary" style={{ fontSize: "0.9rem" }}>
                  {state.cycle === "monthly" ? "$12/mo" : "$120/yr"}
                </p>
                <span
                  className="text-primary fw-normal text-nowrap"
                  style={{ fontSize: "0.8rem" }}
                >
                  {state.cycle === "yearly" && "2 months free"}
                </span>
              </div>
            </div>

            <div
              onClick={() => dispatch({ type: "SET_PLAN", payload: "pro" })}
              className={`${
                state.plan === "pro" ? "bg-info" : ""
              } hover-container p-3 flex-fill  rounded-4 border  border-2 border-light-subtle d-flex flex-lg-column gap-4`}
            >
              <img
                className="img-fluid align-self-start"
                src="/images/icon-pro.svg"
              ></img>

              <div>
                <h3 className="text-primary fs-6 m-0">Pro</h3>
                <p className="m-0 text-tertiary" style={{ fontSize: "0.9rem" }}>
                  {state.cycle === "monthly" ? "$15/mo" : "$150/yr"}
                </p>
                <span
                  className="text-primary fw-normal text-nowrap"
                  style={{ fontSize: "0.8rem" }}
                >
                  {state.cycle === "yearly" && "2 months free"}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-1 mt-lg-5">
          <div className="col bg-body-tertiary d-flex justify-content-center align-items-center gap-3 p-3">
            <span className="text-tertiary fw-semibold">Monthly</span>

            <Form.Check
              // checked={}
              onChange={() => dispatch({ type: "SET_CYCLE" })}
              type="switch"
              id="mySwitch"
              className="custom-switch"
            />

            <span className="text-primary fw-semibold">Yearly</span>
          </div>
        </div>
      </div>

      <div className="mt-3 d-lg-flex justify-content-between d-none ">
        <Button
          variant="link"
          type="Button"
          className="back-link text-tertiary"
          onClick={() => dispatch({ type: "PREVIOUS_STEP" })}
        >
          Go Back
        </Button>

        <Button
          variant="primary"
          size="lg"
          type="Button"
          className="text-white "
          onClick={() => dispatch({ type: "NEXT_STEP" })}
        >
          Next Step
        </Button>
      </div>
    </div>
  );
}

export default Plan;
