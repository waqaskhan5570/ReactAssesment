import React from "react";
import "./Title.css";
import PropTypes from "prop-types";

const Title = (props) => {
  const titleClassName = [
    "Title",
    props.size,
    props.color,
    props.isResponsive ? "isResponsive" : null,
  ];

  return <div className={titleClassName.join(" ")}>{props.children}</div>;
};

Title.propTypes = {
  size: PropTypes.oneOf(["sm", "normal", "md", "lg"]).isRequired,
  color: PropTypes.oneOf(["white", "dark"]).isRequired,
  isResponsive: PropTypes.bool,
};

export default Title;
