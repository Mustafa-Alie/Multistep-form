import { Button } from "react-bootstrap";
import data from "../data/data";

function Summary({ cycle, plan, addon, setStep }) {
  const addedAddons = [];
  for (let el in addon) {
    if (addon[el] === true) addedAddons.push(el);
  }
  const totalAddons = addedAddons.reduce((acc, cur) => {
    return acc + data.addons[cur][cycle];
  }, 0);
  const total = data.plans[plan][cycle] + totalAddons;

  return (
    <div className="form-container mx-auto col-lg-7 d-flex flex-column justify-content-around pe-lg-5 p-3 pt-4">
      <div>
        <h2 className="text-primary fs-3 fw-bold">Finishing up</h2>
        <p className="text-tertiary" style={{ fontSize: "0.8rem" }}>
          Doulbe check everything before confirming.
        </p>
      </div>

      <div>
        <div className="bg-body-tertiary rounded-3 p-3 ">
          <div className="d-flex justify-content-between">
            <div>
              <p className="text-primary mb-0">
                {plan}
                <span> ({cycle})</span>
              </p>
              <Button
                variant="link"
                type="Button"
                className="back-link text-tertiary  p-0"
                onClick={() => setStep((prevStep) => prevStep - 2)}
              >
                change
              </Button>
            </div>

            <p>{`$${data.plans[plan][cycle]}/${cycle} `}</p>
          </div>

          <hr className="border-dark-subtle my-4"></hr>

          <div>
            {addedAddons.map((el) => (
              <div key={el} className="d-flex justify-content-between">
                <p className="text-tertiary mb-0 fs-6">{el}</p>
                <p className="mb-0 fs-6 text-primary">
                  +${data.addons[el][cycle]}/{cycle === "monthly" ? "mo" : "yr"}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="d-flex justify-content-between mt-3 p-3">
          <p className="text-tertiary mb-0 fs-6">
            Total
            <span> (per {cycle})</span>
          </p>

          <p className="price-color fs-5 fw-semibold">+${total}/{cycle}</p>
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
          variant="info"
          size="lg"
          type="button"
          className="text-white "
          onClick={() => setStep((prevStep) => prevStep + 1)}
        >
          Confirm
        </Button>
      </div>
    </div>
  );
}

export default Summary;
