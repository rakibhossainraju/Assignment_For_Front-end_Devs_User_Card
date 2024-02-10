import { type UserType } from "../pages/UsersCardsPage.tsx";
import { Link } from "react-router-dom";

interface UserPropsType {
  userData: UserType;
}
const UserCardComponent = ({
  userData: { id, firstName, lastName, image, email, address },
}: UserPropsType) => {
  return (
    <div className="border-2 border-slate-900">
      <h1>{firstName}</h1>
      <h1>{lastName}</h1>
      <img src={image} alt={firstName + " " + lastName} />
      <h1>{email}</h1>
      <p>{address.address}</p>
      <p>{address.city}</p>
      <p>{address.state}</p>
      <Link to={"users/" + id.toString()}>Go to details page</Link>
    </div>
  );
};

export default UserCardComponent;
