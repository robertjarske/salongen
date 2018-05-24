import React from "react";
import { css, withStyles } from "../withStyles";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faSpinner,
  faQuestion,
  faStar,
  faMapMarkerAlt,
  faPhone,
  faGlobe
} from "@fortawesome/fontawesome-free-solid";
import {
  faStar as farStar,
  faHeart,
  faClock
} from "@fortawesome/fontawesome-free-regular";

/**Implementation of font-awesomes react component so I can pass the icon I want and still use the same component
 also works with reacts rerendering if I would chose to switch icon depending on state(this is not the case with "regular" font-awesome)*/
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
    case "faHeart":
      faIcon = faHeart;
      break;
    case "faMapMarker":
      faIcon = faMapMarkerAlt;
      break;
    case "faClock":
      faIcon = faClock;
      break;
    case "faPhone":
      faIcon = faPhone;
      break;
    case "faGlobe":
      faIcon = faGlobe;
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
          color: "#77E9FF",
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
    xl: text.xl,
    /* Color */
    gold: { color: "#B69F58" },
    white: { color: "#FFF" },
    black: { color: "#000" }
  };
})(Icon);
