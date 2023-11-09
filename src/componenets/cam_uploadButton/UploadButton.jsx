import "./UploadButton.css";
import upl_img from "../../assests/Icons/uploadicon-removebg-preview.png";
import { useState } from "react";
import UploadInput from "../UploadInput/UploadInput";

const UploadButton = (props) => {
  const [Image, setimage] = useState([]);

  const [onupload, setonupload] = useState(false);
  const onuploadclickhandler = () => {
    setonupload(true);
  };

  return (
    <>
      {!onupload ? (
        <div onClick={onuploadclickhandler} className="upload-button">
          <img src={upl_img} />
          <span>Upload</span>
        </div>
      ) : (
        <UploadInput
          addImages={props.addImages}
          classData={props.classData}
          Image={Image}
          setImage={setimage}
          setInput_classes={props.setInput_classes}
          idx={props.idx}
          id={props.id}
        />
      )}
    </>
  );
};

export default UploadButton;
