import UserCardComponent from "../components/UserCardComponent.tsx";
import SearchBarComponent from "../components/SearchBarComponent.tsx";
import SortBarComponent from "../components/SortBarComponent.tsx";
import { useEffect, useState } from "react";
import { debounce } from "../utils/debounce.ts";
import AddUserModal from "../components/AddUserModal.tsx";
import useFetchData from "../hooks/useFetchData.ts";
import LoadingModalComponent from "../components/LoadingModalComponent.tsx";

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
  const [userData, setUserData] = useState(data);
  useEffect(() => setUserData(data), [data]);

  const handelSearch = debounce((query: string) => {
    const searchedData = data.filter(
      (userData) =>
        userData.firstName.toLowerCase().includes(query) ||
        userData.lastName.toLowerCase().includes(query) ||
        userData.email.toLowerCase().includes(query) ||
        userData.company.name.toLowerCase().includes(query),
    );
    setUserData(searchedData);
  }, 550);

  const sortUsers = <K extends keyof UserType>(sortedBy: K) => {
    const sortedUsers = [...userData].sort((a, b) => {
      if (sortedBy === "company") {
        const newA = (a[sortedBy] as CompanyType).name.toLowerCase();
        const newB = (b[sortedBy] as CompanyType).name.toLowerCase();
        if (newA < newB) return -1;
        if (newA > newB) return 1;
      }
      if (sortedBy === "firstName" || sortedBy === "email") {
        const newA = (a[sortedBy] as string).toLowerCase();
        const newB = (b[sortedBy] as string).toLowerCase();
        if (newA < newB) return -1;
        if (newA > newB) return 1;
      }
      return 0;
    });
    setUserData(sortedUsers);
  };
  if (isLoading) return <LoadingModalComponent />;
  if (error)
    return <h1 className="text-center text-2xl">Fail to fetch data</h1>;
  if (data.length > 0)
    return (
      <main className="p-5">
        <h2 className="gradient-text my-5 text-center font-medium max-md:text-5xl md:text-[5rem]">
          User Cards
        </h2>
        <div className="my-5 flex items-center justify-center gap-5 max-md:flex-col md:my-14 md:gap-10">
          <SearchBarComponent handelSearch={handelSearch} />
          <SortBarComponent sortUsers={sortUsers} />
          <AddUserModal />
        </div>
        <section className="mx-auto flex max-w-[90rem] flex-wrap items-center justify-center gap-10 md:gap-16">
          {userData.map((userData) => (
            <UserCardComponent key={userData.firstName} userData={userData} />
          ))}
          {userData.length === 0 && (
            <h3 className="mt-10 fill-blue-900 text-xl font-medium">
              No user found!
            </h3>
          )}
        </section>
      </main>
    );
};

export default UsersCardsPage;
