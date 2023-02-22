import Link from "../atom/Link/Link";
import styles from "./NavBar.module.scss";

const Navbar = () => {
  return (
    <nav>
      <div className={styles.picture}>user picture</div>
      <div className={styles.navbar}>
        <span>Navigation</span>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="users">Utilisateurs</Link>
          </li>
          <li>
            <Link to="client">Clients</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
