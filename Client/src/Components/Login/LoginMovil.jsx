import { useDispatch } from "react-redux";
import logo1 from "../../assets/images/LogoNeverland1.png";
import { MainButton } from "../MainButton/MainButton";
import { useForm } from "../../hooks/useForm";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import facebook from "../../assets/images/facebook.png";
import google from "../../assets/images/google.png";
import apple from "../../assets/images/apple.png";
import { loginAction } from "../../Redux/actions/loginAction";
import { Input } from "../Input/Input";
import { useEffect, useState } from "react";

export const LoginMovil = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { email, password, onInputChange, formState, onResetForm, validation } =
    useForm({
      email: "",
      password: "",
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

  const onSubmit = async (e) => {
    try {
      e.preventDefault();

      if (formState.email === "" || formState.password === "") {
        alert("Todos los campos son obligatorios");
        return;
      }
      console.log(validation);
      if (
        validation.email === "Dirección de email incorrecta" ||
        validation.password ===
          "La contraseña no cumple con al menos una mayuscula, al menos una minuscula,  al menos una un numero y un simbolo"
      ) {
        if (validation.email) {
          alert(validation.email);
        }
        if (validation.password) {
          alert(validation.password);
        }
        return;
      }
      console.log(validation);

      const login = await dispatch(
        loginAction(formState.email, formState.password)
      );

      if (login) {
        navigate("/saldo");
        onResetForm();
      } else {
        alert("Usuario o contraseña incorrectas");
        onResetForm();
      }
    } catch (error) {
      alert("Usuario o contraseña incorrectas");
      onResetForm();
      throw error.message;
    }
  };
  const alturaEstilo =
    (anchoVentana >= 350) & (anchoVentana < 390) ? "35px" : "45px";
  return (
    <>
      <div
        className={
          anchoVentana > 700
            ? "position-absolute top-50 start-50 translate-middle pt-5"
            : "position-absolute top-25 start-50 translate-middle-x pt-4"
        }>
        <div className="d-flex justify-content-center">
          <img
            src={logo1}
            alt=""
            className={
              (anchoVentana >= 350) & (anchoVentana < 390) ? "w-25" : "w-50"
            }
          />
        </div>
        <h3
          className={
            (anchoVentana >= 350) & (anchoVentana < 500)
              ? "text-center pt-2 fs-5"
              : "text-center pt-4"
          }>
          Iniciar sesión
        </h3>
        <form
          className={
            (anchoVentana >= 350) & (anchoVentana < 500) ? "pt-1" : "pt-5"
          }
          onSubmit={onSubmit}>
          <Input
            label={"E-mail"}
            type="text"
            name="email"
            value={email}
            onChange={onInputChange}
            heigth={alturaEstilo}
          />

          <Input
            label={"Contraseña"}
            type="password"
            name="password"
            value={password}
            onChange={onInputChange}
            heigth={alturaEstilo}
          />
          <p className={styles.textLogin}>¿Olvidaste tu contraseña?</p>
          <div
            className={
              (anchoVentana >= 350) & (anchoVentana < 500)
                ? "d-flex justify-content-center pt-2"
                : "d-flex justify-content-center pt-4"
            }>
            <MainButton
              name={"Ingresar"}
              size={
                (anchoVentana >= 350) & (anchoVentana < 390)
                  ? { width: "300px", height: "40px" }
                  : "0px"
              }
            />
          </div>
        </form>

        <div
          className={
            (anchoVentana >= 350) & (anchoVentana < 500)
              ? "row pt-2"
              : "row pt-4"
          }>
          <div className="col-4">
            <hr className={styles.hr} />
          </div>
          <p className="col-4 text-center">o ingresa con</p>
          <div className="col-4">
            <hr />
          </div>
        </div>

        <div className="row px-4">
          <div className="col-4">
            <img src={google} alt="" />
          </div>
          <div className="col-4">
            {" "}
            <img src={facebook} alt="" />
          </div>
          <div className="col-4">
            {" "}
            <img src={apple} alt="" />
          </div>
        </div>

        <p
          className={
            (anchoVentana >= 350) & (anchoVentana < 500)
              ? "text-center pt-1 fs-6"
              : `text-center pt-3 fs-5`
          }>
          ¿No estás registrado?{" "}
          <Link className={styles.crearCuenta} to={"/registro"}>
            Crear una cuenta{" "}
          </Link>
        </p>
      </div>
    </>
  );
};
