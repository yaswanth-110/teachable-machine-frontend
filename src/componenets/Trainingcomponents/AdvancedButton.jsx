import "./AdvancedButton.css";
import down_arrow_img from "../../assests/Icons/downarrow-removebg-preview.png";
import { useState } from "react";
const AdvancedButton = ({ onclickhandler }) => {
  return (
    <div onClick={onclickhandler} className="hyppara-button">
      <span>Hyperparameters</span>
      <img src={down_arrow_img} />
    </div>
  );
};

export default AdvancedButton;
