import { Card } from "./Card";
import agregar from "../../assets/images/tarjetaagregar.png";
import { useSelector } from "react-redux";

export const CardContainer = () => {
  const { tarjetas } = useSelector((state) => state.login.loged);

  console.log(tarjetas);

  return (
    <div className="pt-4">
      <div className="row">
        {tarjetas &&
          tarjetas.map(({ name, lastName, saldo, puntos, color, rowIndex }) => {
            return (
              <div className="col-5 ms-2" key={rowIndex}>
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
        <div className="col-5 ms-4 ps-3 pt-2">
          <img src={agregar} alt="" />
        </div>
      </div>
    </div>
  );
};
