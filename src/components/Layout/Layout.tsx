import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import style from "./Layout.module.css";

// TODO: grid avec 2 col 3 row
const Layout = () => {
  return (
    <main className={style.main}>
      <div style={{ backgroundColor: "red" }}>1</div>
      <div className="item" style={{ backgroundColor: "blue" }}>
        2
      </div>
      <div className="item" style={{ backgroundColor: "violet" }}>
        2
      </div>
      {/* <Header />
      <Navbar />
      <Outlet /> */}
    </main>
  );
};

export default Layout;
