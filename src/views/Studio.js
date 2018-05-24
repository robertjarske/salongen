import React from "react";
import { withStyles, css } from "../withStyles";
import { Redirect } from "react-router-dom";
import Icon from "../elements/Icon";

const Studio = ({ studio, styles, ...props }) => {
  //Failsafe for page-reload
  if (Object.keys(studio).length === 0) {
    return <Redirect push to="/list" />;
  }
  return (
    <div>
      <div {...css(styles.imageContainer)}>
        <div {...css(styles.container)}>
          <i
            onClick={() => props.history.goBack()}
            {...css(styles.arrowLeft)}
          />
          <Icon fillColor="white" size="xl" icon="faHeart" />
        </div>
        <div {...css(styles.nameContainer)}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p style={{ paddingLeft: "5px" }}>{studio.name}</p>
            <div {...css(styles.starContainer)}>
              <Icon fillColor="gold" icon="faStar" />
              <Icon fillColor="gold" icon="faStar" />
              <Icon fillColor="gold" icon="faStar" />
              <Icon fillColor="gold" icon="faStar" />
              <Icon fillColor="gold" icon="farStar" />
              <p {...css(styles.paragraphWithOpacity)}>
                ({studio.reviews.length})
              </p>
            </div>
          </div>
        </div>
      </div>
      <div {...css(styles.tabsContainer)}>
        <div {...css(styles.infoTab)}>
          <p>Info</p>
        </div>
        <div {...css(styles.scheduleTab)}>
          <p>Schema</p>
        </div>
      </div>
      <div {...css(styles.divider)} />
      <div>
        <div {...css(styles.listCardWrapper)}>
          <div {...css(styles.listCardContainer)}>
            <Icon size="large" icon="faMapMarker" />
            <p>{studio.address}</p>
          </div>
        </div>
        <div {...css(styles.listCardWrapper)}>
          <div {...css(styles.listCardContainer)}>
            <Icon size="large" icon="faClock" />
            <p style={{ marginRight: "20px" }}>Öppet till 19.00 idag</p>
            <i {...css(styles.arrowDown)} />
          </div>
        </div>
        <div {...css(styles.listCardWrapper)}>
          <div {...css(styles.listCardContainer)}>
            <Icon size="large" icon="faClock" />
            <p>08-552 555 43</p>
          </div>
        </div>
        <div {...css(styles.listCardWrapper)}>
          <div {...css(styles.listCardContainer)}>
            <Icon size="large" icon="faGlobe" />
            <p>salongweb.se</p>
          </div>
        </div>
        <div style={{ height: "100px", padding: "20px" }}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sint
            iusto soluta unde quos illum recusandae nesciunt id omnis, placeat
            commodi nemo. Iste aut vero at, quaerat ut fugiat accusamus?
          </p>
        </div>
      </div>
    </div>
  );
};

export default withStyles(() => {
  return {
    imageContainer: {
      height: "50vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      background:
        "url('https://images.unsplash.com/photo-1520614073990-dd602f14af6f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=730f41b9d9c300f0857a0fd88e2f2ed2&auto=format&fit=crop&w=1898&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center center"
    },
    nameContainer: {
      height: "40%",
      display: "flex",
      alignItems: "flex-end",
      padding: "20px"
    },
    tabsContainer: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      height: "70px"
    },
    infoTab: {
      display: "flex",
      flex: "1",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      borderBottom: "2px solid #B69F58"
    },
    scheduleTab: {
      display: "flex",
      flex: "1",
      justifyContent: "center",
      alignItems: "center",
      height: "100%"
    },
    divider: {
      height: "30px",
      width: "100%",
      backgroundColor: "#EEEEEE"
    },
    listCardWrapper: {
      padding: "10px"
    },
    listCardContainer: {
      display: "flex",
      alignItems: "center",
      padding: "10px",
      borderBottom: "1px solid #EEEEEE"
    },
    header: {
      height: "90px",
      padding: "20px"
    },
    arrowLeft: {
      border: "solid #B69F58",
      borderWidth: "0 2px 2px 0",
      padding: "10px",
      maxHeight: "10px",
      transform: "rotate(135deg)",
      ":hover": {
        border: "solid #77E9FF",
        borderWidth: "0 2px 2px 0",
        cursor: "pointer"
      }
    },
    arrowDown: {
      border: "solid #B69F58",
      borderWidth: "0 2px 2px 0",
      padding: "5px",
      maxHeight: "5px",
      transform: "rotate(45deg)",
      ":hover": {
        border: "solid #77E9FF",
        borderWidth: "0 2px 2px 0",
        cursor: "pointer"
      }
    },
    container: {
      display: "flex",
      padding: "20px",
      height: "70px",

      alignItems: "center",
      justifyContent: "space-between"
    },
    down: {
      transform: "rotate(45deg)"
    },
    left: {
      transform: "rotate(135deg)"
    },
    starContainer: {
      display: "flex",
      alignItems: "center"
    },
    paragraphWithOpacity: {
      fontSize: "1rem",
      opacity: "0.5"
    },
    containerTest: {
      width: "100%",
      borderBottom: "1px solid #EEEEEE",
      display: "flex",
      justifyContent: "center"
    },
    infoContainer: {
      display: "flex",
      padding: "20px",
      flex: " 1"
    }
  };
})(Studio);
