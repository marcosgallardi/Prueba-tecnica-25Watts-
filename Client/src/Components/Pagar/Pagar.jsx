import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { MainButton } from "../MainButton/MainButton";
import { server } from "../../helpers/endpoint";

import axios from "axios";
import saldo from "../../assets/Icons/saldo.png";
import styles from "./Pagar.module.css";

export const Pagar = () => {
  const montosSugeridos = [500, 1000, 1500, 2000, 2500, 3000];

  const { tarjetas } = useSelector((state) => state.login.loged);
  let id = useParams();

  const idTarjeta = Object.values(id)[0];
  let tarjetaSeleccionada = tarjetas.find((tarjeta) => {
    return tarjeta.id_tarjeta == idTarjeta;
  });

  const [saldoACargar, setSaldoACargar] = useState(0);

  const handleChangePagar = (e) => {
    const { value } = e.target;
    setSaldoACargar(value);
  };

  const handleSugerido = (monto) => {
    setSaldoACargar(monto);
  };

  const handlerSubmitSaldo = async (e) => {
    e.preventDefault();
    const cargaSaldo = await axios.put(`${server}users/saldo`, {
      saldoACargar,
      idTarjeta,
      idUsuario: tarjetaSeleccionada.UserIdUsuario,
    });
    if (cargaSaldo.status === 200) {
      alert("Saldo cargado correctamente");
      setSaldoACargar(0);
    } else {
      alert("Error al cargar saldo");
    }
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

  return (
    <form onSubmit={handlerSubmitSaldo}>
      <span className="d-flex align-items-center">
        {anchoVentana > 1050 ? (
          <p className="fw-bold display-6 ps-3 pt-3">$</p>
        ) : (
          <p
            className={
              anchoVentana < 380
                ? "fw-bold display-5 ps-3 pt-1"
                : "fw-bold display-2 ps-3 pt-3"
            }>
            $
          </p>
        )}
        <input
          type="number"
          className={
            anchoVentana < 380
              ? styles.input1
              : anchoVentana > 700 && anchoVentana < 1050
              ? styles.input2
              : styles.input
          }
          value={saldoACargar}
          onChange={handleChangePagar}
        />
      </span>
      <hr className="mx-3" />
      <div className="d-flex justify-content-start ps-3 align-items-center">
        <img
          src={saldo}
          alt=""
          className={
            anchoVentana > 700 && anchoVentana < 1050 ? styles.imgSaldo : ""
          }
        />
        <p
          className={
            anchoVentana > 700 && anchoVentana < 1050
              ? "fs-3 ps-2 pt-5"
              : "fs-5 ps-2 pt-3"
          }>
          Saldo disponible en la tarjeta{" "}
          <span className="fw-bold">${tarjetaSeleccionada.saldo}</span>
        </p>
      </div>
      <h2
        className={
          anchoVentana < 380
            ? "pt-2 ps-4"
            : anchoVentana > 700
            ? "pt-5 mt-5 ps-3"
            : "pt-5 ps-4"
        }>
        Monto sugerido
      </h2>
      <div className={anchoVentana < 380 ? "row py-2 gx-1" : "row py-5 gx-0"}>
        {montosSugeridos.map((monto) => (
          <div className="col-4 d-flex justify-content-center mt-3" key={monto}>
            <button
              type="button"
              onClick={() => handleSugerido(monto)}
              className={styles.ButtonSugerido}>
              ${monto}
            </button>
          </div>
        ))}
      </div>
      <div
        className={
          anchoVentana < 380
            ? "d-flex justify-content-center pt-5"
            : "d-flex justify-content-center pt-5"
        }>
        <MainButton
          name={"Cargar"}
          size={
            (anchoVentana >= 350) & (anchoVentana < 390)
              ? { width: "300px", height: "40px" }
              : "0px"
          }
        />
      </div>
    </form>
  );
};
