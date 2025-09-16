import React, { useState } from "react";
import "./ProfileSetup.css"
import ProgressBar from "./ProgressBar";

const ProfileSetup = ({ onFinish }) => {
  const [profileData, setProfileData] = useState({
    bio: "",
    description: "",
    document: null,
    profileImage: null,
  });

   const handleImageChange = (e) => {

    if (e.target.files && e.target.files[0]) {

      const file = e.target.files[0];

      setProfileData({

        ...profileData,

        profileImage: URL.createObjectURL(file), // preview image

      });

    }

  };
  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setProfileData({
      ...profileData,
      document: e.target.files ? e.target.files[0] : null,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFinish(profileData);
  };

  return (
<div className="page-profile">
    <div className="card">
 <div className="logo">
        <img src="/Images/Logo.png" alt="logo"/>
      </div>
      <h2>Profile Setup</h2>

         <ProgressBar step={2} />

      <form onSubmit={handleSubmit}>
         <div className="profile-image-upload">
      <label htmlFor="profileImage">
        <div className="image-preview">
          {profileData.profileImage ? (
            <img src={profileData.profileImage} alt="Profile" />
          ) : (
            <span className="upload-placeholder">+</span>
          )}
        </div>

      </label>

      <input
        type="file"

        id="profileImage"

        accept="image/*"

        onChange={handleImageChange}

        style={{ display: "none" }}

      />
    </div>

        <label>Bio</label>
        <input
          type="text"
          name="bio"
          placeholder="Tell us about yourself"
          value={profileData.bio}
          onChange={handleChange}

        />


        <label>Description</label>
        <textarea
          name="description"
          placeholder="Enter a description"
          value={profileData.description}
          onChange={handleChange}

        />

        <label>Business Vrification Document</label>
       <div className="document-upload">
          <label htmlFor="documentUpload" className="upload-box">
            <span className="upload-icon">📄</span>
            <span className="upload-text">
              {profileData.document
                ? profileData.document.name
                : ""}
            </span>
          </label>

          <input
            type="file"
            id="documentUpload"
            accept=".pdf,.doc,.docx,.jpg,.png"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />

        </div>

        <button type="submit">Continue</button>
      </form>
    </div>
</div>
  );
};

export default ProfileSetup;