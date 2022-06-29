import React from "react";

import MainDignostic from "./MainDignostic";
function Home() {
  return (
    <div>
      <div className="header">
        <h1>Pain & Functional Description</h1>
        <h3>
          The description of the current situation gives your Optimum Trainer a
          picture of and clues to the underlying causes of your problems
        </h3>
        <br />
        <h3>
          If you have problems with pain/aches, stiffness, weakness or
          functional problems, describe this/these below. (List the symptoms in
          descending order with the most troublesome first)
        </h3>

        <br />
      </div>
      <div className="container">
        <MainDignostic></MainDignostic>
      </div>
    </div>
  );
}

export default Home;
