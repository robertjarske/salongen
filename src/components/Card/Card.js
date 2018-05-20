import React from "react";
import { withStyles, css } from "../../withStyles";

const Card = ({ styles, ...props }) => {
  return <div {...css(styles.card)} {...props} />;
};

export default withStyles(() => {
  return {
    card: {
      display: "flex",
      width: "100%",
      justifyContent: "center",
      padding: "20px"
    }
  };
})(Card);
