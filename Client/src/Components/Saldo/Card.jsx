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
    console.log(color, "acac colorr");
    setSelected({
      ...selected,
      verde: false,
      rojo: false,
      amarillo: false,
      azul: false,
      [color]: true,
    });
  };

  console.log(selected);

  const getCardClassName = (cardColor) => {
    switch (cardColor) {
      case "amarillo":
        return `${styles.containerCardAmar} ${
          selected.amarillo ? styles.selected : ""
        }`;
      case "rojo":
        return `${styles.containerCardRojo} ${
          selected.rojo ? styles.selected : ""
        }`;
      case "verde":
        return `${styles.containerCardVerde} ${
          selected.verde ? styles.selected : ""
        }`;
      case "azul":
        return `${styles.containerCardAzul} ${
          selected.azul ? styles.selected : ""
        }`;
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
