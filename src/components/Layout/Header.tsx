import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/">
        <img src="/src//assets/img/logo_png.png" alt="logo pragmantic" />
      </Link>
    </div>
  );
};

export default Header;
