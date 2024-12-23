import React from "react";
import { plansData } from "../../data/plansData";
import "./Plans.css";
import { ImCircleRight } from "react-icons/im";
const Plans = () => {
  return (
    <div className="plans-container">
      <div className="plan-header">
        <span>Ready to start</span>
        <span>Your Journey With Us</span>
        <div className="header-line"></div>
      </div>
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>
            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <ImCircleRight />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>See more benefits -></span>
            </div>
            <button className="btns">Join now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
