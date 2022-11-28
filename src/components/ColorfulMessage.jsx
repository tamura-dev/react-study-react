import React from "react";
import App from "../App";

const ColorfulMessage = (props) => {
  const { children, color } = props;
  // console.log(props);
  const contentStyle = {
    color: color,
    fontSize: "19px"
  };

  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
