import { useDispatch } from "react-redux";
import logo1 from "../../assets/images/LogoNeverland1.png";
import { MainButton } from "../MainButton/MainButton";
import styles from "./Login.module.css";
import facebook from "../../assets/images/facebook.png";
import google from "../../assets/images/google.png";
import apple from "../../assets/images/apple.png";
import { useForm } from "../../hooks/useForm";
import { loginAction } from "../../Redux/actions/loginAction";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../Input/Input";

export const LoginDesktop = () => {
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
        <h4 className="text-center pt-3">Iniciar sesión</h4>
        <form className="pt-2" onSubmit={onSubmit}>
          <Input
            label={"E-mail"}
            type="text"
            name="email"
            value={email}
            onChange={onInputChange}
            heigth={styles.heigthLogs}
          />
          <br />
          <Input
            label={"Contraseña"}
            type="password"
            name="password"
            value={password}
            onChange={onInputChange}
            heigth={styles.heigthLogs}
          />
          <p className={styles.textLogin}>¿Olvidaste tu contraseña?</p>
          <div className="d-flex justify-content-center pt-2">
            <MainButton name={"Ingresar"} />
          </div>
        </form>
        <div className="row px-4 pt-3">
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
