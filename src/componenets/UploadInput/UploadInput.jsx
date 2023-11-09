import "./UploadInput.css";
import { useState } from "react";
const UploadInput = ({ addImages, classData, id }) => {
  const imageonchangehandler = (event) => {
    const files = Object.entries(event.target.files);
    console.log(event.target.files);
    console.log(files);

    if (files && files.length > 0) {
      console.log(files);
      addImages(
        files.map((file) => {
          return { file: file[1], url: URL.createObjectURL(file[1]) };
        }),
        id
      );
    }
  };
  // console.log("inp", items);
  return (
    <div className="upl-inp-container">
      <input onChange={imageonchangehandler} type="file" multiple />
      <div className="image-div">
        {classData.image.map((img) => (
          <img className="upload-img-class" src={img.url} />
        ))}
      </div>
    </div>
  );
};

export default UploadInput;
