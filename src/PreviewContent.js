import React from "react";
// import { Col } from "react-bootstrap";
import { useSelector } from "react-redux";
function PreviewContent() {
  const state = useSelector((state) => state);
  // console.log(state);
  return (
    <div>
      <div className="col-md-6">pain desc :</div>
      <div className="col-md-6">{state.Q0}</div>
      <div className="col-md-6">Have you been diagnosed with this problem?</div>
      <div className="col-md-6">{state.Q1}</div>
      <div className="col-md-6">
        Did the problem start after a physical trauma?
      </div>
      <div className="col-md-6">{state.Q2}</div>
      <div className="col-md-6">
        Did the problem start after a mental trauma?{" "}
      </div>
      <div className="col-md-6">{state.Q3}</div>
      <div className="col-md-6"> How often you experience this problem ? </div>
      <div className="col-md-6">{state.Q4}</div>
      <div className="col-md-6">When do you experience the problem? </div>
      <div className="col-md-6">{state.Q5}</div>
      <div className="col-md-6">
        How intense is the experience of the problem on average on a 0-10 scale?{" "}
      </div>
      <div className="col-md-6">{state.Q6}</div>
    </div>
  );
}

export default PreviewContent;
