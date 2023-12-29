import { useEffect, useState } from "react";
import { LoadingLogin } from "../Components/LoadingLogin/LoadingLogin";
import { LoginMovil, LoginDesktop } from "../Components/Login";

import styles from "./pages.module.css";

export const LoginPage = () => {
  const [isLoadingVisible, setIsLoadingVisible] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoadingVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoadingVisible ? (
        <LoadingLogin />
      ) : (
        <>
          <div className="d-block d-md-none position-relative">
            <div className={styles.backgroundImageLogin}></div>
            <LoginMovil />
          </div>
          <div className="d-none d-lg-block">
            <div className={styles.backgroundImageLogin}></div>
            <LoginDesktop />
          </div>
        </>
      )}
    </>
  );
};
