import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { Auth } from "./pages/Auth";
import { ErrorPage } from "./pages/ErrorPage";
import Home from "./pages/Home";
import { Sub1 } from "./pages/Sub1";
import { Sub2 } from "./pages/Sub2";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
  )
);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;

const UserRoute = () => {
  return <Route path="/home" element={<Sub1 />} />;
};

const AdminRoute = () => {
  return <Route path="/home" element={<Sub2 />} />;
};
