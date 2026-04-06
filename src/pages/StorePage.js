import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./store.css";
import { FaArrowLeft } from "react-icons/fa";
import { MdDiamond, MdMonetizationOn } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function StorePage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Ring");

  const tabs = ["Ring", "Jewellery", "Mic", "Car", "Bubble", "Entrance"];

  // Array generate kar rahe hain frame1.jpeg se frame17.jpeg tak
  const ringProducts = Array.from({ length: 17 }, (_, i) => ({
    id: i + 1,
    name: `Premium Ring ${i + 1}`,
    price: 120000 - (i * 1000), // Thoda price variation ke liye
    // Assets path as per your requirement
    image: require(`../assets/img/frame/frame${i + 1}.jpeg`) 
  }));

  const handlePurchase = (name) => {
    const confirmPurchase = window.confirm(`Do you want to purchase ${name}?`);
    if (confirmPurchase) {
      alert("Purchase Successful");
    }
  };

  return (
    <div className="container-fluid store-bg">
      {/* HEADER */}
      <div className="store-header">
        <FaArrowLeft
          size={18}
          style={{ cursor: "pointer" }}
          onClick={() => navigate(-1)}
        />
        <h5 className="fw-bold m-0">Store</h5>
        <div></div>
      </div>

      {/* BALANCE */}
      <div className="balance-box" style={{borderTop:"1px solid #eee" }}>
        <div className="balance-item">
          Balance:
        </div>
        <div className="pill">
          <MdDiamond color="#a855f7" /> 32
        </div>
        <div className="pill">
          <MdMonetizationOn color="#f59e0b" /> 1200
        </div>
      </div>

      {/* CATEGORY WITH IMAGES */}
      {/* <div className="category-row">
        <div className="category-item">
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" className="category-img" alt="" />
          Intimacy
        </div>
        <div className="category-item">
          <img src="https://cdn-icons-png.flaticon.com/512/892/892458.png" className="category-img" alt="" />
          Profile Dress Up
        </div>
        <div className="category-item">
          <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" className="category-img" alt="" />
          Chat Frame
        </div>
      </div> */}

      {/* TABS */}
      <div className="store-tabs">
        {tabs.map((tab) => (
          <div
            key={tab}
            className={activeTab === tab ? "tab-item active" : "tab-item"}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* PRODUCTS SECTION */}
      <div className="container mt-2 pb-5">
        {activeTab === "Ring" && (
          <div className="row gx-2 gy-3">
            {ringProducts.map((item) => (
              <div key={item.id} className="col-4">
                <div className="store-card">
                  {/* Image sizing handled via CSS store-img class */}
                  <img src={item.image} className="store-img" alt={item.name} />
                  
                  <div className="store-name">{item.name}</div>
                  
                  <div className="price">
                    <MdDiamond color="#a855f7" size={16} />
                    {item.price.toLocaleString()}
                  </div>
                  
                  <div className="days">7 Days</div>
                  
                  <button
                    className="purchase-btn"
                    onClick={() => handlePurchase(item.name)}
                  >
                    Purchase
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab !== "Ring" && (
          <div className="coming-soon">Coming Soon</div>
        )}
      </div>
    </div>
  );
}