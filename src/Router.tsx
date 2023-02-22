import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import Home from "./pages/Home/Home";
import UserPage from "./pages/Users/Users";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="*" element={<ErrorPage />} />
          <Route index element={<Home />} />
          <Route path="users" element={<UserPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
