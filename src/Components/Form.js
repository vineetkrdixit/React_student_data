import React from "react";
import "../Components/Form.css";
import { useState } from "react";

export default function Form() {
  const [id, setid] = useState("");
  const [name, setName] = useState("");
  const [marks, setMarks] = useState("");
  const [detail, setDetails] = useState([]);
  const handleChange1 = (event) => {
    setid(event.target.value);
    console.log(event.target.value);
  };
  const handleChange2 = (event) => {
    setName(event.target.value);
    console.log(event.target.value);
  };
  const handleChange3 = (event) => {
    setMarks(event.target.value);
    console.log(event.target.value);
  };
  const handleClick = (event) => {
    event.preventDefault();
    const details = {
      ids: id,
      names: name,
      mark: marks,
    };
    setDetails([...detail, details]);
    setid("");
    setName("");
    setMarks("");
    // console.log(details);
    console.log(detail);
  };

  return (
    <>
      <div className="full-body">
        <div className="col-sm-12 stuDash">
          <h1>Student Dashboard</h1>
        </div>
        <div className="main-body">
          <div className="col-sm-6 form-wrapper">
            <form className="form-body" action="/submitted" method="GET">
              <label htmlFor="ID">ID</label>
              <input
                type="text"
                className="registrationID"
                id="ID"
                onChange={handleChange1}
                value={id}
              />
              <label htmlFor="personname">Name</label>
              <input
                type="text"
                className="name"
                id="personname"
                onChange={handleChange2}
                value={name}
              />
              <label htmlFor="totalmarks">Marks</label>
              <input
                type="number"
                className="marks"
                id="totalmarks"
                onChange={handleChange3}
                value={marks}
              />
              <br />
              <input
                className="btn btn-success"
                type="submit"
                value="Submit"
                onClick={handleClick}
              />
            </form>
          </div>
          <div className="col-sm-6"></div>
        </div>
      </div>
    </>
  );
}
