import axios from "axios";
import React, { useEffect, useState } from "react";
import { API, config } from "../constants";
import makeToast from "../Toaster";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const registerUser = async (formData) => {
    try {
      const res = await axios.post(
        API + "/api/user/register",
        formData,
        config
      );
      if (res.data.token) {
        localStorage.setItem("authToken", res.data.token);
        localStorage.setItem("Name", res.data.user.name);
        makeToast("Success", res.data.msg);
        window.location.href = "/Home";
      } else {
        makeToast("error", res.data.msg);
      }
    } catch (error) {
      makeToast("error", error.message);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      window.location.href = "/Home";
    }
  });

  return (
    <body class="auth">
      <div class="preloader">
        <div class="preloader-icon"></div>
      </div>

      <div class="form-wrapper">
        <div class="container">
          <div class="card">
            <div class="row g-0">
              <div class="col">
                <div class="row">
                  <div class="col-md-10 offset-md-1">
                    <div class="ltf-block-logo d-block d-lg-none text-center text-lg-start">
                      <img
                        width="120"
                        src="https://vetra.laborasyon.com/assets/images/logo.svg"
                        alt="logo"
                      />
                    </div>
                    <div class="my-5 text-center text-lg-start">
                      <h1 class="display-8">Create Account</h1>
                      <p class="text-muted">
                        You can create a free account now
                      </p>
                    </div>
                    <form class="mb-5">
                      <div class="mb-3">
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                          class="form-control"
                          placeholder="Enter fullname"
                          autofocus
                          required
                        />
                      </div>
                      <div class="mb-3">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                          class="form-control"
                          placeholder="Enter email"
                          required
                        />
                      </div>
                      <div class="mb-3">
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                          class="form-control"
                          placeholder="Enter password"
                          required
                        />
                      </div>
                      <div class="mb-3">
                        <input
                          type="password"
                          value={confirmPassword}
                          onChange={(e) => {
                            setConfirmPassword(e.target.value);
                          }}
                          class="form-control"
                          placeholder="Re-enter password"
                          required
                        />
                      </div>
                      <div class="text-center text-lg-start">
                        <button
                          class="btn btn-primary"
                          type="button"
                          onClick={() => {
                            password === confirmPassword
                              ? registerUser({ name, email, password })
                              : makeToast("error", "Password does't match");
                          }}
                        >
                          Sign Up
                        </button>
                      </div>
                    </form>
                    <div style={{ height: "80px" }}></div>
                    <p class="text-center d-block d-lg-none mt-5 mt-lg-0">
                      Don't have an account? <a href="/">Sign In</a>.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col d-none d-lg-flex border-start align-items-center justify-content-between flex-column text-center">
                <div class="logo">
                  <img
                    width="120"
                    src="https://vetra.laborasyon.com/assets/images/logo.svg"
                    alt="logo"
                  />
                </div>
                <div>
                  <h3 class="fw-bold">Welcome to TODO !</h3>
                  <p class="lead my-5">Do you already have an account?</p>
                  <a href="/" class="btn btn-primary">
                    Sign In
                  </a>
                </div>
                <ul class="list-inline">
                  <li class="list-inline-item">
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#">Terms & Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <script src="../../libs/bundle.js"></script>

      <script src="../../dist/js/app.min.js"></script>
    </body>
  );
};

export default Signup;
