import React, { useState } from "react";
import "./RechargePage.css";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, HelpCircle, ChevronRight } from "lucide-react";

export default function RechargePage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Diamonds");
  const [selectedPlan, setSelectedPlan] = useState(0);

  const diamondPlans = [
    { id: 0, amount: "3.6K", bonus: "", price: 55 },
    { id: 1, amount: "36.0K", bonus: "+24.0K", price: 556, tag: "2026 New-Year Bonus" },
    { id: 2, amount: "60.0K", bonus: "+40.0K", price: 927, tag: "2026 New-Year Bonus" },
    { id: 3, amount: "240.0K", bonus: "+160.0K", price: 3710, tag: "2026 New-Year Bonus" },
    { id: 4, amount: "540.0K", bonus: "+360.0K", price: 8350, tag: "2026 New-Year Bonus" },
    { id: 5, amount: "1000.0K", bonus: "+700.0K", price: 15450, tag: "2026 New-Year Bonus" },
  ];

  const goldPlans = diamondPlans.map(p => ({ ...p, amount: p.amount.replace('K', ' Gold') }));

  const currentPlans = activeTab === "Diamonds" ? diamondPlans : goldPlans;
  const currentIcon = activeTab === "Diamonds" ? "💎" : "🪙";

  return (
    <div className="recharge-container">
      {/* HEADER */}
      <div className="recharge-header">
        <div className="header-top">
          <ArrowLeft className="back-icon" onClick={() => navigate(-1)} />
          <div className="tabs-center">
            <span 
              className={activeTab === "Diamonds" ? "tab active" : "tab"} 
              onClick={() => setActiveTab("Diamonds")}
            >
              Diamonds
            </span>
            <span 
              className={activeTab === "Golds" ? "tab active" : "tab"} 
              onClick={() => setActiveTab("Golds")}
            >
              Golds
            </span>
          </div>
          <HelpCircle className="help-icon" size={24} />
        </div>
      </div>

      {/* BALANCE CARD */}
      <div className="balance-section">
        <div className="balance-pill">
          <span className="diamond-icon">{currentIcon}</span>
          <span className="balance-count">3</span>
        </div>
        <div className="details-link">
          Details <ChevronRight size={16} />
        </div>
      </div>

      {/* USER PROGRESS CARD */}
      <div className="user-progress-card">
        <div className="user-info">
          <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2" alt="user" className="user-dp" />
          <span className="user-name">Rahul</span>
        </div>
        <div className="progress-info">
          <span>0/1,000</span>
          <div className="progress-bar-bg">
            <div className="progress-fill" style={{ width: "10%" }}></div>
          </div>
          <span className="lvl-text">LV1</span>
        </div>
      </div>

      {/* BANNER */}
      <div className="banner-promo">
        <img src="https://img.freepik.com/free-vector/gradient-gem-tycoon-background_23-2149154485.jpg" alt="promo" />
      </div>

      {/* RECHARGE SECTION */}
      <div className="plans-section">
        <h6 className="section-title">Recharge {activeTab}</h6>
        
        <div className="coupon-bar">
          <span>Coupon</span>
          <span className="no-coupon">No coupons available</span>
        </div>

        <div className="plans-grid">
          {currentPlans.map((plan) => (
            <div 
              key={plan.id} 
              className={`plan-card ${selectedPlan === plan.id ? "selected" : ""}`}
              onClick={() => setSelectedPlan(plan.id)}
            >
              {plan.tag && <div className="bonus-tag">{plan.tag}</div>}
              <div className="plan-icon-large">{currentIcon}</div>
              <div className="plan-amount">{plan.amount}</div>
              {plan.bonus && <div className="plan-bonus">{plan.bonus}</div>}
              <div className="plan-price">INR {plan.price}</div>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER BUTTON */}
      <div className="recharge-footer">
        <button className="recharge-btn">
          Recharge INR {currentPlans[selectedPlan].price} Now
        </button>
      </div>
    </div>
  );
}