import { Fragment } from "react";
import export_img from "../../assests/Icons/export_image-removebg-preview (1).png";
import "./ExportButton.css";
import ExportContent from "../ExportContent";
import TrainingButton from "../Trainingcomponents/TrainingButton";

const TitleButton = () => {
  return (
    <div className=" export-model-upper-container">
      <div className="exp-prev-container ">Preview</div>

      <div className="export-button">
        <img src={export_img} />
        <span>Export Model</span>
      </div>
    </div>
  );
};
const ExportButton = ({ trainImages }) => {
  return (
    <>
      <TrainingButton trainImages={trainImages} />
      <div className="export-model">
        <TitleButton />
        <hr />
        <ExportContent />
      </div>
    </>
  );
};

export default ExportButton;
