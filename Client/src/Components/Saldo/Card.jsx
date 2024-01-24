import { useEffect, useState } from "react";
import styles from "./Saldo.module.css";

export const Card = ({ nombre, apellido, saldo, tickets, color }) => {
  let initialState = {
    amarillo: false,
    rojo: false,
    verde: false,
    azul: false,
  };

  const [selected, setSelected] = useState(initialState);

  const onCardSelect = (color) => {
    setSelected({
      ...selected,
      verde: false,
      rojo: false,
      amarillo: false,
      azul: false,
      [color]: true,
    });
  };

  const [anchoVentana, setAnchoVentana] = useState(window.innerWidth);

  useEffect(() => {
    const actualizarAnchoVentana = () => {
      setAnchoVentana(window.innerWidth);
    };

    window.addEventListener("resize", actualizarAnchoVentana);

    return () => {
      window.removeEventListener("resize", actualizarAnchoVentana);
    };
  }, []);

  const getCardClassName = (cardColor) => {
    switch (cardColor) {
      case "amarillo":
        return `${
          anchoVentana > 700
            ? styles.containerCardAmar1
            : styles.containerCardAmar
        } ${selected.amarillo ? styles.selected : ""}`;
      case "rojo":
        return `${
          anchoVentana > 700
            ? styles.containerCardRojo1
            : styles.containerCardRojo
        } ${selected.rojo ? styles.selected : ""}`;
      case "verde":
        return `${
          anchoVentana > 700
            ? styles.containerCardVerde1
            : styles.containerCardVerde
        } ${selected.verde ? styles.selected : ""}`;
      case "azul":
        return `${
          anchoVentana > 700
            ? styles.containerCardAzul1
            : styles.containerCardAzul
        } ${selected.azul ? styles.selected : ""}`;
      default:
        return "";
    }
  };

  return (
    <>
      {color === "amarillo" ||
      color === "rojo" ||
      color === "verde" ||
      color === "azul" ? (
        <div
          className={getCardClassName(color)}
          onClick={() => onCardSelect(color)}>
          <div className={styles.nombreCard}>
            <p>{`${nombre} ${"  "} ${apellido}`}</p>
          </div>
        </div>
      ) : null}
    </>
  );
};
