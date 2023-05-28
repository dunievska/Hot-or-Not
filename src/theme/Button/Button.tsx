import React from "react";
import styles from "./Button.module.scss";
import like from "../../assets/icons/like.png";
import dislike from "../../assets/icons/dislike.png";

interface ButtonProps {
  type: "like" | "dislike";
  onClick: () => void;
}

const Button = ({ type, onClick }: ButtonProps): JSX.Element => {
  return (
    <button className={styles.btn} onClick={onClick}>
      <img
        className={styles.icon}
        src={type === "like" ? like : dislike}
        alt={`${type} button`}
      />
    </button>
  );
};

export default Button;
