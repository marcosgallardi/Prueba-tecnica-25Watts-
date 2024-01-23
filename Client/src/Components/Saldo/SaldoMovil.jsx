import { CardContainer } from "./CardContainer";

import styles from "./Saldo.module.css";
import { FooterBar } from "./FooterBar";
import { MainButtonLink } from "../MainButton/MainButtonLink";

export const SaldoMovil = () => {
  return (
    <div className={styles.containerSaldo}>
      <h3 className={styles.textSelecciona}>Seleccioná una tarjeta</h3>
      <CardContainer />
      <div className={styles.PositionButtonSald}>
        <MainButtonLink name={"Continuar"} />
      </div>
      <div className={styles.PositionFooter}>
        <FooterBar />
      </div>
    </div>
  );
};
