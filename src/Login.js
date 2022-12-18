import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Login.css";

export default function Login() {
  return (
    <div className="Login">
      <form>
        <div className="form-group row">
          <label for="inputEmail3" className="col-sm-2 col-form-label email">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control email-box"
              id="inputEmail3"
              placeholder="Email"
            />
          </div>
        </div>
        <br />
        <div className="form-group row">
          <label
            for="inputPassword3"
            className="col-sm-2 col-form-label password"
          >
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control password-box"
              id="inputPassword3"
              placeholder="Password"
            />
          </div>
        </div>
        <br />
        <div className="form-group row">
          <div className="col-sm-10">
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
