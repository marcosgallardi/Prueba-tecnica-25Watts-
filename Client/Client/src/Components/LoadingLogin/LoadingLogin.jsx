import styles from "./LoadingLogin.module.css";
import logo from "../../assets/images/LogoNeverland.png";
import "animate.css";

export const LoadingLogin = () => {
  return (
    <div className={styles.loadLogBackgrond}>
      <div className="position-absolute top-50 start-50 translate-middle">
        <img src={logo} alt="" />
      </div>
    </div>
  );
};
