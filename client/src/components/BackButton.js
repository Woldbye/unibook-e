import {
  Text,
  Divider,
  HStack,
  VStack,
  Center
} from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import Color from '../Colors';
import { Outlet, Link } from "react-router-dom";


const BackButton = (params) => {
  const to = params.to ?? "/"
  return (
    <Center>
      <Link to={to}>
        <VStack w={'100vw'} alignItems={'left'}>
          <HStack padding={'0'} paddingLeft={'2vw'}>
            <ArrowBackIcon boxSize={'8'} />
            <Text color={Color.BLACK} fontSize={'3xl'} >Tilbage</Text>
          </HStack>
        </VStack>
        <Divider color={Color.BLACK} orientation='horizontal' />
      </Link>
      <Outlet />
    </Center>
  )
};
export default BackButton;