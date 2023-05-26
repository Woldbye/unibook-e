import { Outlet, Link } from "react-router-dom";
import { Box, Flex, Text } from "@chakra-ui/react";
import Logo from "./Logo";

const TopBar = ({ boxWidth = '100vw' }) => {
  return (
    <>
      <Box
        position={"sticky"}
        zIndex={5}
        height={'8vh'}
        top={0}
        className={"top-bar"}
        minWidth={boxWidth}
        maxWidth={boxWidth}
        minHeight={'4vh'}
        boxShadow={'0px 1px 4px #00000040'}
        justifyContent={'center'}
      >
          <Flex
            direction={"row"}
            height={'100%'}
            alignItems={'center'}
            justifyContent={"center"}
          >
            <Link to="/rooms">
              <Text fontSize='md' className='top-bar-nav' paddingRight={'20px'}>Oversigt</Text >
            </Link>
            <Link to="/">
              <Logo position="relative" top='-2px' fontSize='2xl'/>
            </Link>
            <Link to="/book">
              <Text fontSize='md' className='top-bar-nav' paddingLeft={'20px'}>Booking</Text >
            </Link>
          </Flex>
      </Box>
      <Outlet />
    </>
  )
};

export default TopBar;