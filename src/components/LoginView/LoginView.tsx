import React from "react";
import styles from "./LoginView.module.scss";
import Button from "theme/Button/Button";

const LoginView = (): JSX.Element => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Button>Login</Button>
      </div>
    </div>
  );
};

export default LoginView;
