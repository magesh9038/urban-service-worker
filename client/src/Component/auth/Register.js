import React, { Fragment, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import { register } from "../../action/auth";
// import { setAlert } from "../../action/alert";

import PropTypes from "prop-types";
const Register = ({  register,history }) => {
  let [formData, setFormData] = useState({
    Name: "", EmailId: "", MobileNo: "", Password: "",Password2:"", ServiceTypes:"", PermanentAddress:"", Address:"", AadharNo:"", Location:""
  });

  const { Name, EmailId, MobileNo, Password, ServiceTypes, PermanentAddress, Address, AadharNo, Location,Password2 } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
   
    e.preventDefault();
    let config = {}
    let res = await axios.post(
      "http://localhost:1000/api/dealers/register",
      formData,
      config
    );
    history.push('/login')
    console.log(formData);
    // if (Password !== Password2) {
    //   setAlert("passwords does not work go with someother please", "danger");
    // } else {
    //   register({Name, EmailId, MobileNo, Password, ServiceTypes, PermanentAddress, Address, AadharNo, Location,Password2 });
    // }
  };
  return (
    <Fragment>
      <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
          <a class="navbar-brand" href="#">
         
            Urban Service
          </a>
        </div>
      </nav>
      <h1 className="large text-danger">
        <i class="fa-solid fa-right-to-bracket"></i>Sign Up
      </h1>
      <p className="lead">
        <i className="fas fa-user"></i> Create Your Account
      </p>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
      <div class="form-floating mb-3">
  <input type="Name" class="form-control" id="floatingInput" placeholder="Name"   name="Name"
            value={Name}
            onChange={(e) => onChange(e)}
            required/>
  <label for="floatingInput">Name</label>
</div>
<div class="form-floating mb-3">
  <input type="EmailId" class="form-control" id="floatingInput" placeholder="EmailId"   name="EmailId"
            value={EmailId}
            onChange={(e) => onChange(e)}
            required/>
  <label for="floatingInput">EmailId</label>
</div>

<div class="form-floating mb-3">
  <input type="Address" class="form-control" id="floatingInput" placeholder="Address"   name="Address"
            value={Address}
            onChange={(e) => onChange(e)}
            required/>
  <label for="floatingInput">Address</label>
</div>
<div class="form-floating">
  <input type="PermanentAddress" class="form-control" id="floatingPassword" placeholder="PermanentAddress" name="PermanentAddress" value={PermanentAddress}
            onChange={(e) => onChange(e)}
            required/>
  <label for="floatingPassword">PermanentAddress</label>
</div>
<div class="form-floating">
  <input type="ServiceTypes" class="form-control" id="floatingPassword" placeholder="ServiceTypes" name="ServiceTypes" value={ServiceTypes}
            onChange={(e) => onChange(e)}
            required/>
  <label for="floatingPassword">ServiceTypes</label>
</div>
<div class="form-floating">
  <input type="MobileNo" class="form-control" id="floatingPassword" placeholder="MobileNo" name="MobileNo"  value={MobileNo}
            onChange={(e) => onChange(e)}
            required/>
  <label for="floatingPassword">MobileNo</label>
</div>
<div class="form-floating">
  <input type="Password" class="form-control" id="floatingPassword" placeholder="Password" name="Password"  value={Password}
            onChange={(e) => onChange(e)}
            required/>
  <label for="floatingPassword">Password</label>
</div>
<div class="form-floating">
  <input type="Password2" class="form-control" id="floatingPassword" placeholder="Password2" name="Password2" value={Password2}
            onChange={(e) => onChange(e)}
            required/>
  <label for="floatingPassword">Password2</label>
</div>
<div class="form-floating">
  <input type="Location" class="form-control" id="floatingPassword" placeholder="Location" name="Location"  value={Location}
            onChange={(e) => onChange(e)}
            required/>
  <label for="floatingPassword">Location</label>
</div>
      
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
     
    </Fragment>
  );
};
Register.prototype = {

};
export default Register;
