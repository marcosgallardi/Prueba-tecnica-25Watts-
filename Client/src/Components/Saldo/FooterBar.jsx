import styles from "./Saldo.module.css";
import inicioImg from "../../assets/Icons/icon4.png";
import cumpleImg from "../../assets/Icons/icon3.png";
import ExperienciasImg from "../../assets/Icons/icon.png";
import centroImg from "../../assets/Icons/icon2.png";
import PerfilImg from "../../assets/Icons/icon1.png";

export const FooterBar = () => {
  return (
    <div>
      <div className={styles.barGradient}></div>

      <div className="row pb-2 d-flex justify-content-around align-items-center ">
        <div className="col-2 text-center pt-4">
          <img src={inicioImg} alt="" className="" />
          <br />
          <p className="">Inicio</p>
        </div>
        <div className="col-2  text-center pt-4 ">
          <img src={cumpleImg} alt="" className="" />
          <br />
          <p>Cumples</p>
        </div>
        <div className="col-2 text-center  pt-4">
          <button
            className={`${styles.ButtonQR} position-absolute top-0 start-50 translate-middle-x`}>
            <img src={centroImg} alt="" className="" />
          </button>
          <br />
        </div>
        <div className="col-3 text-center pt-4">
          <img src={ExperienciasImg} alt="" className="" />
          <br />
          <p>Experiencias</p>
        </div>
        <div className="col-2 text-center pt-4">
          <img src={PerfilImg} alt="" className="" />
          <br />
          <p>Perfil</p>
        </div>
      </div>
    </div>
  );
};
