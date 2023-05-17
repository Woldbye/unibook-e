import {
  Text
} from '@chakra-ui/react';
import Color from '../Colors';


const Address = (props) => {
  var { street,zip,city,json } = props;
  if(json) {
    street = json["street"] ?? "";
    zip = json["zip"] ?? 0;
    city = json["city"] ?? "";
  }
  return (<Text color={Color.CREME} padding={'0 40px 0px 40px'}>{`${street}, ${zip} ${city}`}</Text>)
};
export default Address;