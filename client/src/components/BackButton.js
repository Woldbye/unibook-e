import { 
    Container,
    Text,
    Divider,
    HStack
} from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import Color from '../Colors';
import { Outlet, Link } from "react-router-dom";


const BackButton = (params) => {
    const to = params.to ?? "/"
    return (
      <Container>
        <Link to={to}>
          <HStack width="80vw">
            <ArrowBackIcon/>
            <Text color={Color.BLACK}>Tilbage</Text>
          </HStack>
          <Divider color={Color.BLACK}  orientation='horizontal' />
        </Link>
        <Outlet/>
      </Container>
    )
};
export default BackButton;