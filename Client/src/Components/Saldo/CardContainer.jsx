import { Card } from "./Card";
import agregar from "../../assets/images/tarjetaagregar.png";

export const CardContainer = () => {
  let mockCard = [
    {
      nombre: "Lucia",
      apellido: "",
      saldo: 200,
      tickets: 2000,
      color: "rojo",
    },
    {
      nombre: "Maria Laura",
      apellido: "",
      saldo: 200,
      tickets: 2000,
      color: "amarillo",
    },
    {
      nombre: "Wilfredo",
      apellido: "Del Valle",
      saldo: 200,
      tickets: 2000,
      color: "verde",
    },
    {
      nombre: "mateo",
      apellido: "",
      saldo: 200,
      tickets: 2000,
      color: "azul",
    },
  ];

  return (
    <div className="pt-4">
      <div className="row">
        {mockCard.map(({ nombre, apellido, saldo, tickets, color }) => {
          return (
            <div className="col-5 ms-2" key={nombre}>
              <Card
                key={nombre}
                nombre={nombre}
                apellido={apellido}
                saldo={saldo}
                tickets={tickets}
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
