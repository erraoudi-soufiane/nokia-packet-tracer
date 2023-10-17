import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import MyProjects from "./MyProjects";
import NewProject from "./NewProject";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/sign-up", element: <SignUp /> },
  { path: "/sign-in", element: <SignIn /> },
  { path: "/my-projects", element: <MyProjects /> },
  { path: "/new-project", element: <NewProject /> },
]);

export default router;
