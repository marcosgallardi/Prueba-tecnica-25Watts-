import { CardContainer } from "./CardContainer";

import styles from "./Saldo.module.css";
import { FooterBarDesk } from "./FooterBarDesk";
import { MainButtonLink } from "../MainButton/MainButtonLink";

export const SaldoDesktop = () => {
  return (
    <div className={styles.containerSaldo}>
      <h3 className={styles.textSelecciona}>Seleccioná una tarjeta</h3>
      <CardContainer />
      <div className={styles.PositionButtonSald1}>
        <MainButtonLink name={"Continuar"} />
      </div>
      <div className={styles.PositionFooter}>
        <FooterBarDesk />
      </div>
    </div>
  );
};
