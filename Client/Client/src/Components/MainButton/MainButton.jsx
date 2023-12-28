import styles from "../MainButton/MainButton.module.css";

export const MainButton = ({ name }) => {
  return <button className={styles.MainBotton} type="submit">{name}</button>;
};
