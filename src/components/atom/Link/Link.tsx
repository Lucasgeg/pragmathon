import { ReactNode } from "react";
import { Link as ReactLink } from "react-router-dom";
import styles from "./Link.module.scss";

interface LinkProps {
  to: string;
  children: ReactNode;
}

const Link = ({ to, children }: LinkProps) => {
  return (
    <ReactLink to={to} className={styles.link}>
      {children}
    </ReactLink>
  );
};

export default Link;
