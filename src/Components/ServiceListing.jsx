import React, { useState } from "react";
import "./ServiceListing.css"
import ProgressBar from "./ProgressBar";


const ServiceListing = ({ onSubmit }) => {
  const [serviceData, setServiceData] = useState({
    category: "Plumbing",
    title: "",
    currency: "NGN",
    price: "",
    availability: "",
    description: "",
  });

  const handleChange = (e) => {
    setServiceData({ ...serviceData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(serviceData);
  };



  return (
<div className="page-service">
    <div className="card">
<div className="logo">
        <img src="/Images/Logo.png" alt="logo"/>
      </div>
      <h2>Service Listing</h2>
 <ProgressBar step={3} />

      <form onSubmit={handleSubmit}>
        <label>Category</label>
        <select
          name="category"
          value={serviceData.category}
          onChange={handleChange}

        >

<option value="Plumbing">Plumbing</option>
          <option value="Electrical">Electrical</option>
          <option value="Cleaning">Cleaning</option>
          <option value="Catering">Catering</option>
          <option value="Baker">Baker</option>
          <option value="Welder">Welder</option>
          <option value="Handy Man">Handy Man</option>
          <option value="Make-Up Artist">Make-Up Artist</option>
          <option value="Mobile Service">Mobile Service</option>
          <option value="Tailor">Tailor/Fashion Designer</option>
          <option value="Dog Trainer">Dog Trainer</option>
          <option value="Private Chef">Private Chef</option>
          <option value="House Keeper">House Keeper</option>
          <option value="Generator Technician">Generator Technician</option>
          <option value="Event Decorator">Carpenter</option>
           <option value="Hair Stylist">Hair Stylist</option>
            <option value="Painter">Painter</option>
             <option value="Solar Panel Installe">Solar Panel Installer</option>
            <option value="Driver/Chauffert">Driver/Chauffer</option>
             <option value="Baby Sitter">Baby Sitter</option>
              <option value="Personal Fitness Coach">Personal Fitness Coach</option>
               <option value="Spa Therapist">Spa Therapist</option>
</select>

        <label>Title</label>

        <input
          type="text"
          name="title"
          placeholder="Enter Service Title"
          value={serviceData.title}
          onChange={handleChange}
        />

 <label>Pricing</label>
        <div className="pricing-row">
          <div className="price">
            <input
              type="number"
              name="price"
              placeholder="5000"
              value={serviceData.price}
              onChange={handleChange}
            />

          </div>
          <div className="currency">
            <select
              name="currency"
              value={serviceData.currency}
              onChange={handleChange}
            >

              <option value="NGN">NGN</option>
              <option value="USD">USD</option>
              <option value="GBP">GBP</option>
            </select>
          </div>

        </div>

        <label>Availability</label>
        <input
          type="text"
          name="availability"
          placeholder="Mondays, Tuesdays..."
          value={serviceData.availability}
          onChange={handleChange}

        />

        <label>Description</label>
        <textarea
          name="description"
          placeholder="Enter a description..."
          value={serviceData.description}
          onChange={handleChange}

        />

        <button type="submit">Continue</button>
      </form>
    </div>
</div>
  );

};


export default ServiceListing;

