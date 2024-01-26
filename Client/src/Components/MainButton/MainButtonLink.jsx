import { Link } from "react-router-dom";
import styles from "../MainButton/MainButton.module.css";

export const MainButtonLink = ({ name, size, linkTo, id }) => {
  console.log(id);
  return (
    <Link
      className={styles.MainBotton}
      style={size && { width: size.width, height: size.height }}
      type="submit"
      to={`${linkTo}/${id}`}>
      <p className="d-flex justify-content-center pt-2 mt-1">{name}</p>
    </Link>
  );
};
