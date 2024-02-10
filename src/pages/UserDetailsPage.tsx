import { useParams } from "react-router-dom";

const UserDetailsPage = () => {
  const id = useParams().userId;
  return (
    <>
      <h1>{id}</h1>
      <h1>User Details Page</h1>
    </>
  );
};

export default UserDetailsPage;
