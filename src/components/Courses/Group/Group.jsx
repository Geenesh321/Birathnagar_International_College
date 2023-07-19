import React from "react";
import "./Group.scss";

const Group = () => {
  return (
    <div className="container">
      <div className="image-container">
        <img alt="" src={require("../../../assets/Programmes/Group.jpg")}  className="image" />

        <div className="text">
          Are you excited to join us?
        </div>
        <div className="button-container">
          <button className="schedule-button">Schedule Now</button>
          <button className="apply-button">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default Group;
