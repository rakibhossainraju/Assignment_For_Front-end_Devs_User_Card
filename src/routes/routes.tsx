import { createBrowserRouter } from "react-router-dom";
import UserDetailsPage from "../pages/UserDetailsPage.tsx";
import UsersCardsPage from "../pages/UsersCardsPage.tsx";
import App from "../App.tsx";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <UsersCardsPage />,
      },
      {
        path: "users/:userId",
        element: <UserDetailsPage />,
      },
    ],
  },
]);
