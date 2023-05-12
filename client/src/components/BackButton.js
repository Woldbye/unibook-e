import { 
    Container,
    Text,
    Divider,
    Link,
    HStack
} from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import Color from '../Colors';

const BackButton = ({ to="/" }) => {
    return     (
<Container>
<Link to>
<HStack  width="80vw">
    <ArrowBackIcon />
    <Text color={Color.BLACK}>Tilbage</Text>
</HStack>
    </Link>
    <Divider color={Color.BLACK}  orientation='horizontal' />
</Container>
)
};
export default BackButton;