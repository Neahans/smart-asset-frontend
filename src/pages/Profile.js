import React, { useState } from "react";

import "./Profile.css";

function Profile() {
  const storedUser = JSON.parse(
    localStorage.getItem("currentUser")
  );

  const [profile, setProfile] = useState(
    storedUser || {
      name: "User",
      email: "user@smartasset.com",
      role: "Employee",
      department: "General",
      phone: "",
    }
  );

  const [editing, setEditing] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setProfile((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem(
      "currentUser",
      JSON.stringify(profile)
    );

    setEditing(false);

    alert("Profile updated successfully!");
  };

  return (
    <div className="profile-page">

      {/* Header */}
      <div className="page-heading">
        <div>
          <h2>My Profile</h2>
          <p>Manage your account information.</p>
        </div>

        {!editing && (
          <button
            className="btn btn-primary"
            onClick={() => setEditing(true)}
          >
            <i className="bi bi-pencil me-2"></i>
            Edit Profile
          </button>
        )}
      </div>

      <div className="row g-4">

        {/* Profile Card */}
        <div className="col-lg-4">
          <div className="profile-card text-center">

            <div className="profile-avatar">
              <i className="bi bi-person-fill"></i>
            </div>

            <h4>{profile.name}</h4>

            <p className="profile-role">
              {profile.role}
            </p>

            <div className="profile-divider"></div>

            <div className="profile-info-item">
              <i className="bi bi-building"></i>
              <span>{profile.department}</span>
            </div>

            <div className="profile-info-item">
              <i className="bi bi-envelope"></i>
              <span>{profile.email}</span>
            </div>

            <div className="profile-info-item">
              <i className="bi bi-telephone"></i>
              <span>
                {profile.phone || "Not provided"}
              </span>
            </div>

          </div>
        </div>

        {/* Profile Form */}
        <div className="col-lg-8">
          <div className="profile-form-card">

            <div className="profile-form-header">
              <h5>Profile Information</h5>
              <p>
                View and update your personal details.
              </p>
            </div>

            <form onSubmit={handleSubmit}>

              <div className="row">

                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={profile.name}
                    onChange={handleChange}
                    disabled={!editing}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={profile.email}
                    onChange={handleChange}
                    disabled={!editing}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    Username
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    value={storedUser?.username || ""}
                    disabled
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    Role
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    value={profile.role}
                    disabled
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    Department
                  </label>

                  <input
                    type="text"
                    name="department"
                    className="form-control"
                    value={profile.department}
                    onChange={handleChange}
                    disabled={!editing}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    Phone Number
                  </label>

                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    value={profile.phone}
                    onChange={handleChange}
                    disabled={!editing}
                  />
                </div>

              </div>

              {editing && (
                <div className="profile-form-actions">

                  <button
                    type="button"
                    className="btn btn-light"
                    onClick={() => setEditing(false)}
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    <i className="bi bi-check-lg me-2"></i>
                    Save Changes
                  </button>

                </div>
              )}

            </form>

          </div>
        </div>

      </div>

    </div>
  );
}

export default Profile;