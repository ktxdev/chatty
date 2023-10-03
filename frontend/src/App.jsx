import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignInPage from "./SignInPage";
import SignUpPage from "./SignUpPage";
import AppLayout from "./AppLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
  {
    path: "/sign-in",
    element: <SignInPage />,
  },
  {
    path: "/sign-up",
    element: <SignUpPage />,
  },
]);

function App() {
  return (
    <div className="h-screen">
      <div className="bg-slate-700 h-36"></div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
