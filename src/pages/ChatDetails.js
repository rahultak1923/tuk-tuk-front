import React from "react";
import { useLocation } from "react-router-dom";
import "./chatDetails.css";
import { FaArrowLeft } from "react-icons/fa";

export default function ChatDetails() {
  const { state } = useLocation();

  return (
    <div className="chat-detail">

      {/* HEADER */}
      <div className="chat-top d-flex align-items-center px-3">
        <FaArrowLeft className="me-3" />
        <img src={state?.img} className="top-img" />
        <h6 className="mb-0 ms-2">{state?.name}</h6>
      </div>

      {/* CHAT AREA */}
      <div className="chat-body">

        {/* MESSAGE LEFT */}
        <div className="chat-row">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            className="msg-img"
          />

          <div className="msg-bubble">
            Real ho tum?
          </div>
        </div>

      </div>

      {/* INPUT */}
      <div className="chat-input px-3 d-flex align-items-center">
        <input placeholder="Type a message..." />
        <button>Send</button>
      </div>

    </div>
    
  );
}