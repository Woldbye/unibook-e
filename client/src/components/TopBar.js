import { Outlet, Link } from "react-router-dom";
import { Box, Flex, Text } from "@chakra-ui/react";
import Logo from "./Logo";

// export const TopBar = ({ children, boxWidth = '100vw'}) => {

const TopBar = ({ boxWidth = '100vw' }) => {
  return (
    <>
      <Box
        position={"sticky"}
        zIndex={5}
        height={'4vh'}
        top={0}
        className={"top-bar"}
        minWidth={boxWidth}
        maxWidth={boxWidth}
        minHeight={'3vh'}
        boxShadow={'0px 1px 4px #00000040'}
        justifyContent={'center'}
      >
          <Flex
            direction={"row"}
            height={'100%'}
            alignItems={'center'}
            marginRight={'1.5%'}
            marginLeft={'1.5%'}
            justifyContent={"space-between"}
            >
            <Link to="/lokaler">
              <Text fontSize='md' className='top-bar-nav'>Lokaler</Text >
            </Link>
            <Link to="/">
              <Logo/>
            </Link>
            <Link to="/book">
              <Text fontSize='md' className='top-bar-nav'>Book</Text >
            </Link>
          </Flex>
      </Box>
      <Outlet />
    </>
  )
};

export default TopBar;