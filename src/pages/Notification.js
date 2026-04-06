import React from "react";
import "./Notification.css";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Notification() {
  const navigate = useNavigate();

  const data = [
    {
      name: "asvini",
      msg: "Liked your post",
      time: "22 hours ago",
      img: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      name: "Anika sharma",
      msg: "Liked your post",
      time: "22 hours ago",
      img: "https://randomuser.me/api/portraits/women/2.jpg"
    }
  ];

  return (
    <div className="notification-page">

      <div className="header">
        <ArrowLeft onClick={() => navigate(-1)} />
        <h2>Notification</h2>
      </div>

      <div className="tabs">
        <span className="active">Moment</span>
        <span>Room</span>
      </div>

      {data.map((item, i) => (
        <div className="notif-card" key={i}>
          <img src={item.img} alt="" />
          <div>
            <h4>{item.name}</h4>
            <p>{item.msg}</p>
            <span>{item.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Notification;