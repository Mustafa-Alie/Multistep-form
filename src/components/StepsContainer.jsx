import Steps from "./Steps";

function StepsContainer({ state }) {
  return (
    <div className=" col-lg-5 p-0 p-lg-3 my-lg-3 position-relative">
      <picture>
        <source
          media="(max-width:992px)"
          srcSet="./images/bg-sidebar-mobile.svg"
        ></source>
        <source
          media="(min-width:992px)"
          srcSet="./images/bg-sidebar-desktop.svg"
        ></source>
        <img
          src="/images/bg-sidebar-desktop.svg"
          alt="background img"
          className="steps-img img-fluid"
        ></img>
      </picture>

      <Steps state={state} />
    </div>
  );
}

export default StepsContainer;
