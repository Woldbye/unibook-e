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
    var { startActive, onClick, children, margin, width, height, className, border, borderRadius, isDisabled } = props;
    this.disabled = isDisabled ?? false;
    this.className = (className ? `${className}` : "chakra-button") + (this.disabled ? " disabled" : "");
    this.margin = margin ?? "0";
    this.border = border ?? '';
    this.borderRadius = borderRadius ?? '5px';
    this.width = width ?? "10";
    this.height = height ?? "10";
    this.children = children;
    this._onClick = onClick ?? ((x) => { }); // Default do nothing
    this.state = { isOn: true }; //Sets the button to be active by default
  }

  get active() { return this.state.isOn; }

  onClick() {
    if (this.disabled) return;
    this.setState((prevState) => {
      const newState = { isOn: !prevState.isOn };
      this._onClick(newState.isOn);
      return newState;
    });
  }

  render() {
    return (
      <Box
        as="button"
        onClick={this.onClick.bind(this)}
        border={this.border}
        // If button is active add active flag to the class name for css color purposes
        className={`${this.className}${(this.active ? " active" : "")}`}
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