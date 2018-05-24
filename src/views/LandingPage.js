import React from "react";
import { css, withStyles } from "../withStyles";
import Heading from "../elements/Heading";
import ButtonLink from "../elements/ButtonLink";

const LandingPage = ({ styles, ...props }) => {
  return (
    <div {...css(styles.content)}>
      <Heading appearance="white">Welcome To A Very Hairy Situation</Heading>
      <ButtonLink appearance="success" to="/list">
        Let's Get Going
      </ButtonLink>
      <div {...css(styles.background)} />
    </div>
  );
};

export default withStyles(() => {
  return {
    background: {
      display: "flex",
      height: "100%",
      width: "100%",
      position: "absolute",
      zIndex: "-99",
      background:
        "url('https://images.unsplash.com/photo-1520614073990-dd602f14af6f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=730f41b9d9c300f0857a0fd88e2f2ed2&auto=format&fit=crop&w=1898&q=80')",
      backgroundSize: "cover",
      ":before": {
        content: '""',
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        position: "absolute",
        display: "block",
        zIndex: "1000",
        background: "rgba(0,0,0,0.5)"
      }
    },
    content: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      position: "absolute",
      top: "0",
      left: "0",
      height: "100%",
      width: "100%"
    }
  };
})(LandingPage);
