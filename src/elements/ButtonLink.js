import React from "react";
import { css, withStyles } from "../withStyles";
import { Link } from "react-router-dom";

const ButtonLink = ({
  appearance = "primary",
  size = "medium",
  to = null,
  styles,
  ...props
}) => (
  <Link
    to={to}
    {...css(styles.buttonLink, styles[appearance], styles[size])}
    {...props}
  />
);

export default withStyles(({ themes }) => {
  return {
    buttonLink: {
      border: "none",
      borderRadius: "4px",
      margin: "12px 12px 12px 0px",
      fontWeight: "bold",
      color: "white",
      letterSpacing: "0.1rem",
      textAlign: "center",
      cursor: "pointer",
      ":hover": {
        color: "white"
      },
      ":visited": {
        color: "white"
      }
    },
    small: {
      fontSize: "8px",
      padding: "10px 18px",
      minWidth: "60px"
    },
    medium: {
      fontSize: "12px",
      padding: "16px 24px",
      minWidth: "100px"
    },

    /* Color */

    success: themes.success,
    danger: themes.danger,
    successGradient: themes.successGradient,
    dangerGradient: themes.dangerGradient
  };
})(ButtonLink);
