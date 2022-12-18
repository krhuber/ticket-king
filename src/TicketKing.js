import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./TicketKing.css";
import Login from "./Login";

export default function TicketKing() {
  return (
    <div className="TicketKing">
      <nav className="navbar sticky-top navbar-expand-md navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Ticket King
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">
              Login
            </a>
            <a className="nav-item nav-link" href="#">
              Concerts
            </a>
            <a className="nav-item nav-link" href="#">
              Venues
            </a>
            <a className="nav-item nav-link" href="#">
              More
            </a>
          </div>
        </div>
      </nav>{" "}
      <div className="container mb-5">
        <h1 className="m-5">Ticket King</h1>
        <Login />
      </div>
    </div>
  );
}
