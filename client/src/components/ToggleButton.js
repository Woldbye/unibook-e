import React from "react";
import { Box } from "@chakra-ui/react";
import Color from "../Colors";
/**
 * @brief A button that toggles between active and inactive states. The active state receives the .active css tag
 * @param {props} props - The props of the component.
 * @param {function} onClick - A function that is called when the button is clicked.
 * @param {string} children - The components that is displayed inside the button, default is that it's centered
 * @param {string} margin - The margin of the button, default is 0
 * @param {string} width - The width of the button, default is 10
 * @param {string} height - The height of the button, default is 10
 * @param {bool} isDisabled - If the button is disabled, default is false
 */
class ToggleButton extends React.Component {
  _onClick;
  children;
  margin;
  disabled;
  width;
  height;
  border;
  borderRadius;
  className;

  constructor(props) {
    super(props);
    var { onClick,children,margin,width,height,className,border,borderRadius,isDisabled } = props;
    this.disabled = isDisabled ?? false;
    this.className = (className ? `${className}` : "chakra-button") + (this.disabled ? " disabled" : "");
    this.margin = margin ?? "0";
    this.border = border ?? '';
    this.borderRadius = borderRadius ?? '5px';
    this.width = width ?? "10";
    this.height = height ?? "10";
    this.children = children;
    this._onClick = onClick ?? ((x) => {}); // Default do nothing
    this.state = { isOn: false };
  }

  get active() { return this.state.isOn; }

  onClick() {
    if (this.disabled) return;
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
        border={this.border}
        // If button is active add active flag to the class name
        className={`${(this.className !== '' ? `${this.className}` : '')}${(this.active ? " active" : "")}`}
        width={this.width}
        margin={this.margin}
        h={this.height}
        borderRadius={this.borderRadius} // make round
      >
      {this.children ?? ""}
      </Box>
    ) 
  }
};

export default ToggleButton;