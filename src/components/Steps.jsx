function Steps({ step }) {
  return (
    <ul className="steps-ul list-group text-nowrap position-absolute d-flex flex-row flex-lg-column align-items-start">
      <li className="list-group-item bg-transparent border-0 d-flex justify-content-center align-items-center gap-3 ">
        <div
          className={`${
            step === 1 ? "bg-active" : "text-white border border-1 border-white"
          } num-container rounded-circle d-flex justify-content-center align-items-center`}
        >
          1
        </div>

        <div className="d-none d-lg-block ">
          <p className="text-secondary m-0 fs-6">STEP 1</p>
          <p className="text-white m-0 fs-6 fw-semibold ">YOUR INFO</p>
        </div>
      </li>

      <li className="list-group-item bg-transparent border-0 d-flex justify-content-center align-items-center gap-3 ">
        <div
          className={`${
            step === 2 ? "bg-active" : "text-white border border-1 border-white"
          } num-container rounded-circle d-flex justify-content-center align-items-center`}
        >
          2
        </div>

        <div className="d-none d-lg-block ">
          <p className="text-secondary m-0 fs-6">STEP 2</p>
          <p className="text-white m-0 fs-6 fw-semibold">SELECT PLAN</p>
        </div>
      </li>

      <li className="list-group-item bg-transparent border-0 d-flex justify-content-center align-items-center gap-3 ">
        <div
          className={`${
            step === 3 ? "bg-active" : "text-white border border-1 border-white"
          } num-container rounded-circle d-flex justify-content-center align-items-center`}
        >
          3
        </div>

        <div className="d-none d-lg-block ">
          <p className="text-secondary m-0 fs-6">STEP 3</p>
          <p className="text-white m-0 fs-6 fw-semibold">ADD-ONS</p>
        </div>
      </li>

      <li className="list-group-item bg-transparent border-0 d-flex justify-content-center align-items-center gap-3 ">
        <div
          className={`${
            step === 4 ? "bg-active" : "text-white border border-1 border-white"
          } num-container rounded-circle d-flex justify-content-center align-items-center`}
        >
          4
        </div>

        <div className="d-none d-lg-block ">
          <p className="text-secondary m-0 fs-6">STEP 1</p>
          <p className="text-white m-0 fs-6 fw-semibold">SUMMARY</p>
        </div>
      </li>
    </ul>
  );
}

export default Steps;
