import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";

import axios from "axios";
import PropTypes from "prop-types";

const Login = ({ login,history }) => {
 
  let [formData, setFormData] = useState({
   EmailId: "",  Password: ""
  });

  const { EmailId,  Password } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
   
    e.preventDefault();
    let config = {}
    let res = await axios.post(
      "http://localhost:1000/api/dealers/login",
      formData,
      config
    );
    history.push('/display')
  };
  return (
    <Fragment>
      <h1 className="large text-primary">Sign In</h1>
      
      <form className="form" onSubmit={(e) => onSubmit(e)}>
      <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="EmailId" class="form-control" 
     placeholder="EmailId"
     name="EmailId"
     value={EmailId}
     onChange={(e) => onChange(e)}
     required
    id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
        <div className="form-group">
        <input type="Password" class="form-control" 
     placeholder="Password"
     name="Password"
     minLength="6"
     value={Password}
     onChange={(e) => onChange(e)}
     required
    id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>

        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Dont't have an account? <Link to="/Register">Sign Up</Link>
      </p>

    </Fragment>
  );
};

Login.propTypes = {

};

export default Login;
