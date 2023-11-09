import "./TrainingButton.css";
import AdvancedButton from "./AdvancedButton";
import Epoch from "../Epoch";
import { useState } from "react";

const TrainingButton = ({ trainImages }) => {
  const [showHyperParameters, setshowHyperParameters] = useState(false);

  const onclickhandler = () => {
    setshowHyperParameters((prevState) => !prevState);
  };

  return (
    <div className="Training-div-container">
      <div
        className="Training-text"
        style={{ marginTop: "0", marginLeft: "0" }}
      >
        Training
      </div>
      <div
        onClick={() => {
          console.log("training");
          trainImages();
        }}
        className="Train-Model-button"
      >
        Train Model
      </div>
      <hr
        style={{
          margin: "0.1rem",
        }}
      />
      <AdvancedButton onclickhandler={onclickhandler} />
      {showHyperParameters ? <Epoch /> : null}
    </div>
  );
};

export default TrainingButton;
