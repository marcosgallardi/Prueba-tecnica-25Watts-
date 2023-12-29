import styles from "./Saldo.module.css";

export const Card = ({ nombre, apellido, saldo, tickets, color }) => {
  return (
    <>
      {color === "amarillo" ? (
        <div className={styles.containerCardAmar}>
          <div className={styles.nombreCard}>
            <p>{`${nombre} ${"  "} ${apellido}`}</p>
          </div>
        </div>
      ) : color === "rojo" ? (
        <div className={styles.containerCardRojo}>
          <div className={styles.nombreCard}>
            <p>{`${nombre} ${"  "} ${apellido}`}</p>
          </div>
        </div>
      ) : color === "verde" ? (
        <div className={styles.containerCardVerde}>
          <div className={styles.nombreCard}>
            <p>{`${nombre} ${"  "} ${apellido}`}</p>
          </div>
        </div>
      ) : color === "azul" ? (
        <div className={styles.containerCardAzul}>
          <div className={styles.nombreCard}>
            <p>{`${nombre} ${"  "} ${apellido}`}</p>
          </div>
        </div>
      ) : null}
    </>
  );
};
