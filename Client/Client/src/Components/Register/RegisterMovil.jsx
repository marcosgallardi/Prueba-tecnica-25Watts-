import axios from "axios";
import logo1 from "../../assets/images/LogoNeverland1.png";
import { useForm } from "../../hooks/useForm";
import { Input } from "../Input/Input";
import { MainButton } from "../MainButton/MainButton";
import { server } from "../../helpers/endpoint";
import styles from "./Register.module.css";

export const RegisterMovil = () => {
  const {
    onInputChange,
    formState,
    onResetForm,
    name,
    lastName,
    email,
    password,
    birthDate,
    phoneNumber,
  } = useForm({
    name: "",
    lastName: "",
    email: "",
    password: "",
    birthDate: Date,
    phoneNumber: "",
  });


  //name, lastName, email, password, birthDate, phoneNumber
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${server}users/create`, {
        name,
        lastName,
        email,
        password,
        birthDate,
        phoneNumber,
      });

      if (data) {
        alert("Usuario creado correctamente");
        onResetForm();
      } else {
        alert("Error al crear el usuario");
        onResetForm();
      }
    } catch (error) {
      alert("Error al crear el usuario");
      onResetForm();
      throw error.message;
    }
  };
  return (
    <>
      <div className="position-absolute top-25 start-50 translate-middle-x pt-4">
        <div className="d-flex justify-content-center">
          <img src={logo1} alt="" />
        </div>
        <h3 className="text-center pt-4">Registrate</h3>
        <form className="pt-1" onSubmit={onSubmit}>
          <Input
            label={"Nombre"}
            type="text"
            name="name"
            value={name}
            onChange={onInputChange}
            heigth={styles.heigthReg}
          />
          <Input
            label={"Apellido"}
            type="text"
            name="lastName"
            value={lastName}
            onChange={onInputChange}
            heigth={styles.heigthReg}
          />
          <Input
            label={"E-mail"}
            type="text"
            name="email"
            value={email}
            onChange={onInputChange}
            heigth={styles.heigthReg}
          />
          <Input
            label={"Contraseña"}
            type="password"
            name="password"
            value={password}
            onChange={onInputChange}
            heigth={styles.heigthReg}
          />
          <Input
            label={"Cumpleaños"}
            type="date"
            name="birthDate"
            value={birthDate}
            onChange={onInputChange}
            heigth={styles.heigthReg}
          />
          <Input
            label={"Telefono"}
            type="text"
            name="phoneNumber"
            value={phoneNumber}
            onChange={onInputChange}
            heigth={styles.heigthReg}
          />

          <div className="d-flex justify-content-center py-4">
            <MainButton name={"Crear usuario"} />
          </div>
        </form>
      </div>
    </>
  );
};
