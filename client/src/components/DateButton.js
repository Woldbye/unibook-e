import React from "react";
import { Box } from "@chakra-ui/react";

//This button is what can be seen in our calender as the dates.

/**
 * @brief A button that toggles between active and inactive states. The active state receives the .active css tag
 * @param {props} props - The props of the component.
 * @param {bool} isOn - If the button is on, default is false
 * @param {function} onClick - A function that is called when the button is clicked.
 * @param {string} children - The components that is displayed inside the button, default is that it's centered
 * @param {string} margin - The margin of the button, default is 0
 * @param {string} width - The width of the button, default is 10
 * @param {string} height - The height of the button, default is 10
 * @param {bool} isDisabled - If the button is disabled, default is false
 * @param {string} className - The class name of the button
 */
const DateButton = (props) => {
  var { isOn,onClick,children,margin,width,height,className,border,borderRadius,isDisabled, date } = props;
  const today = new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate());

  isOn = isOn ?? false;
  margin = margin ?? "0";
  border = border ?? '';
  date = date ?? today;
  isDisabled = isDisabled ?? false;
  borderRadius = borderRadius ?? '5px';
  width = width ?? "10";
  height = height ?? "10";
  children = children;
  onClick = onClick ?? ((e) => {}); // default do nothing
  
  const isToday = date.getFullYear() === today.getFullYear()
               && date.getMonth() === today.getMonth()
               && date.getDate() === today.getDate();
  
  if(date < today) {
    return (
      <Box
        as="button"
        border={border}
        className={`date-button unavailable disabled2`}
        borderRadius={borderRadius} // make round
        width={width}
        margin={margin}
        h={height}
      >
        {date.getDate()}
      </Box >
    )
  }

  // Update className
  className = (className ?? '')
  className += isToday ? " date-button-today" : " date-button";
  if(isDisabled) className += " disabled";
  if(isOn) className += " active";

  return (
    <Box
      as="button"
      onClick={(e) => { onClick(e) }}
      border={border}
      // If button is active add active flag to the class name
      className={`${className}`}
      width={width}
      margin={margin}
      h={height}
      borderRadius={borderRadius} // make round
    >
    {
      date.getDate()
    }
    </Box>
  )
};

export default DateButton;