import Home from "../Components/Pages/Home";
import Login from "../Components/Pages/Login";
import Profile from "../Components/Pages/Profile";
import User from "../Components/Pages/User";
import Users from "../Components/Pages/Users/Users";
import NotFound from "../Components/Pages/NotFound";

export const publicRoutes = [
  { path: "/", exact: true, component: Home },
  { path: "/login", exact: true, component: Login },
  { path: "/users", exact: true, component: Users },
  { path: "/users/:userId", exact: true, component: User },
  { path: "*", exact: true, component: NotFound },
];

export const privateRoutes = [
  { path: "/profile", exact: true, component: Profile },
  { path: "*", exact: true, component: NotFound },
];
