import axios from "axios";
import logo1 from "../../assets/images/LogoNeverland1.png";
import { useForm } from "../../hooks/useForm";
import { Input } from "../Input/Input";
import { MainButton } from "../MainButton/MainButton";
import { server } from "../../helpers/endpoint";
import styles from "./Register.module.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
    validation,
  } = useForm({
    name: "",
    lastName: "",
    email: "",
    password: "",
    birthDate: Date,
    phoneNumber: "",
  });

  const navigate = useNavigate();

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

  const onSubmit = async (e) => {
    e.preventDefault();

    if (
      formState.name === "" ||
      formState.lastName === "" ||
      formState.email === "" ||
      formState.password === "" ||
      formState.phoneNumber === ""
    ) {
      alert("Todos los campos son obligatorios");
      return;
    }

    if (
      validation.email === "Dirección de email incorrecta" ||
      validation.password ===
        "La contraseña no cumple con al menos una mayuscula, al menos una minuscula,  al menos un numero y un simbolo" ||
      validation.name === "Nombre invalido" ||
      validation.lastName === "Apellido invalido" ||
      validation.phoneNumber === "Numero invalido"
    ) {
      if (validation.email) {
        alert(validation.email);
      }
      if (validation.password) {
        alert(validation.password);
      }
      if (validation.name) {
        alert("El nombre no puede tener menos de 3 caracteres y mas de 20");
      }
      if (validation.lastName) {
        alert("El apellido no puede tener menos de 3 caracteres y mas de 20");
      }
      if (validation.phoneNumber) {
        alert(validation.phoneNumber);
      }
      return;
    }

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
        navigate("/saldo");
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
      {(anchoVentana >= 350) & (anchoVentana < 450) ? (
        <Link to={"/login"}>
          <button className={styles.backButton}>Volver</button>
        </Link>
      ) : (
        <Link to={"/login"}>
          <button className={styles.backButton1}>Volver</button>
        </Link>
      )}
      <div
        className={
          anchoVentana > 700
            ? "position-absolute top-50 start-50 translate-middle pt-4"
            : "position-absolute top-25 start-50 translate-middle-x pt-4"
        }>
        <div className="d-flex justify-content-center">
          <img
            src={logo1}
            alt=""
            className={
              (anchoVentana >= 350) & (anchoVentana < 390) ? "w-25" : ""
            }
          />
        </div>
        <h3
          className={
            (anchoVentana >= 350) & (anchoVentana < 390)
              ? "text-center pt-3 fs-5"
              : "text-center pt-4"
          }>
          Registrate
        </h3>
        {anchoVentana < 1000 ? (
          <form className="pt-1" onSubmit={onSubmit}>
            <Input
              label={"Nombre"}
              type="text"
              name="name"
              value={name}
              onChange={onInputChange}
              heigth={styles.heigthReg}
            />
            {validation.name && (
              <p className="text-end text-danger">{validation.name}</p>
            )}
            <Input
              label={"Apellido"}
              type="text"
              name="lastName"
              value={lastName}
              onChange={onInputChange}
              heigth={styles.heigthReg}
            />
            {validation.lastName && (
              <p className="text-end  text-danger">{validation.lastName}</p>
            )}
            <Input
              label={"E-mail"}
              type="text"
              name="email"
              value={email}
              onChange={onInputChange}
              heigth={styles.heigthReg}
            />
            {validation.email && (
              <p className="text-end  text-danger">{validation.email}</p>
            )}
            <Input
              label={"Contraseña"}
              type="password"
              name="password"
              value={password}
              onChange={onInputChange}
              heigth={styles.heigthReg}
            />
            {validation.password && (
              <p className="text-end  text-danger">Formato incorrecto. </p>
            )}
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
            {validation.phoneNumber && (
              <p className="text-end  text-danger">{validation.phoneNumber}</p>
            )}

            <div className="d-flex justify-content-center py-4">
              <MainButton name={"Crear usuario"} />
            </div>
          </form>
        ) : (
          <form className="pt-3 text-center" onSubmit={onSubmit}>
            <div className="row">
              <div className="col-6 ">
                <Input
                  label={"Nombre"}
                  type="text"
                  name="name"
                  value={name}
                  onChange={onInputChange}
                  heigth={styles.heigthReg}
                />
                {validation.name && (
                  <p className="text-end pe-5 text-danger">{validation.name}</p>
                )}
              </div>
              <div className="col-6">
                <Input
                  label={"Apellido"}
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={onInputChange}
                  heigth={styles.heigthReg}
                />
                {validation.lastName && (
                  <p className="text-end pe-5 text-danger">
                    {validation.lastName}
                  </p>
                )}
              </div>
              <div className="col-6">
                <Input
                  label={"E-mail"}
                  type="text"
                  name="email"
                  value={email}
                  onChange={onInputChange}
                  heigth={styles.heigthReg}
                />
                {validation.email && (
                  <p className="text-end pe-5 text-danger">
                    {validation.email}
                  </p>
                )}
              </div>
              <div className="col-6">
                <Input
                  label={"Contraseña"}
                  type="password"
                  name="password"
                  value={password}
                  onChange={onInputChange}
                  heigth={styles.heigthReg}
                />
                {validation.password && (
                  <p className="text-end pe-5 text-danger">
                    Formato incorrecto.
                  </p>
                )}
              </div>
              <div className="col-6">
                <Input
                  label={"Cumpleaños"}
                  type="date"
                  name="birthDate"
                  value={birthDate}
                  onChange={onInputChange}
                  heigth={styles.heigthReg}
                />
              </div>
              <div className="col-6">
                <Input
                  label={"Telefono"}
                  type="text"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={onInputChange}
                  heigth={styles.heigthReg}
                />
                {validation.phoneNumber && (
                  <p className="text-end pe-5 text-danger">
                    {validation.phoneNumber}
                  </p>
                )}
              </div>
            </div>

            <div className="d-flex justify-content-center py-4 mt-3">
              <MainButton name={"Crear usuario"} />
            </div>
          </form>
        )}
      </div>
    </>
  );
};
