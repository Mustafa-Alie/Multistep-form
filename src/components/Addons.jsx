import { Form, Button } from "react-bootstrap";

function Addons({ addon, setAddon, setStep, cycle }) {
  return (
    <div className="form-container mx-auto col-lg-7 d-flex flex-column justify-content-around pe-lg-5 p-3 pt-4">
      <div>
        <h2 className="text-primary fs-3 fw-bold">Pick add-ons</h2>
        <p className="text-tertiary" style={{ fontSize: "0.8rem" }}>
          Add-ons help enhance your gaming expierence.
        </p>
      </div>

      <div className="d-flex flex-column gap-3">
        <div
          onClick={() => {
            setAddon((prevValue) => {
              return {
                ...prevValue,
                ["Online Service"]: !prevValue["Online Service"],
              };
            });
          }}
          className={`${
            addon["Online Service"] ? "active-checkbox" : ""
          } checkbox-container border border-2 border-subtle-light rounded-4 p-3 d-flex justify-content-between align-items-center`}
        >
          <div className="d-flex align-items-center gap-1">
            <Form.Check
              checked={addon["Online Service"]}
              inline
              type={"checkbox"}
              className="outline-none big-checkbox"
              onChange={() => {}}
            />

            <div>
              <p className="mb-0 text-primary fw-6">Online Service</p>
              <p className="mb-0 text-tertiary " style={{ fontSize: "0.8rem" }}>
                Access to multiplayer games
              </p>
            </div>
          </div>
          <p className="price-color ">
            {cycle === "monthly" ? "+$1/mo" : "+$10/yr"}
          </p>
        </div>

        <div
          onClick={() => {
            setAddon((prevValue) => {
              return {
                ...prevValue,
                ["Larger Storage"]: !prevValue["Larger Storage"],
              };
            });
          }}
          className={`${
            addon["Larger Storage"] ? "active-checkbox" : ""
          } checkbox-container border border-2 border-subtle-light rounded-4 p-3 d-flex justify-content-between align-items-center`}
        >
          <div className="d-flex align-items-center gap-1">
            <Form.Check
              checked={addon["Larger Storage"]}
              inline
              type={"checkbox"}
              className="outline-none big-checkbox"
              onChange={() => {}}
            />

            <div>
              <p className="mb-0 text-primary fw-6">Larger Storage</p>
              <p className="mb-0 text-tertiary " style={{ fontSize: "0.8rem" }}>
                Extra 1TB of cloud storage
              </p>
            </div>
          </div>
          <p className="price-color ">
            {cycle === "monthly" ? "+$2/mo" : "+$20/yr"}
          </p>
        </div>

        <div
          onClick={() => {
            setAddon((prevValue) => {
              return {
                ...prevValue,
                ["Customizable Profile"]: !prevValue["Customizable Profile"],
              };
            });
          }}
          className={`${
            addon["Customizable Profile"] ? "active-checkbox" : ""
          } checkbox-container border border-2 border-subtle-light rounded-4 p-3 d-flex justify-content-between align-items-center`}
        >
          <div className="d-flex align-items-center gap-1">
            <Form.Check
              checked={addon["Customizable Profile"]}
              inline
              type={"checkbox"}
              className="outline-none big-checkbox"
              onChange={() => {}}
            />

            <div>
              <p className="mb-0 text-primary fw-6">Customizable Profile</p>
              <p className="mb-0 text-tertiary " style={{ fontSize: "0.8rem" }}>
                Custom theme on your profile
              </p>
            </div>
          </div>
          <p className="price-color ">
            {cycle === "monthly" ? "+$2/mo" : "+$20/yr"}
          </p>
        </div>
      </div>

      <div className="mt-3 d-lg-flex justify-content-between d-none ">
        <Button
          variant="link"
          type="Button"
          className="back-link text-tertiary"
          onClick={() => setStep((prevStep) => prevStep - 1)}
        >
          Go Back
        </Button>

        <Button
          variant="primary"
          size="lg"
          type="submit"
          className="text-white "
          onClick={() => {
            setStep((prevStep) => prevStep + 1);
          }}
        >
          Next Step
        </Button>
      </div>
    </div>
  );
}

export default Addons;
