import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import MyProjects from "./MyProjects";
import NewProject from "./NewProject";
import Login from "./SignIn";
import Signup from "./SignUp";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/sign-up", element: <Signup /> },
  { path: "/sign-in", element: <Login /> },
  { path: "/my-projects", element: <MyProjects /> },
  { path: "/new-project", element: <NewProject /> },
]);

export default router;
