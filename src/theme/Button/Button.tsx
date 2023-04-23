import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps): JSX.Element => {
  return <button className={styles.btn}>{children}</button>;
};

export default Button;
