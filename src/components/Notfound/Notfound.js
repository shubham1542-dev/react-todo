import React from "react";

const Notfound = () => {
  return (
    <body class="d-md-flex align-items-center justify-content-center">
      <div class="container text-center p-5 p-md-0">
        <div class="row mb-4">
          <div class="col-md-4 m-auto">
            <figure>
              <img
                class="img-fluid"
                src="https://vetra.laborasyon.com/assets/svg/404.svg"
                alt="image"
              />
            </figure>
          </div>
        </div>
        <h2 class="display-6">Page not found</h2>
        <p class="text-muted my-4">
          The page you want to go is not currently available
        </p>
        <div class="d-flex gap-3 justify-content-center">
          <a href="/" class="btn btn-primary">
            Home Page
          </a>
          <a href="/" class="btn bg-white">
            Back
          </a>
        </div>
      </div>

      <script src="../../libs/bundle.js"></script>

      <script src="../../dist/js/app.min.js"></script>
    </body>
  );
};

export default Notfound;
