import {
  Text,
  Divider,
  HStack,
  VStack,
  Center,
  Container
} from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import Color from '../Colors';
import { Outlet, Link } from "react-router-dom";

//This is where we have our back button, which appears on many of our pages. It will route back to
//the previous page. It consist of a back arrow and the descriptive text. 

//If no route address is given, it will route to "/"
const BackButton = (params) => {
  const to = params.to ?? "/"
  return (
    <Center>
      <VStack w={'100vw'} alignItems={'left'}>
        <HStack padding={'0'} paddingLeft={'2vw'}>
          <Link to={to}>
            <HStack>
            <ArrowBackIcon boxSize={'8'} />
            <Text color={Color.BLACK} fontSize={'3xl'} >Tilbage</Text>
            </HStack>
          </Link>
        </HStack>
      </VStack>
      <Divider color={Color.BLACK} orientation='horizontal' />
      <Outlet />
    </Center>
  )
};
export default BackButton;