import { 
    Container,
    Text,
    Divider,
    Link,
    HStack
} from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import Color from '../Colors';

const BackButton = (params) => {
    const to = params.to ?? "/"
    console.log("to: ", to)
    return (
        <Link to={to}>
        <Container>
            <HStack width="80vw">
                <ArrowBackIcon/>
                <Text color={Color.BLACK}>Tilbage</Text>
            </HStack>
        <Divider color={Color.BLACK}  orientation='horizontal' />
        </Container>
        </Link>
    )
};
export default BackButton;