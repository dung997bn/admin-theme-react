import React, { Component } from "react";

class FixedPlugin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: "dropdown show-dropdown"
    };
  }
  handleClick = () => {
    if (this.state.classes === "dropdown show-dropdown") {
      this.setState({ classes: "dropdown show-dropdown show" });
    } else {
      this.setState({ classes: "dropdown show-dropdown" });
    }
  };
  activateMode = mode => {
    switch (mode) {
      case "light":
        document.body.classList.add("white-content");
        break;
      default:
        document.body.classList.remove("white-content");
        break;
    }
  };
  render() {
    return (
      <div className="fixed-plugin">
        <div className={this.state.classes}>
          <div onClick={this.handleClick}>
            <i className="fa fa-cog fa-2x" />
          </div>
          <ul className="dropdown-menu show">
            <li className="header-title">SIDEBAR BACKGROUND</li>
            <li className="adjustments-line">
              <div className="badge-colors text-center">
                <span
                  className={
                    this.props.bgColor === "custom2"
                      ? "badge filter badge-warning  active"
                      : "badge filter badge-warning"
                  }
                  data-color="custom2"
                  onClick={() => {
                    this.props.handleBgClick("custom2");
                  }}
                />{" "}
                <span
                  className={
                    this.props.bgColor === "blue"
                      ? "badge filter badge-info active"
                      : "badge filter badge-info"
                  }
                  data-color="blue"
                  onClick={() => {
                    this.props.handleBgClick("blue");
                  }}
                />{" "}
                <span
                  className={
                    this.props.bgColor === "green"
                      ? "badge filter badge-success active"
                      : "badge filter badge-success"
                  }
                  data-color="green"
                  onClick={() => {
                    this.props.handleBgClick("green");
                  }}
                />{" "}
                <span
                  className={
                    this.props.bgColor === "custom1"
                      ? "badge filter badge-dark active"
                      : "badge filter badge-dark"
                  }
                  data-color="custom1"
                  onClick={() => {
                    this.props.handleBgClick("custom1");
                  }}
                />{" "}
                <span
                  className={
                    this.props.bgColor === "custom3"
                      ? "badge filter badge-default active"
                      : "badge filter badge-default"
                  }
                  data-color="custom3"
                  onClick={() => {
                    this.props.handleBgClick("custom3");
                  }}
                />{" "}
              </div>
            </li>
            <li className="adjustments-line text-center color-change">
              <span className="color-label">LIGHT MODE</span>{" "}
              <span
                className="badge light-badge mr-2"
                onClick={() => this.activateMode("light")}
              />{" "}
              <span
                className="badge dark-badge ml-2"
                onClick={() => this.activateMode("dark")}
              />{" "}
              <span className="color-label">DARK MODE</span>{" "}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default FixedPlugin;
