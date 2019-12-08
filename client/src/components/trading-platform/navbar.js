import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Helios
      </a>
      <div className="collapse navbar-collapse">
        <button
          className="btn btn-outline-success my-2 my-sm-0 ml-auto"
          type="submit"
        >
          How it works
        </button>
      </div>
    </nav>
  );
}
