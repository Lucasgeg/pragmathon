import { useState } from "react";
import { Link } from "react-router-dom";
import Submenu from "../atom/SubMenu/Submenu";
import styles from "./NavBar.module.scss";

interface MenuOpenState {
  [key: string]: boolean;
}

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<MenuOpenState>({});

  const handleMenuClick = (menuId: string) => {
    setMenuOpen((prevMenuOpen) => ({
      ...prevMenuOpen,
      [menuId]: !prevMenuOpen[menuId],
    }));
  };

  const userLinks = [
    { path: "users", text: "Liste d'utilisateurs" },
    { path: "createUser", text: "Créer nouvel utilisateur" },
  ];

  const clientsLinks = [
    { path: "clients", text: "Liste clients" },
    { path: "createClient", text: "Créer nouveau client" },
  ];

  return (
    <nav>
      <div className={styles.picture}>user picture</div>
      <div className={styles.navbar}>
        <span>Navigation</span>
        <ul>
          <li>
            <Link to="/" className={styles.link}>
              Accueil
            </Link>
          </li>
          <li>
            <div
              className={styles.link}
              onClick={() => handleMenuClick("users")}
            >
              Utilisateurs
            </div>
          </li>
          {menuOpen.users && <Submenu links={userLinks} />}
          <li>
            <div
              className={styles.link}
              onClick={() => handleMenuClick("toto")}
            >
              Clients
            </div>
          </li>
          {menuOpen.toto && <Submenu links={clientsLinks} />}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
