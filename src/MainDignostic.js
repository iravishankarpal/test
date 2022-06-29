import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
function MainDignostic() {
  // console.log(PainDesc, Q1, Q2, Q3, Q4, Q6, Q6);
  const dispatch = useDispatch();
  return (
    <div>
      <>
        <div className="row">
          <div className="textarea">
            <textarea
              name="painDescription"
              id="paindec"
              onChange={(e) => {
                dispatch({ type: "add", payload: { Q0: e.target.value } });
              }}
            ></textarea>
          </div>
          <div className="col-md-6">
            Have you been diagnosed with this problem?
          </div>
          <div className="col-md-6">
            <input
              type="radio"
              id="html"
              name="Q1"
              value="Not relevant"
              onChange={(e) => {
                dispatch({ type: "add", payload: { Q1: e.target.value } });
              }}
            />
            <label for="Not relevant">Not relevant</label>
            <input
              type="radio"
              id="css"
              name="Q1"
              value="yes"
              onChange={(e) => {
                dispatch({ type: "add", payload: { Q1: e.target.value } });
              }}
            />
            <label for="yes">Yes</label>
            <input
              type="radio"
              id="javascript"
              name="Q1"
              value="no"
              onChange={(e) => {
                dispatch({ type: "add", payload: { Q1: e.target.value } });
              }}
            />
            <label for="no">No</label>
          </div>
          <div className="col-md-6">
            Did the problem start after a physical trauma?
          </div>
          <div className="col-md-6">
            <input
              type="radio"
              id="html"
              name="Q2"
              value="Not relevant"
              onChange={(e) => {
                dispatch({ type: "add", payload: { Q2: e.target.value } });
              }}
            />
            <label for="Not relevant">Not relevant</label>
            <input
              type="radio"
              id="css"
              name="Q2"
              value="yes"
              onChange={(e) => {
                dispatch({ type: "add", payload: { Q2: e.target.value } });
              }}
            />
            <label for="yes">Yes</label>
            <input
              type="radio"
              id="javascript"
              name="Q2"
              value="no"
              onChange={(e) => {
                dispatch({ type: "add", payload: { Q2: e.target.value } });
              }}
            />
            <label for="no">No</label>
          </div>
          <div className="col-md-6">
            Did the problem start after a mental trauma?
          </div>
          <div className="col-md-6">
            <input
              type="radio"
              id="html"
              name="Q3"
              value="Not relevant"
              onChange={(e) => {
                dispatch({ type: "add", payload: { Q3: e.target.value } });
              }}
            />
            <label for="Not relevant">Not relevant</label>
            <input
              type="radio"
              id="css"
              name="Q3"
              value="yes"
              onChange={(e) => {
                dispatch({ type: "add", payload: { Q3: e.target.value } });
              }}
            />
            <label for="yes">Yes</label>
            <input
              type="radio"
              id="javascript"
              name="Q3"
              value="no"
              onChange={(e) => {
                dispatch({ type: "add", payload: { Q3: e.target.value } });
              }}
            />
            <label for="no">No</label>
          </div>
          <div className="col-md-6">
            {" "}
            How often you experience this problem ?{" "}
          </div>
          <div className="col-md-6">
            <input
              type="radio"
              id="Not relevant"
              name="Q4"
              value="Not relevant"
              onChange={(e) => {
                dispatch({ type: "add", payload: { Q4: e.target.value } });
              }}
            />
            <label for="Not relevant">Not relevant</label>
            <input
              type="radio"
              id="css"
              name="Q4"
              value="yes"
              onChange={(e) => {
                dispatch({ type: "add", payload: { Q4: e.target.value } });
              }}
            />
            <label for="daily"> Daily</label>
            <input
              type="radio"
              id="javascript"
              name="Q4"
              value="no"
              onChange={(e) => {
                dispatch({ type: "add", payload: { Q4: e.target.value } });
              }}
            />
            <label for="no">Several times/week</label>
            <input
              type="radio"
              id="javascript"
              name="Q4"
              value="JavaScript"
              onChange={(e) => {
                dispatch({ type: "add", payload: { Q4: e.target.value } });
              }}
            />
            <label for="no"> A few times/month</label>{" "}
            <input
              type="radio"
              id="javascript"
              name="Q4"
              value="JavaScript"
              onChange={(e) => {
                dispatch({ type: "add", payload: { Q4: e.target.value } });
              }}
            />
            <label for="no">A few times/year</label>
          </div>
          <div className="col-md-6">When do you experience the problem? </div>
          <div className="col-md-6">
            <input
              type="checkbox"
              id="vehicle1"
              name="vehicle1"
              value=" Not relevant"
              onChange={(e) => {
                dispatch({ type: "add", payload: { Q5: e.target.value } });
              }}
            />
            <label for="vehicle1"> Not relevant</label>
            <input
              type="checkbox"
              id="vehicle2"
              name="vehicle2"
              value=" while laying down"
              onChange={(e) => {
                dispatch({ type: "add", payload: { Q5: e.target.value } });
              }}
            />
            <label for="vehicle2"> while laying down </label>
            <input
              type="checkbox"
              id="vehicle3"
              name="vehicle3"
              value="when sitting"
              onChange={(e) => {
                dispatch({ type: "add", payload: { Q5: e.target.value } });
              }}
            />
            <label for="vehicle3"> when sitting</label>
            <input
              type="checkbox"
              id="vehicle3"
              name="vehicle3"
              value="under standing"
              onChange={(e) => {
                dispatch({ type: "add", payload: { Q5: e.target.value } });
              }}
            />
            <label for="vehicle3"> under standing</label>
            <input
              type="checkbox"
              id="vehicle3"
              name="vehicle3"
              value="In Walking"
              onChange={(e) => {
                dispatch({ type: "add", payload: { Q5: e.target.value } });
              }}
            />
            <label for="vehicle3"> In Walking</label>
          </div>
          <div className="col-md-6">
            How intense is the experience of the problem on average on a 0-10
            scale?
          </div>
          <div className="col-md-6">
            <input
              type="radio"
              id="Not relevant"
              name="Q6"
              value="1"
              onChange={(e) => {
                dispatch({ type: "add", payload: { Q6: e.target.value } });
              }}
            />
            <label for="Not relevant">1</label>
            <input
              type="radio"
              id="css"
              name="Q6"
              value="2"
              onChange={(e) => {
                dispatch({ type: "add", payload: { Q6: e.target.value } });
              }}
            />
            <label for="daily"> 2</label>
            <input
              type="radio"
              id="javascript"
              name="Q6"
              value="3"
              onChange={(e) => {
                dispatch({ type: "add", payload: { Q6: e.target.value } });
              }}
            />
            <label for="no">3</label>
            <input
              type="radio"
              id="javascript"
              name="Q6"
              value="4"
              onChange={(e) => {
                dispatch({ type: "add", payload: { Q6: e.target.value } });
              }}
            />
            <label for="no"> 4</label>{" "}
            <input
              type="radio"
              id="javascript"
              name="Q6"
              value="5"
              onChange={(e) => {
                dispatch({ type: "add", payload: { Q6: e.target.value } });
              }}
            />
            <label for="no">5</label>
            <input
              type="radio"
              id="html"
              name="Q6"
              value="6"
              onChange={(e) => {
                dispatch({ type: "add", payload: { Q6: e.target.value } });
              }}
            />
            <label for="Not relevant">6</label>
            <input
              type="radio"
              id="css"
              name="Q6"
              value="7"
              onChange={(e) => {
                dispatch({ type: "add", payload: { Q6: e.target.value } });
              }}
            />
            <label for="daily"> 7</label>
            <input
              type="radio"
              id="javascript"
              name="Q6"
              value="8"
              onChange={(e) => {
                dispatch({ type: "add", payload: { Q6: e.target.value } });
              }}
            />
            <label for="no">8</label>
            <input
              type="radio"
              id="javascript"
              name="Q6"
              value="9"
              onChange={(e) => {
                dispatch({ type: "add", payload: { Q6: e.target.value } });
              }}
            />
            <label for="no">9</label>{" "}
            <input
              type="radio"
              id="javascript"
              name="Q6"
              value="10"
              onChange={(e) => {
                dispatch({ type: "add", payload: { Q6: e.target.value } });
              }}
            />
            <label for="no">10</label>
          </div>
        </div>
        <Link to="/pre">
          <Button className="warrning">preview</Button>{" "}
        </Link>
      </>
    </div>
  );
}

export default MainDignostic;
