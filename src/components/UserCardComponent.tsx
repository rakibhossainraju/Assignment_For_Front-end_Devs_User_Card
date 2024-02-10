import { type UserType } from "../pages/UsersCardsPage.tsx";
import { Link } from "react-router-dom";

interface UserPropsType {
  userData: UserType;
}
const UserCardComponent = ({
  userData: { id, firstName, lastName, image, email },
}: UserPropsType) => {
  return (
    <div className="border-grad gradient-border card w-80 shadow-3xl backdrop-blur-3xl">
      <figure className="border-b-2 border-slate-300">
        <img src={image} className="mx-auto max-w-48 md:max-w-56" alt="Shoes" />
      </figure>
      <div className="card-body text-center">
        <h2 className="text-xl font-medium text-blue-950">
          {firstName} {lastName}
        </h2>
        <p>{email}</p>

        <div className="card-actions mt-5">
          <Link
            to={"users/" + id.toString()}
            className="btn btn-primary w-full text-lg text-blue-50"
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserCardComponent;
