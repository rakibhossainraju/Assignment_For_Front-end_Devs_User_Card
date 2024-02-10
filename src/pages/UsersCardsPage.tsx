import useFetchData from "../hooks/useFetchData.ts";
import UserCardComponent from "../components/UserCardComponent.tsx";
import LoadingModalComponent from "../components/LoadingModalComponent.tsx";
import SearchBarComponent from "../components/SearchBarComponent.tsx";
import SortBarComponent from "../components/SortBarComponent.tsx";
import { useEffect, useState } from "react";

export interface UserType {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  address: AddressType;
  company: CompanyType;
}
interface AddressType {
  address: string;
  city: string;
  state: string;
}

interface CompanyType {
  department: string;
  name: string;
  title: string;
}

const UsersCardsPage = () => {
  const url = "https://dummyjson.com/users";
  const { data, isLoading, error } = useFetchData<UserType>(url, "users");
  const [test, setTest] = useState(data);

  useEffect(() => setTest(data), [data]);
  let searchedData: UserType[] = [];

  const handelSearch = (query: string) => {
    searchedData = data.filter(
      (userData) =>
        userData.firstName.toLowerCase().includes(query) ||
        userData.lastName.toLowerCase().includes(query) ||
        userData.email.toLowerCase().includes(query) ||
        userData.company.name.toLowerCase().includes(query),
    );
    setTest(searchedData);
  };

  if (isLoading) return <LoadingModalComponent />;
  if (error) return <h1>Fail to fetch data</h1>;
  if (data.length)
    return (
      <main className="p-5">
        <h2 className="gradient-text my-5 text-center font-medium max-md:text-5xl md:text-[5rem]">
          User Cards
        </h2>
        <div className="my-5 flex items-center justify-center gap-5 max-md:flex-col md:my-14 md:gap-10">
          <SearchBarComponent handelSearch={handelSearch} />
          <SortBarComponent />
        </div>
        <section className="mx-auto flex max-w-[90rem] flex-wrap items-center justify-center gap-10 md:gap-16">
          {test.map((userData) => (
            <UserCardComponent key={userData.firstName} userData={userData} />
          ))}
          {test.length === 0 && (
            <h3 className="mt-10 fill-blue-900 text-xl font-medium">
              No user found!
            </h3>
          )}
        </section>
      </main>
    );
};

export default UsersCardsPage;
