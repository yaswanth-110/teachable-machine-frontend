import "./App.css";
import TeachableHeader from "./componenets/Header/TeachableHeader";
import UserClass from "./componenets/UserInput/UserClass";
import ExportButton from "./componenets/Buttons/ExportButton";
import AddClassButton from "./componenets/UserInput/AddClassButton";
import { useState } from "react";
import { genRandom } from "./utils";
import axios from "axios";

function App() {
  const [inp_classes, setinp_classes] = useState([
    {
      id: genRandom(),
      name: "class1",
      image: [
        // {
        //   url: "",  //local path url
        //   file: "", //file object
        // },
      ],
    },
  ]);

  const trainImages = async () => {
    console.log("api hit");
    try {
      const formData = new FormData();
      inp_classes.forEach((classData) => {
        formData.append(
          classData.name,
          classData.image.map((img) => img.file)
        );
      });
      const res = await axios.post("http://localhost:5000/train", formData);
      console.log("api res", res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const addImages = (images, id) => {
    setinp_classes((prevState) => {
      const classIdx = prevState.findIndex((value) => value.id === id);
      const updatedClass = {
        ...inp_classes[classIdx],
        image: images,
      };
      const newState = [...prevState];
      newState[classIdx] = updatedClass;
      return newState;
    });
  };
  const addNewClass = (event) => {
    setinp_classes([
      ...inp_classes,
      {
        id: genRandom(),
        name: "class" + inp_classes.length + 1,
        image: [],
      },
    ]);
  };
  const removeClass = (id) => {
    setinp_classes(
      inp_classes.filter((inp_classes) => {
        return id != inp_classes.id;
      })
    );
  };
  return (
    <>
      <TeachableHeader />
      <div className="Usertrain-part">
        <div>
          {inp_classes.map((inp_class, index) => {
            return (
              <UserClass
                addImages={addImages}
                removeClass={removeClass}
                key={inp_class.id}
                id={inp_class.id}
                classData={inp_class}
                idx={index}
              />
            );
          })}
          <AddClassButton onclick={addNewClass} />
        </div>
        <ExportButton trainImages={trainImages} />
      </div>
    </>
  );
}

export default App;
