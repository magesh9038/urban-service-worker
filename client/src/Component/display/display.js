import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
const Display = ({display}) => {
let [formData,setFormData] = useState({
  Address: "", ServiceTypes: "",  loc: "", dealer_details: ""
});
const { Address, ServiceTypes,  loc, dealer_details } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
const onSubmit = async (e) => {
   
let config = {}
let res = await axios.put(
  "http://localhost:1000/api/users/workers",
  formData,
  config
);
}
  return (
    <Fragment>
     <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
          <button type="button" class="btn btn-primary btn-lg">
           submit
          </button>
       
    </Fragment>
  );
};



export default Display;
