import React from "react";
import "../Components/Form.css";

export default function Form() {
  return (
    <>
      <div className="full-body">
        <div className="col-sm-12 stuDash">
          <h1>Student Dashboard</h1>
        </div>
        <div className="main-body">
          <div className="col-sm-6 form-wrapper">
            <form className="form-body">
              <label htmlFor="ID">ID</label>
              <input type="text" className="registrationID" id="ID" />
              <label htmlFor="personname">Name</label>
              <input type="text" className="name" id="personname" />
              <label htmlFor="totalmarks">Marks</label>
              <input type="number" className="marks" id="totalmarks" />
              <br />
              <input class="btn btn-success" type="submit" value="Submit" />
            </form>
          </div>
          <div className="col-sm-6"></div>
        </div>
      </div>
    </>
  );
}
