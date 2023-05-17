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
  return (<Text color={Color.CREME}>{`${street}, ${zip} ${city}`}</Text>)
};
export default Address;