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

//componente con estilos de bootstrap

export const LoginMovil = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { email, password, onInputChange, formState, onResetForm } = useForm({
    email: "",
    password: "",
  });

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
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

  return (
    <>
      <div className="position-absolute top-25 start-50 translate-middle-x pt-4">
        <div className="d-flex justify-content-center">
          <img src={logo1} alt="" />
        </div>
        <h3 className="text-center pt-4">Iniciar sesión</h3>
        <form className="pt-1" onSubmit={onSubmit}>
          <Input
            label={"E-mail"}
            type="text"
            name="email"
            value={email}
            onChange={onInputChange}
          />

          <Input
            label={"Contraseña"}
            type="password"
            name="password"
            value={password}
            onChange={onInputChange}
          />
          <p className={styles.textLogin}>¿Olvidaste tu contraseña?</p>
          <div className="d-flex justify-content-center pt-4">
            <MainButton name={"Ingresar"} />
          </div>
        </form>

        <div className="row pt-4">
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

        <p className="text-center pt-3 fs-5">
          ¿No estás registrado?{" "}
          <Link className={styles.crearCuenta} to={"/registro"}>
            Crear una cuenta{" "}
          </Link>
        </p>
      </div>
    </>
  );
};
