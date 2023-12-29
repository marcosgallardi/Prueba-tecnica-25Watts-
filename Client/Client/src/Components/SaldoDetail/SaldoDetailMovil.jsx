import styles from "./SaldoDetail.module.css";
import cardDetail from "../../assets/images/rojotar.png";
import { FooterBar } from "../Saldo/FooterBar";
import { MainButton } from "../MainButton/MainButton";
import ticket from "../../assets/Icons/ticket.png";
import saldo from "../../assets/Icons/saldo.png";

export const SaldoDetailMovil = () => {
  return (
    <div className={styles.containerSaldoDetail}>
      <div className={styles.containerCardDetail}>
        <img src={cardDetail} alt="" />
        <div className={styles.nombreCardDetail}>
          <p>Lucía</p>
        </div>
      </div>
      <div className={styles.containerText}>
        <div className="row ">
          <div className="col-12 d-flex justify-content-center">
            <img src={saldo} alt="" className={styles.imgDetail1} />
            <p className="pt-3">
              Saldo disponible en tarjeta <br />
              <span className="fw-bold">$1.000</span>
            </p>
          </div>
          <div className="col-12 d-flex justify-content-center">
            <img src={ticket} alt="" className={styles.imgDetail2} />
            <p>
              Saldo disponible en tarjeta <br />
              <span className="fw-bold">$2.000</span>
            </p>
          </div>
        </div>
      </div>

      <div className={styles.PositionButtonSald}>
        <MainButton name={"Cargar saldo"} />
      </div>
      <div className={styles.PositionFooter}>
        <FooterBar />
      </div>
    </div>
  );
};
