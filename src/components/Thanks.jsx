function Thanks() {
  return (
    <div className="form-container mx-auto col-lg-7 d-flex flex-column justify-content-around pe-lg-5 p-3 pt-4">
      <div className="text-center">
        <img
          src={`${import.meta.env.BASE_URL}images/icon-thank-you.svg`}
          alt="thank you icone"
          className="img-fluid mb-3"
        ></img>

        <p className="text-primary fs-3 fw-bold">Thank you!</p>
        <p className="text-tertiary">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
}

export default Thanks;
