import { Outlet, useNavigate } from "react-router-dom";
import useFetchData from "./hooks/useFetchData";
import { UserType } from "./pages/UsersCardsPage";
import LoadingModalComponent from "./components/LoadingModalComponent";
import { useEffect } from "react";

const App = () => {
  const url = "https://dummyjson.com/users";
  const { data, isLoading, error } = useFetchData<UserType>(url, "users");
  const navigate = useNavigate();
  console.log(data);

  useEffect(() => {
    console.log("called");

    if (data.length > 0) navigate("/users", { state: { usersData: data } });
  }, [data]);

  if (isLoading) return <LoadingModalComponent />;
  if (error) return <h1>Fail to fetch data</h1>;
  if (data.length > 0) return <Outlet />;
};

export default App;
