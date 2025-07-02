import App from "@/App";
import Tasks from "@/pages/Tasks";
import Users from "@/pages/Users";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <App />,
    Component: App,
    children: [
        {
            path: "users",
            Component: Users
        },
        {
            path: "tasks",
            Component: Tasks
        }
    ]
  },
]);

export default router;
