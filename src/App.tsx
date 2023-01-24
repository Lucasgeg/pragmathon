import { HashRouter, Route, Routes } from "react-router-dom";
import { ErrorPage } from "./pages/ErrorPage";
import Home from "./pages/Home";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
    </Routes>
  );
};

export const WrappedApp = () => {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
};
