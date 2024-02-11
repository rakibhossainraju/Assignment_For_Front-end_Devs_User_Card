import { type UserType } from "../pages/UsersCardsPage.tsx";
import { Link } from "react-router-dom";

interface UserPropsType {
  userData: UserType;
}
const UserCardComponent = ({ userData }: UserPropsType) => {
  const { id, firstName, lastName, image, email, company } = userData;
  return (
    <div className="border-grad gradient-border card w-80 shadow-3xl">
      <figure className="border-b-2 border-slate-300">
        <img src={image} className="mx-auto max-w-48 md:max-w-56" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-medium text-blue-900">
          {firstName} {lastName}
        </h2>
        <p className="text-sm text-slate-500">Email : {email}</p>
        <p className="text-sm text-slate-500">Company Name : {company.name}</p>

        <div className="card-actions mt-5">
          <Link
            to={"/users/" + id.toString()}
            state={{ userData }}
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
