import styles from "./Saldo.module.css";
import inicioImg from "../../assets/Icons/icon4.png";
import cumpleImg from "../../assets/Icons/icon3.png";
import ExperienciasImg from "../../assets/Icons/icon.png";
import centroImg from "../../assets/Icons/icon2.png";
import PerfilImg from "../../assets/Icons/icon1.png";

export const FooterBarDesk = () => {
  return (
    <div>
      <div className={styles.barGradient}></div>
      <div className={styles.bar}>
        <div className="row pb-2 px-5 ms-5 d-flex justify-content-between">
          <div className="col-2 pt-3 ms-5 ps-5">
            <img src={inicioImg} alt="" className="ps-2" />
            <br />
            <p className="">Inicio</p>
          </div>
          <div className="col-2 pt-3 ps-4 ms-3">
            <img src={cumpleImg} alt="" className="ps-3" />
            <br />
            <p>Cumples</p>
          </div>
          <div className="col-2 ps-5">
            <button className={styles.ButtonQR2}>
              <img src={centroImg} alt="" className="pb-1" />
            </button>
            <br />
          </div>
          <div className="col-3 pt-3 ps-5 ms-5">
            <img src={ExperienciasImg} alt="" className="ps-4" />
            <br />
            <p>Experiencias</p>
          </div>
          <div className="col-2 pt-3 ps-4">
            <img src={PerfilImg} alt="" className="ps-1" />
            <br />
            <p>Perfil</p>
          </div>
        </div>
      </div>
    </div>
  );
};
