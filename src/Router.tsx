import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { ErrorPage } from "./pages/ErrorPage";
import Home from "./pages/Home";
import UserPage from "./pages/UserPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
          <Route index element={<Home />} />
          <Route path="users" element={<UserPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
