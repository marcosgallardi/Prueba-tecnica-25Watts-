import { useState } from "react";
import saldo from "../../assets/Icons/saldo.png";
import styles from "./Pagar.module.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export const Pagar = () => {
  const montosSugeridos = [500, 1000, 1500, 2000, 2500, 3000];

  const { tarjetas } = useSelector((state) => state.login.loged);
  let id = useParams();

  const tarjetaSeleccionada = tarjetas.find((tarjeta) => {
    return tarjeta.id_tarjeta == Object.values(id)[0];
  });

  const [salgoACargar, setSalgoACargar] = useState(0);

  const handleChangePagar = (e) => {
    const { value } = e.target;
    setSalgoACargar(value);
  };

  const handleSugerido = (monto) => {
    setSalgoACargar(monto);
  };

  return (
    <div>
      <span className="d-flex align-items-center">
        <p className="fw-bold display-2 ps-3 pt-3">$</p>
        <input
          type="number"
          className={styles.input}
          value={salgoACargar}
          onChange={handleChangePagar}
        />
      </span>
      <hr className="mx-3" />
      <div className="d-flex justify-content-start ps-3 align-items-center">
        <img src={saldo} alt="" className="" />
        <p className="ps-2 pt-3">
          Saldo disponible en la tarjeta{" "}
          <span className="fw-bold">${tarjetaSeleccionada.saldo}</span>
        </p>
      </div>
      <h2 className="pt-5 ps-4">Monto sugerido</h2>
      <div className="row py-5 gx-1">
        {montosSugeridos.map((monto) => (
          <div className="col-4 d-flex justify-content-center mt-3" key={monto}>
            <button
              onClick={() => handleSugerido(monto)}
              className={styles.ButtonSugerido}>
              ${monto}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
