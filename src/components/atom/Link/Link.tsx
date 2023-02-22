import { ReactNode } from "react";
import {
  Link as ReactLink,
  LinkProps as ReactLinkProps,
} from "react-router-dom";
import styles from "./Link.module.scss";

interface LinkProps extends ReactLinkProps {
  children: ReactNode;
}

const Link = ({ to, children, ...rest }: LinkProps) => {
  return (
    <ReactLink to={to} {...rest} className={styles.link}>
      {children}
    </ReactLink>
  );
};

export default Link;
