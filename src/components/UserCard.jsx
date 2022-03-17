// css
import { UserContent, BoldText, SmallText } from "../styles/UserCard.styled";
import { Flex, Margin } from "../styles/baseStyles";

function UserCard({ name, email, date, country, city }) {
  let year = date.split("/")[2];

  return (
    <UserContent>
      <Flex flexDirection="row" align="center" justify="space-between">
        <BoldText>
          {country} - {city}
        </BoldText>
        <Flex
          flexDirection="row"
          align="center"
          justify="flex-start"
          width="50%"
        >
          <BoldText>Email: {email}</BoldText>
        </Flex>
      </Flex>
      <Margin mt="1rem" />
      <Flex flexDirection="row" align="center" justify="start">
        <SmallText>{name} - </SmallText>
        <SmallText> {year}</SmallText>
      </Flex>
    </UserContent>
  );
}

export default UserCard;
