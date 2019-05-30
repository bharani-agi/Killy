import React from "react";
import "../styles.css";
const Section = props => {
  return (
    <div className="section">
      <span className="whyTitle">{props.title}</span>
    </div>
  );
};

export default Section;
