import logo1 from "../../assets/images/LogoNeverland1.png";
import styles from "./Login.module.css";

//componente con estilos de bootstrap

export const LoginMovil = () => {
  return (
    <>
      <div className="position-absolute top-25 start-50 translate-middle-x pt-4">
        <div className="d-flex justify-content-center">
          <img src={logo1} alt="" />
        </div>
        <h3 className="text-center pt-4">Iniciar sesión</h3>
        <div className="pt-1">
          <label className="pb-2">E-mail</label>
          <input
            type="text"
            placeholder="Escribir aqui..."
            className={styles.inputLogin}
          />
          <label className="pb-2">Contraseña</label>
          <input
            type="text"
            placeholder="Escribir aqui..."
            className={styles.inputLogin}
          />
          <p className={styles.textLogin}>¿Olvidaste tu contraseña?</p>
        </div>
      </div>
    </>
  );
};
