import classNames from "classnames";
import { ReactNode } from "react";
import styles from "./ComponentLayout.module.scss";

interface ComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const ComponentLayout = ({ children, className, ...rest }: ComponentProps) => {
  return (
    <div className={classNames(styles.content, className)} {...rest}>
      {children}
    </div>
  );
};

export default ComponentLayout;
