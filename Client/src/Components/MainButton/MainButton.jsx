import styles from "../MainButton/MainButton.module.css";

export const MainButton = ({ name, size }) => {
  return (
    <button
      className={styles.MainBotton}
      style={{ width: size.width, height: size.height }}
      type="submit">
      {name}
    </button>
  );
};
