import useFetchData from "../hooks/useFetchData.ts";
import UserCardComponent from "../components/UserCardComponent.tsx";

export interface UserType {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  address: AddressType;
}
interface AddressType {
  address: string;
  city: string;
  state: string;
}

const UsersCardsPage = () => {
  const url = "https://dummyjson.com/users";
  const {
    data: usersData,
    isLoading,
    error,
  } = useFetchData<UserType>(url, "users");
  const ShowUserCards = () => {
    if (isLoading) return <h1>Loading...</h1>;
    if (error) return <h1>Fail to fetch data</h1>;
    if (usersData.length)
      return (
        <>
          <h2>Users Card</h2>
          {usersData.map((userData) => (
            <UserCardComponent key={userData.firstName} userData={userData} />
          ))}
        </>
      );
  };
  return <ShowUserCards />;
};

export default UsersCardsPage;
