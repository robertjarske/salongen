import React from "react";
import { withStyles, css } from "../withStyles";

const Heading = ({ size = "1", appearance = "black", styles, ...props }) => {
  const Tag = `h${size}`;

  return <Tag {...css(styles[appearance])} {...props} />;
};

export default withStyles(() => {
  return {
    black: {
      color: "#000"
    },
    white: {
      color: "#FFF"
    }
  };
})(Heading);
