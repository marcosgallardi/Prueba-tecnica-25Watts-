import { CardContainer } from "./CardContainer";
import { MainButton } from "../MainButton/MainButton";
import styles from "./Saldo.module.css";
import { FooterBar } from "./FooterBar";

export const SaldoMovil = () => {
  return (
    <div className={styles.containerSaldo}>
      <h3 className={styles.textSelecciona}>Seleccioná una tarjeta</h3>
      <CardContainer />
      <div className={styles.PositionButtonSald}>
        <MainButton name={"Continuar"} />
      </div>
      <div className={styles.PositionFooter}>
        <FooterBar />
      </div>
    </div>
  );
};
