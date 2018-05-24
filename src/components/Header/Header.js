import React from "react";
import { withStyles, css } from "../../withStyles";
import Heading from "../../elements/Heading";
import Icon from "../../elements/Icon";

const Header = ({ styles, ...props }) => {
  return (
    <header {...css(styles.header)}>
      <div {...css(styles.container)}>
        <i
          onClick={() => props.routerProps.goBack()}
          {...css(styles.arrow, styles.left)}
        />
      </div>
      <div {...css(styles.container)}>
        <Heading size="3">Hår</Heading>
      </div>
      <div {...css(styles.container)}>
        <Icon
          onClick={() => props.handleFilter()}
          icon="faFilter"
          fillColor="gold"
          size="large"
          withHover
        />
      </div>
    </header>
  );
};

export default withStyles(() => {
  return {
    header: {
      display: "flex",
      padding: "10px",
      alignItems: "center",
      border: "solid #B69F58",
      borderWidth: "0 0 1px 0"
    },
    arrow: {
      border: "solid #B69F58",
      borderWidth: "0 2px 2px 0",
      padding: "10px",
      maxHeight: "10px",
      ":hover": {
        border: "solid #77E9FF",
        borderWidth: "0 3px 3px 0",
        cursor: "pointer"
      }
    },
    container: {
      display: "flex",
      flex: "1",
      justifyContent: "center"
    },
    left: {
      transform: "rotate(135deg)"
    }
  };
})(Header);
