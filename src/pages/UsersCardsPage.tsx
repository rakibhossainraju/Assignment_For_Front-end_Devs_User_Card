import useFetchData from "../hooks/useFetchData.ts";
import UserCardComponent from "../components/UserCardComponent.tsx";
import LoadingModalComponent from "../components/LoadingModalComponent.tsx";

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

  if (isLoading) return <LoadingModalComponent />;
  if (error) return <h1>Fail to fetch data</h1>;
  if (usersData.length)
    return (
      <main className="p-10">
        <h2 className="gradient-text my-5 text-center font-medium max-md:text-5xl md:text-[5rem]">
          User Cards
        </h2>
        <section className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {usersData.map((userData) => (
            <UserCardComponent key={userData.firstName} userData={userData} />
          ))}
        </section>
      </main>
    );
};

export default UsersCardsPage;
