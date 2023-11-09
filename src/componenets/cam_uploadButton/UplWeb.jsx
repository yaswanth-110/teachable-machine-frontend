// import WebcamButton from "./WebcamButton";
import UploadButton from "./UploadButton";
import "./UplWeb.css";

const UplWeb = (props) => {
  return (
    <div className="upl-web-container">
      <div
        style={{
          fontFamily: "BoingSemiBold', Helvetica, Arial, sans-serif",
          fontSize: "small",
          fontWeight: "400",
        }}
      >
        Add Sample images
      </div>
      <div className="upl-web">
        {/* <WebcamButton /> */}
        <UploadButton
          addImages={props.addImages}
          classData={props.classData}
          setInput_classes={props.setInput_classes}
          idx={props.idx}
          id={props.id}
        />
      </div>
    </div>
  );
};

export default UplWeb;
