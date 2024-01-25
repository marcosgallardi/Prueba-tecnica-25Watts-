import styles from "./SaldoDetail.module.css";
import cardDetailred from "../../assets/images/redG.png";
import cardDetailYellow from "../../assets/images/amarilloG.png";
import cardDetailazulG from "../../assets/images/azulG.png";
import cardDetailverdeG from "../../assets/images/verdeG.png";

import { MainButton } from "../MainButton/MainButton";
import ticket from "../../assets/Icons/ticket.png";
import saldo from "../../assets/Icons/saldo.png";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { MainButtonLink } from "../MainButton/MainButtonLink";

export const SaldoDetailMovil = () => {
  const { tarjetas } = useSelector((state) => state.login.loged);
  const { cardSelected } = useSelector((state) => state.selected);

  let selection;

  for (const select in cardSelected) {
    if (cardSelected[select] === true) {
      selection = { ...selection, [select]: cardSelected[select] };
    }
  }
  const aux = Object.keys(selection);
  const filterDetail = tarjetas.filter((card) => {
    return card.color === aux[0];
  });

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

  return (
    <>
      <div
        className={`${styles.containerSaldoDetail} ${
          anchoVentana > 750 && anchoVentana < 1100 ? "mt-5" : "mt-3"
        }`}>
        <div className={styles.containerCardDetail}>
          <img
            src={(() => {
              switch (filterDetail[0].color) {
                case "rojo":
                  return cardDetailred;
                case "amarillo":
                  return cardDetailYellow;
                case "verde":
                  return cardDetailverdeG;
                default:
                  return cardDetailazulG;
              }
            })()}
            className={
              anchoVentana > 350 && anchoVentana < 390
                ? styles.imgCardDetail1
                : styles.imgCardDetail
            }
            alt=""
          />
          <div className={styles.nombreCardDetail}>
            <p>{filterDetail[0].name + filterDetail[0].lastName}</p>
          </div>
        </div>
        <div
          className={
            anchoVentana > 350 && anchoVentana < 390
              ? styles.containerText1
              : styles.containerText
          }>
          <div className="row ">
            <div className="col-12 d-flex justify-content-center">
              <img src={saldo} alt="" className={styles.imgDetail1} />
              <p className="pt-3">
                Saldo disponible en tarjeta <br />
                <span className="fw-bold">${filterDetail[0].saldo}</span>
              </p>
            </div>
            <div className="col-12 d-flex justify-content-center">
              <img src={ticket} alt="" className={styles.imgDetail2} />
              <p>
                Tickets disponible en tarjeta <br />
                <span className="fw-bold">{filterDetail[0].puntos}</span>
              </p>
            </div>
          </div>
        </div>

        <div
          className={
            anchoVentana > 350 && anchoVentana < 390
              ? styles.PositionButtonSald15
              : styles.PositionButtonSald
          }>
          <MainButtonLink
            name={"Cargar saldo"}
            linkTo="/PagarPage"
            size={
              (anchoVentana >= 350) & (anchoVentana < 390)
                ? { width: "300px", height: "40px" }
                : "0px"
            }
          />
        </div>
      </div>
    </>
  );
};
