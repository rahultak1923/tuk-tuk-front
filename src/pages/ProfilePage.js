import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./profile.css";
import { useNavigate } from "react-router-dom";

// Frame Image Import (Ensure path is correct: src/assets/img/frame/frame1.png)
import frame1 from "../assets/img/frame1/frame1.png"; 
import frame2 from "../assets/img/level/level30.png"; 
import frame3 from "../assets/img/Batch/vip-batch.png"; 

import { FaHome, FaInstagram, FaShareAlt, FaWallet } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { 
  MdDiamond, MdMonetizationOn, MdTask, MdStore, 
  MdVerified, MdSupportAgent 
} from "react-icons/md";

export default function ProfilePage() {
  const [tab, setTab] = useState("moment");
  const [activeMenuPage, setActiveMenuPage] = useState(0); 
  const navigate = useNavigate();

  // Dots logic for Menu Scroll
  const handleMenuScroll = (e) => {
    const scrollLeft = e.target.scrollLeft;
    const width = e.target.offsetWidth;
    const page = Math.round(scrollLeft / width);
    setActiveMenuPage(page);
  };

  const menuPages = [
    [
      { name: "Level", icon: <MdVerified />, path: "/level" },
      { name: "Instagram", icon: <FaInstagram /> },
      { name: "Share", icon: <FaShareAlt /> },
      { name: "Help", icon: <MdSupportAgent /> },
      { name: "Badge", icon: <MdVerified /> },
      { name: "Store", icon: <MdStore />, path: "/store" },
      { name: "Task", icon: <MdTask />, path: "/task" },
      { name: "Wallet", icon: <FaWallet />, path: "/wallet" },
    ],
    [
      { name: "VIP", icon: <MdVerified /> },
      { name: "Room", icon: <FaHome /> },
      { name: "Rewards", icon: <MdDiamond />, path: "/rewards" },
      { name: "Friends", icon: <FaHome /> },
      { name: "More1", icon: <MdStore /> },
      { name: "More2", icon: <MdTask /> },
      { name: "More3", icon: <MdDiamond /> },
      { name: "More4", icon: <FaWallet /> },
    ],
  ];

  return (
    <div className="container-fluid profile-bg pb-5">
      
      {/* TOP BAR */}
      <div className="d-flex justify-content-between p-3 align-items-center">
        <div className="d-flex gap-2">
          <div className="pill"><MdDiamond color="#a855f7" /> 32</div>
          <div className="pill"><MdMonetizationOn color="#f59e0b" /> 0</div>
        </div>
        <IoSettingsOutline 
          size={24} 
          style={{ cursor: "pointer", color: "#555" }} 
          onClick={() => navigate("/settings")} 
        />
      </div>

      {/* HEADER BG (Avatar in center) */}
      <div className="header-bg">
         <img 
            src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg" 
            className="avatar-img-top" 
            alt="3d-avatar" 
         />
      </div>

      {/* PROFILE CARD (White Background, Extended Height) */}
     {/* PROFILE CARD */}
<div className="card-box header-card extended-height no-colour-bg">
  <div className="d-flex align-items-start justify-content-between">
    
    <div className="d-flex align-items-center">
      {/* DP SECTION - Badges ab iske andar hain */}
      <div className="dp-section-container">
        <div className="dp-wrapper-main">
           <img src={frame1} className="dp-frame-static" alt="frame" />
           <img 
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2" 
              className="dp-png-user" 
              alt="user" 
              onClick={() => navigate("/edit-profile")} 
           />
        </div>

        {/* BADGES JUST BELOW DP IMAGE */}
       
      </div>

      {/* NAME & ID SECTION */}
      <div className="ms-3 mt-1">
        <h6 className="fw-bold mb-0">Rahul <span className="age-pill">27</span></h6>
        <small className="text-muted">ID: 87334454</small>
        
        {/* Yahan se badges hata diye hain */}
      </div>

    </div>

    <div className="text-end">
      <button className="verify-btn-style">Verify</button>
      <div className="love-zone-style mt-2"><FaHome /> Love Zone</div>
    </div>
  </div>
   <div className="dp-badges-under">
           <img src={frame2} className="badge-large" alt="lvl" />
           <img src={frame3} className="badge-large pt-2" alt="badge" />
        </div>
</div>

      {/* STATS */}
      <div className="card-box d-flex justify-content-around text-center py-3">
        <div onClick={() => navigate("/following")} style={{cursor: 'pointer'}}>
          <h6 className="mb-0 fw-bold">1</h6><small className="text-muted">Following</small>
        </div>
        <div onClick={() => navigate("/followers")} style={{cursor: 'pointer'}}>
          <h6 className="mb-0 fw-bold">29</h6><small className="text-muted">Followers</small>
        </div>
        <div>
          <h6 className="mb-0 fw-bold">37</h6><small className="text-muted">Visitors</small>
        </div>
      </div>

      {/* MENU WITH DOTS */}
      <div className="card-box">
        <h6 className="fw-bold mb-3">Menu</h6>
        <div className="menu-scroll" onScroll={handleMenuScroll}>
          <div className="menu-wrapper">
            {menuPages.map((page, pIndex) => (
              <div key={pIndex} className="menu-page">
                <div className="row g-3">
                  {page.map((item, i) => (
                    <div key={i} className="col-3 text-center" onClick={() => item.path && navigate(item.path)}>
                      <div className="menu-icon-circle">{item.icon}</div>
                      <small className="menu-label-text">{item.name}</small>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* DOTS INDICATOR */}
        <div className="d-flex justify-content-center gap-1 mt-3">
          {menuPages.map((_, i) => (
            <div key={i} className={activeMenuPage === i ? "dot-ui active-dot-ui" : "dot-ui"}></div>
          ))}
        </div>
      </div>

      {/* TABS & MOMENT */}
      <div className="card-box d-flex justify-content-around tabs-container">
        {["moment", "profile", "honor", "gift"].map((t) => (
          <div key={t} className={tab === t ? "tab-ui active-tab" : "tab-ui"} onClick={() => setTab(t)}>{t}</div>
        ))}
      </div>

      <div className="card-box">
        {tab === "moment" && (
          <div className="moment-post">
            <div className="d-flex align-items-center mb-2">
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2" className="mini-dp-img" alt="" />
              <b className="ms-2">ankit</b>
            </div>
            <p className="small">Just setting up my profile 🚀</p>
            <img src="https://img.freepik.com/free-vector/flat-creativity-concept.jpg" className="img-fluid rounded-3" alt="" />
          </div>
        )}
      </div>

    </div>
  );
}