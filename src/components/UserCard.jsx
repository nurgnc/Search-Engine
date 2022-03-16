// css
import { UserContent } from "../styles/UserCard.styled";

function UserCard({ name, email, date, country, city }) {
  let year = date.split("/")[2];

  return (
    <UserContent>
      <div>
        {country} - {city}, {email}
      </div>
      <div>
        {name} - {year}
      </div>
    </UserContent>
  );
}

export default UserCard;
