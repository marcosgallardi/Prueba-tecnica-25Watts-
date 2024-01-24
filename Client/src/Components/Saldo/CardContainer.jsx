import { Card } from "./Card";
import agregar from "../../assets/images/tarjetaagregar.png";
import agregarG from "../../assets/images/tarjetaagregarG.png";
import styles from "./Saldo.module.css";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export const CardContainer = () => {
  const { tarjetas } = useSelector((state) => state.login.loged);

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

  console.log(tarjetas);

  return (
    <div
      className={
        anchoVentana < 700
          ? "pt-4"
          : anchoVentana > 1000
          ? "pt-4 ps-5 ms-4"
          : "pt-4 ps-2"
      }>
      <div className="row d-flex justify-content-center">
        {tarjetas &&
          tarjetas.map(({ name, lastName, saldo, puntos, color, rowIndex }) => {
            return (
              <div className="col-5 me-3" key={rowIndex}>
                <Card
                  key={rowIndex}
                  nombre={name}
                  apellido={lastName}
                  saldo={saldo}
                  tickets={puntos}
                  color={color}
                />
              </div>
            );
          })}

        {anchoVentana > 700 ? (
          <div className="col-5 pt-2">
            <img src={agregarG} alt="" className={styles.imgAgregar} />
          </div>
        ) : (
          <div className="col-5 pt-2">
            <img src={agregar} alt="" />
          </div>
        )}
        <div className="col-5  pt-2"></div>
      </div>
    </div>
  );
};
