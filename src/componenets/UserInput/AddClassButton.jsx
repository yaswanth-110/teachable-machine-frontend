import "./AddClassButton.css";

const AddClassButton = ({ onclick }) => {
  return (
    <div onClick={onclick} className="class-button">
      + Add Class
    </div>
  );
};

export default AddClassButton;
