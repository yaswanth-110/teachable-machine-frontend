import "./UserClass.css";
import { useState } from "react";
import edit_img from "../../assests/Icons/editicon-removebg-preview.png";
import UplWeb from "../cam_uploadButton/UplWeb";
import delicon_img from "../../assests/Icons/delete-730-removebg-preview.png";
const UserClass = (props) => {
  const [isedit, setisedit] = useState(false);
  const [className, setclassName] = useState(`class ${props.idx + 1}`);
  const ondeleteitem = () => {
    return props.removeClass(props.id);
  };
  const classnamehandler = () => {
    setisedit(true);
  };

  return (
    <div className="Input">
      <div
        style={{
          backgroundColor: "white",
          width: "450px",
          padding: "1rem",
          margin: "1rem",
          boxShadow: "5px 5px 5px gray",
          borderRadius: "10px",
        }}
      >
        <header className="user-class-container">
          <div className="Userclass">
            {isedit ? (
              <input
                onChange={(e) => {
                  console.log("changed");
                  return setclassName(e.target.value);
                }}
                style={{ padding: "0.5rem", marginRight: "1rem" }}
                type="text"
                value={className}
              />
            ) : (
              <div className="class-change" style={{ marginRight: "1rem" }}>
                {className}
              </div>
            )}
            {!isedit ? (
              <span style={{ cursor: "pointer" }} onClick={classnamehandler}>
                <img src={edit_img} alt="editicon" />
              </span>
            ) : (
              <span
                style={{ cursor: "pointer" }}
                onClick={() => setisedit(false)}
              >
                X
              </span>
            )}
          </div>
          <img
            onClick={ondeleteitem}
            className="dot-icon"
            src={delicon_img}
            alt="doticon"
          />
        </header>

        <hr style={{ border: "0.5px solid lightgray", margin: "0" }} />
        <UplWeb
          addImages={props.addImages}
          id={props.id}
          idx={props.idx}
          classData={props.classData}
          setInput_classes={props.setInput_classes}
        />
      </div>
    </div>
  );
};

export default UserClass;
