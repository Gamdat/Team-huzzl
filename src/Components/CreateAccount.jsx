import React, { useState } from "react";
import "./CreateAccount.css"
import ProgressBar from "./ProgressBar";


const CreateAccount = ({ onContinue }) => {
  const [formData, setFormData] = useState({
    phone: "",
    name: "",
    location: "Nigeria",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onContinue(formData);
  

  if (formData.password.length < 12) {
    setError(" Password must be at least 12 characters long.");
    return;
  } else if (formData.password.length > 20) {
    setError(" Password must not exceed 20 characters.");
    return;
  } else {
    setError("");
  }

  onContinue(formData);
};

  return (
<div className="page-create">
    <div className="card">
       <div className="logo">
        <img src="/Images/Logo.png" alt="logo"/>
      </div>

        <h2>Create an Account</h2>
            <ProgressBar step={1} />
      <form onSubmit={handleSubmit}>
        <label>Phone Number</label>
        <div className="phone-row">
          <select name="country"
value={formData.location}
onChange={handleChange}
>
  <option value="NGN">Nigeria</option>
  <option value="GH">Ghana</option>
  <option value="KE">Kenya</option>
</select>

        <input
          type="tel"
          name="phone"
          placeholder="+234 000-000-0000"
          value={formData.phone}
          onChange={handleChange}
        />
          </div>

<div className="side">
<div className="full-name">
        <label>Full Name</label>
        <input
          type="text"
          name="name"
          placeholder="Olivia Smith"
          value={formData.name}
          onChange={handleChange}
        />
</div>

<div className="location">
        <label>Location</label>
        <select name="location" value={formData.location} onChange={handleChange}>
          <option value="Nigeria">Nigeria</option>
          <option value="Ghana">Ghana</option>
          <option value="Kenya">Kenya</option>
        </select>
</div>
</div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="************"
          value={formData.password}
          onChange={handleChange}
required
        />
{error && <p style={{ color: "red"}}>{error}</p>}
        <p className="character">At least 12 characters, no more than 20 characters.</p>
        <button type="submit">Continue</button>
      </form>
      
<div className="sign-in">
  <p>Already have an account? <a href="#">Sign in</a></p>
</div>

<div className="privacy">
  <p>By signing i confirm that i have carefully read and agree to the HUZZL</p>
  <p><a href="#">Privacy Policy and Terms of Services.</a></p>
</div>
    </div>
</div>
  );
};


export default CreateAccount;