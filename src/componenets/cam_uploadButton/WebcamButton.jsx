import "./WebcamButton.css";
import cam_img from "../../assests/Icons/camicon-removebg-preview.png";

const WebcamButton = () => {
  return (
    <div className="webcam-button">
      <img src={cam_img} />
      <span>Webcam</span>
    </div>
  );
};

export default WebcamButton;
