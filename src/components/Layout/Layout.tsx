import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import style from "./Layout.module.css";

const Layout = () => {
  return (
    <main className={style.main}>
      <div className={style.header}>
        <Header />
      </div>
      <div className={style.navbar}>
        <Navbar />
      </div>
      <div className={style.content}>
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
