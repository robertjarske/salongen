import React from "react";
import { withStyles, css } from "../../withStyles";

/**Slider */
import "rc-slider/assets/index.css";
const Slider = require("rc-slider");
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

class Filter extends React.Component {
  constructor({ styles, ...props }) {
    super(...props);
    this.styles = styles;
    this.state = {
      filtersShowing: false,
      values: {
        min: "100", //Some initial values
        max: "1000"
      }
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick() {
    this.setState({
      filtersShowing: !this.state.filtersShowing
    });
  }

  handleChange(value) {
    this.setState({
      values: {
        min: value[0], //Not the most beutiful solution but needed to be able to bubble the values to the parent
        max: value[1]
      }
    });
  }

  //Passes the values to parent
  handleSubmit() {
    this.props.handleFiltration(this.state.values);
  }

  render() {
    return (
      <div {...css(this.styles.filter, this.styles.slideDownFilter)}>
        <div {...css(this.styles.filterTop)}>
          <p {...css(this.styles.slideInPrice)}>
            Pris: {this.state.values.min} - {this.state.values.max} kr
          </p>
          <div {...css(this.styles.container)}>
            <i
              onClick={this.handleClick}
              {...css(
                this.styles.arrow,
                !this.state.filtersShowing ? this.styles.down : this.styles.up
              )}
            />
          </div>
        </div>
        {this.state.filtersShowing ? (
          <div {...css(this.styles.filterRange, this.styles.slideDownRange)}>
            <p style={{ marginBottom: "10px" }}>Välj prisintervall</p>
            <Range
              marks={{
                100: "100",
                200: "200",
                300: "300",
                400: "400",
                500: "500",
                600: "600",
                700: "700",
                800: "800",
                900: "900",
                1000: "1000"
              }}
              min={100}
              max={1000}
              onChange={value => this.handleChange(value)}
              onAfterChange={this.handleSubmit} //This is because I don't want to be sending values as soon as the user changes slider range
              defaultValue={[100, 1000]}
              allowCross={false}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default withStyles(() => {
  return {
    filter: {
      border: "solid #B69F58",
      borderWidth: "0 0 1px 0",
      minHeight: "70px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "20px",
      width: "100%"
    },
    filterTop: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%"
    },
    filterRange: {
      padding: "0 20px 20px 20px",
      marginTop: "10px",
      minHeight: "70px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      width: "100%",
      backgroundColor: "#FFF"
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
    container: {
      display: "flex",
      justifyContent: "center"
    },
    down: {
      transform: "rotate(45deg)"
    },
    up: {
      transform: "rotate(-135deg)"
    },
    slideDownRange: {
      animation: "slideDownRange 600ms ease"
    },
    slideDownFilter: {
      animation: "slideDownFilter 600ms ease"
    },
    slideInPrice: {
      animation: "slideInPrice 400ms ease"
    }
  };
})(Filter);
