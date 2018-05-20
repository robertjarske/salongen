import React from "react";
import { withStyles, css } from "../withStyles";
import Header from "../components/Header/Header";
import Filter from "../components/Filter/Filter";
import Card from "../components/Card/Card";
import Icon from "../elements/Icon";
import Heading from "../elements/Heading";

const mockData = require("./studios.json");

class List extends React.Component {
  constructor({ styles, ...props }) {
    super(...props);
    this.styles = styles;
    this.state = {
      filterShowing: false,
      filterValues: {
        min: 100,
        max: 1000
      }
    };

    this.handleFilter = this.handleFilter.bind(this);
    this.handleFiltration = this.handleFiltration.bind(this);
  }

  handleFilter() {
    this.setState({
      filterShowing: !this.state.filterShowing
    });
  }

  handleFiltration(values) {
    this.setState({
      ...this.state,
      filterValues: {
        min: values.min,
        max: values.max
      }
    });
  }

  render() {
    return (
      <div>
        <Header
          handleFilter={this.handleFilter}
          routerProps={this.props.history}
        />
        {this.state.filterShowing ? (
          <Filter handleFiltration={this.handleFiltration} />
        ) : (
          ""
        )}
        {mockData.map((studio, index) => {
          return studio.price >= this.state.filterValues.min &&
            studio.price <= this.state.filterValues.max ? (
            <Card key={index}>
              <div {...css(this.styles.container)}>
                <div {...css(this.styles.infoContainer)}>
                  <p {...css(this.styles.paragraph, this.styles.time)}>12.00</p>
                  <div {...css(this.styles.info)}>
                    <Heading size="5">{studio.name}</Heading>
                    <div {...css(this.styles.starContainer)}>
                      <Icon fillColor="gold" icon="faStar" />
                      <Icon fillColor="gold" icon="faStar" />
                      <Icon fillColor="gold" icon="faStar" />
                      <Icon fillColor="gold" icon="faStar" />
                      <Icon fillColor="gold" icon="farStar" />
                      <p {...css(this.styles.paragraphWithOpacity)}>
                        ({studio.reviews.length})
                      </p>
                    </div>
                    <p {...css(this.styles.paragraph)}>{studio.address}</p>
                  </div>
                </div>
                <div {...css(this.styles.priceContainer)}>
                  <div {...css(this.styles.price)}>
                    <p {...css(this.styles.paragraph)}>{studio.price}</p>
                    <p {...css(this.styles.minParagraph)}>30 min</p>
                  </div>
                  <div {...css(this.styles.iconContainer)}>
                    <i
                      {...css(this.styles.arrow, this.styles.right)}
                      onClick={() => console.log("clicked")}
                    />
                  </div>
                </div>
              </div>
            </Card>
          ) : (
            ""
          );
        })}
      </div>
    );
  }
}

export default withStyles(() => {
  return {
    container: {
      width: "100%",
      borderBottom: "1px solid #EEEEEE",
      display: "flex",
      justifyContent: "center"
    },
    infoContainer: {
      display: "flex",
      padding: "20px",
      flex: " 1"
    },
    paragraph: {
      fontSize: "1rem"
    },
    time: {
      marginRight: "10px"
    },
    info: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start"
    },
    starContainer: {
      display: "flex",
      alignItems: "center"
    },
    paragraphWithOpacity: {
      fontSize: "1rem",
      opacity: "0.5"
    },
    priceContainer: {
      display: "flex",
      flex: "1",
      justifyContent: "flex-end"
    },
    price: {
      display: "flex",
      flexDirection: "column",
      margin: "20px 0 10px 10px"
    },
    minParagraph: {
      opacity: "0.5",
      fontSize: ".8rem"
    },
    iconContainer: {
      display: "flex",
      width: "30%",
      justifyContent: "flex-end",
      alignItems: "center"
    },
    arrow: {
      border: "solid #B69F58",
      borderWidth: "0 2px 2px 0",
      padding: "5px",
      maxHeight: "5px",
      ":hover": {
        border: "solid #77E9FF",
        borderWidth: "0 2px 2px 0",
        cursor: "pointer"
      }
    },
    right: {
      transform: "rotate(-45deg)"
    }
  };
})(List);
