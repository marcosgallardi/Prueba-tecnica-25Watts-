import { Link } from "react-router-dom";
import styles from "../MainButton/MainButton.module.css";

export const MainButtonLink = ({ name }) => {
  
  return (
    <Link className={styles.MainBotton2} type="submit" to={`/saldoDetail/${""}`}>
      <p className="d-flex justify-content-center pt-2">{name}</p>
    </Link>
  );
};
