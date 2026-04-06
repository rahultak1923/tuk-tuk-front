import React, { useState } from "react";
import "./UserLevel.css";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Home as HomeIcon, MessageCircle, User, Mic } from "lucide-react";

export default function UserLevel() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Active Level");

  const wayToLevelUp = [
    { title: "Diamond cost", sub: "1 diamond / 1 Exp", progress: "0/2,000" },
    { title: "Stay in room", sub: "10 mins / 10 Exp", progress: "0/200" },
    { title: "Send Messages to Friends", sub: "1 message / 10 Exp", progress: "0/50" },
    { title: "Gold cost", sub: "1 gold / 1 Exp", progress: "0/1,000" },
  ];

  return (
    <div className="level-container">
      {/* HEADER */}
      <div className="level-header">
        <ArrowLeft className="back-btn" onClick={() => navigate(-1)} />
        <h4>User Level</h4>
      </div>

      {/* TOP PURPLE SECTION */}
      <div className="purple-section">
        <div className="arc-container">
          {/* Semi-circular Progress Bar using SVG */}
          <svg viewBox="0 0 100 50" className="arc-svg">
            <path
              d="M 10,50 A 40,40 0 0,1 90,50"
              fill="none"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M 10,50 A 40,40 0 0,1 90,50"
              fill="none"
              stroke="#ffd700"
              strokeWidth="4"
              strokeDasharray="125.6"
              strokeDashoffset="50.24" // Adjust this for progress (60%)
              strokeLinecap="round"
            />
          </svg>
          
          <div className="avatar-center">
            <div className="level-avatar-wrapper">
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2" alt="user" />
              <div className="percentage-tag">60%</div>
            </div>
            <div className="level-ribbon">
              <span>Lv.1</span>
            </div>
          </div>

          <div className="level-info-row">
            <span>30/50</span>
            <span>Next: <b>Lv.2</b></span>
          </div>
        </div>

        {/* HORIZONTAL CATEGORY TABS */}
        <div className="level-tabs-scroll">
          {["Active Level", "Wealth Level", "Charm Level", "Game"].map((tab) => (
            <span
              key={tab}
              className={activeTab === tab ? "level-tab active" : "level-tab"}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </span>
          ))}
        </div>
      </div>

      {/* WHITE WAYS TO LEVEL UP SECTION */}
      <div className="ways-up-card">
        <h5 className="section-title">✨ Ways to Level Up ✨</h5>
        <p className="status-text">
          Your level is increasing at standard speed.<br />
          Today's upper limit: <span className="highlight-text">2,300 Exp</span>
        </p>

        <div className="tasks-list">
          {wayToLevelUp.map((task, index) => (
            <div className="task-item" key={index}>
              <div className="task-info">
                <h6>{task.title}</h6>
                <div className="task-sub">
                  <span>{task.sub}</span>
                  <span className="task-count">{task.progress}</span>
                </div>
              </div>
              <div className="task-progress-bar">
                <div className="inner-progress" style={{ width: "0%" }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* FIXED BOTTOM NAV (Home Page Style) */}
      {/* <div className="bottom-nav">
        <div className="nav-item" onClick={() => navigate("/home")}>
          <HomeIcon size={24} />
          <span>Home</span>
        </div>
        <div className="nav-item" onClick={() => navigate("/party")}>
          <Mic size={24} />
          <span>Party</span>
        </div>
        <div className="nav-item" onClick={() => navigate("/chat")}>
          <MessageCircle size={24} />
          <span>Chat</span>
        </div>
        <div className="nav-item active" onClick={() => navigate("/profile")}>
          <User size={24} />
          <span>Mine</span>
        </div>
      </div> */}
      {/* BOTTOM NAV */}
            <div className="bottom-nav1">
              <div className="nav-item" onClick={() => navigate("/home")}>
                <HomeIcon size={24} />
                <div>Home</div>
              </div>
              <div className="nav-item active">
                <Mic size={24} />
                <div>Party</div>
              </div>
              <div className="nav-item">
                <MessageCircle size={24} />
                <div>Chat <span className="dot" /></div>
              </div>
              <div className="nav-item">
                <User size={24} />
                <div>Mine</div>
              </div>
            </div>
    </div>
  );
}