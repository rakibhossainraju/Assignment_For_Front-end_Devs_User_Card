import { Link, useLocation } from "react-router-dom";
import { UserType } from "./UsersCardsPage";

const UserDetailsPage = () => {
  const { firstName, lastName, image, company, address } = useLocation().state
    .userData as UserType;

  return (
    <section className="flex min-h-[90vh] w-full flex-col items-center justify-center gap-10">
      <div className="mx-6 rounded-2xl bg-gradient-to-r from-teal-200 to-teal-500 px-2 shadow-3xl">
        <div className="flex flex-col rounded-l-xl text-white md:flex-row">
          <img
            src={image}
            alt={firstName}
            className="mx-auto max-md:max-w-xl"
          />
          <div className="p-6 max-sm:text-center md:p-12 lg:py-16">
            <h2 className="text-4xl font-medium md:text-left">
              {firstName} {lastName}
            </h2>
            <p className="mt-2 text-xs text-slate-200">
              {company.title} at {company.name}
            </p>
            <p className="my-4 max-w-md text-[1rem] md:text-left">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              nulla! Veniam incidunt quo minus numquam non fugiat nemo optio
              accusamus autem ad laboriosam dolor iure.
            </p>
            <ul className="list-disc text-left">
              <p className="max-sm:text-center">Address</p>
              <li className="list-item list-inside">City : {address.city}</li>
              <li className="list-item list-inside">Suite : {address.state}</li>
              <li className="list-item list-inside">
                Address : {address.address}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Link to={-1} className="btn-gradient">
        Go back
      </Link>
    </section>
  );
};

export default UserDetailsPage;
