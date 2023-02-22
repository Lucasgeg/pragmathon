/* 
j'envois un tableau de lien avec un path
je retourne un map de chaque lien avec des <Link>
je dois tester que si j'envois plusieurs liens, qu'ils apparaissent tous avec le bon path et le bon texte
*/

import { Link } from "react-router-dom";
import styles from "./Submenu.module.scss";

interface SubmenuProps {
  links: {
    text: string;
    path: string;
  }[];
}

const ArrowSVG = () => {
  return (
    <svg viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M6 11.9999V9.32992C6 6.01992 8.35 4.65992 11.22 6.31992L13.53 7.65992L15.84 8.99992C18.71 10.6599 18.71 13.3699 15.84 15.0299L13.53 16.3699L11.22 17.7099C8.35 19.3399 6 17.9899 6 14.6699V11.9999Z"
          stroke="#292D32"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

const Submenu = ({ links }: SubmenuProps) => {
  return (
    <div className={styles.container}>
      {links.map((link) => {
        return (
          <span key={link.path} className={styles.link}>
            <ArrowSVG /> <Link to={link.path}>{link.text}</Link>
          </span>
        );
      })}
    </div>
  );
};

export default Submenu;
