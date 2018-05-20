import React from "react";
import { css, withStyles } from "../withStyles";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faSpinner,
  faQuestion,
  faStar
} from "@fortawesome/fontawesome-free-solid";
import { faStar as farStar } from "@fortawesome/fontawesome-free-regular";

const Icon = ({
  icon = null,
  fillColor = "black",
  size = "small",
  withHover = false,
  styles,
  ...props
}) => {
  let faIcon;
  switch (icon) {
    case "faFilter":
      faIcon = faFilter;
      break;
    case "faSpinner":
      faIcon = faSpinner;
      break;
    case "faStar":
      faIcon = faStar;
      break;
    case "farStar":
      faIcon = farStar;
      break;
    default:
      faIcon = faQuestion;
  }

  return (
    <span
      {...css(
        withHover && styles.withHover,
        styles[size],
        styles[fillColor],
        styles.padding
      )}
      {...props}
    >
      <FontAwesomeIcon icon={faIcon} />
    </span>
  );
};

export default withStyles(({ colors, text }) => {
  return {
    withHover: {
      ":nth-child(1) svg": {
        ":hover": {
          color: "#77E9FF", //should move this to withHover
          cursor: "pointer"
        }
      }
    },
    padding: {
      padding: "5px"
    },
    /* Size */
    xs: text.xs,
    small: text.small,
    medium: text.medium,
    large: text.large,
    /* Color */
    gold: { color: "#B69F58" },
    white: { color: "#FFF" },
    black: { color: "#000" }
  };
})(Icon);
