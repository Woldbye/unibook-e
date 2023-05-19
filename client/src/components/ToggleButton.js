import React from "react";
import { Box } from "@chakra-ui/react";

/**
 * @brief A button that toggles between active and inactive states. The active state receives the .active css tag
 * @param {props} props - The props of the component.
 * @param {function} onClick - A function that is called when the button is clicked.
 * @param {string} children - The components that is displayed inside the button, default is that it's centered
 * @param {string} margin - The margin of the button, default is 0
 * @param {string} width - The width of the button, default is 10
 * @param {string} height - The height of the button, default is 10
 */
class ToggleButton extends React.Component {
  _onClick;
  children;
  margin;
  width;
  height;

  constructor(props) {
    super(props);
    var { onClick,children,margin,width,height } = props;
    this.margin = margin ?? "0";
    this.width = width ?? "10";
    this.height = height ?? "10";
    this.children = children;
    this._onClick = onClick ?? (() => {}); // Default do nothing
    this.state = { isOn: false };
  }
  get active() { return this.state.isOn; }

  onClick() {
    const newState = this.state;
    newState['isOn'] = !this.active;
    this.setState(newState);
    this._onClick();
  }

  render() {
    return (
      <Box
        as="button"
        onClick={this.onClick.bind(this)}
        className={this.active ? "chakra-button active" : "chakra-button"}
        width={this.width}
        margin={this.margin}
        h={this.height}
        borderRadius="5px" // make round
      >
      {this.children ?? "ToggleButton"}
      </Box >
    ) 
  }
};

export default ToggleButton;