import React from "react";

const ColofulMessage = (props) => {
  // console.log(props.children);
  const { color, children } = props;
  const contentStyle = {
    color,
    fontSize: "18px"
  };

  return <p style={contentStyle}>{children}</p>;
};

export default ColofulMessage;