import { useState } from "react";
import saldo from "../../assets/Icons/saldo.png";
import styles from "./Pagar.module.css";

export const Pagar = () => {
  const montosSugeridos = [500, 1000, 1500, 2000, 2500, 3000];

  const [salgoACargar, setSalgoACargar] = useState()

  const handleChangePagar = (monto) => {};

  return (
    <>
      <input type="number" className={styles.input} />
      <hr className="mx-3" />
      <div className="d-flex justify-content-start ps-3 align-items-center">
        <img src={saldo} alt="" className="" />
        <p className="ps-2 pt-3">
          Saldo disponible en la tarjeta{" "}
          <span className="fw-bold">${"2000"}</span>
        </p>
      </div>
      <h2 className="pt-5 ps-4">Monto sugerido</h2>
      <div className="row py-5">
        {montosSugeridos.map((monto) => (
          <div className="col-4 d-flex justify-content-center pt-3" key={monto}>
            <button
              onClick={() => handleChangePagar(monto)}
              className={styles.ButtonSugerido}>
              ${monto}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
