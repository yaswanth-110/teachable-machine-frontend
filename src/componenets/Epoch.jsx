import "./Epoch.css";

const Epoch = () => {
  return (
    <div className="epoch">
      <div className="hyp-class">
        <div>Epoch</div>
        <input type="number" id="epoch" min="1" />
      </div>
      <div className="hyp-class">
        <div>Batch Size:</div>
        <input type="number" id="epoch" min="1" />
      </div>
      <div className="hyp-class">
        <div>Learning Rate</div>
        <input type="number" id="epoch" min="1" />
      </div>
    </div>
  );
};

export default Epoch;
