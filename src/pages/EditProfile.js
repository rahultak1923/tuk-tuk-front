import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./editProfile.css";
import { FaArrowLeft, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function EditProfile() {
  const navigate = useNavigate();
  const fileInputRef = useRef();

  const [formData, setFormData] = useState({
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    gender: "Male",
    nickname: "Rahul",
    birthday: "2004-10-19",
    interests: "",
    education: "Degree / Graduation",
    school: ""
  });

  // handle text change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // open file picker on image click
  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  // change avatar
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);

      setFormData({
        ...formData,
        avatar: imageUrl
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Updated Data:", formData);

    alert("Profile Updated");
  };

  return (
    <div className="container-fluid edit-bg">

      {/* HEADER */}

      <div className="d-flex align-items-center p-3">

        <FaArrowLeft
          size={18}
          style={{ cursor: "pointer" }}
          onClick={() => navigate(-1)}
        />

        <h5 className="mx-auto fw-bold">
          Account
        </h5>

      </div>

      <form onSubmit={handleSubmit}>

        {/* PROFILE IMAGE */}

        <div className="text-center mt-3">

          <div
            className="progress-circle"
            style={{ cursor: "pointer" }}
            onClick={handleImageClick}
          >
            <img
              src={formData.avatar}
              className="edit-dp"
              alt=""
            />
          </div>

          {/* hidden file input */}

          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleImageChange}
          />

          <h5 className="mt-3 text-purple">
            53% complete
          </h5>

          <p className="text-muted small px-4">
            Complete your account info to attract more like-minded mates
          </p>

        </div>

        {/* PERSONAL INFO */}

        <div className="mt-4">

          <h6 className="text-muted mb-3">
            Personal info
          </h6>

          {/* Avatar */}

          <div className="list-item">
            Avatar
            <span>Editable</span>
          </div>

          {/* Gender */}

          <div className="list-item">

            <span>Gender</span>

            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="border-0 text-end"
            >
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

          </div>

          {/* Nickname */}

          <div className="list-item">

            <span>Nickname</span>

            <input
              type="text"
              name="nickname"
              value={formData.nickname}
              onChange={handleChange}
              className="border-0 text-end"
            />

          </div>

          {/* Birthday */}

          <div className="list-item">

            <span>Birthday</span>

            <input
              type="date"
              name="birthday"
              value={formData.birthday}
              onChange={handleChange}
              className="border-0 text-end"
            />

          </div>

          {/* Interests */}

          <div className="list-item">

            <span>Interests</span>

            <input
              type="text"
              name="interests"
              value={formData.interests}
              onChange={handleChange}
              placeholder="Add interests"
              className="border-0 text-end"
            />

          </div>

          {/* Education */}

          <div className="list-item">

            <span>Education</span>

            <input
              type="text"
              name="education"
              value={formData.education}
              onChange={handleChange}
              className="border-0 text-end"
            />

          </div>

          {/* School */}

          <div className="list-item">

            <span>School</span>

            <div className="d-flex align-items-center gap-2">

              <input
                type="text"
                name="school"
                value={formData.school}
                onChange={handleChange}
                placeholder="Add school"
                className="border-0 text-end"
              />

              <button
                type="button"
                className="add-btn"
              >
                <FaPlus />
              </button>

            </div>

          </div>

          {/* SAVE */}

          <button
            type="submit"
            className="btn btn-primary w-100 mt-4"
          >
            Save
          </button>

        </div>

      </form>

    </div>
  );
}