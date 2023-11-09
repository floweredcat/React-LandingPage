import styles from "./styles.module.scss";

export const Button = ({ onclick }) => {
  return (
    <button onClick={onclick} className={styles.btn}>
      <span>Смотреть горизонты</span>
    </button>
  );
};
