import { useEffect, useState } from "react";
import { LoadingLogin } from "../Components/LoadingLogin/LoadingLogin";
import { LoginMovil } from "../Components/Login/LoginMovil";
import { LoginDesktop } from "../Components/Login/LoginDesktop";
import styles from "./pages.module.css";

export const LoginPage = () => {
  const [isLoadingVisible, setIsLoadingVisible] = useState(true);
  useEffect(() => {
    // Esto ocultará el componente LoadingLogin después de 2 segundos
    const timer = setTimeout(() => {
      setIsLoadingVisible(false);
    }, 2000);

    // Limpia el temporizador cuando el componente se desmonta o actualiza
    return () => clearTimeout(timer);
  }, []); // Se ejecuta solo una vez al montar el componente

  return (
    <>
      {isLoadingVisible ? (
        <LoadingLogin />
      ) : (
        <>
          <div className="d-block d-md-none position-relative">
            <div className={styles.backgroundImageLogin}>
            </div>
              <LoginMovil />
          </div>
          <div className="d-none d-lg-block">
            <LoginDesktop />
          </div>
        </>
      )}
    </>
  );
};
