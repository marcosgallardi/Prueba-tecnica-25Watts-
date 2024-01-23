import { useEffect, useState } from "react";
import { LoadingLogin } from "../Components/LoadingLogin/LoadingLogin";
import { LoginMovil } from "../Components/Login";

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
          <div className={styles.backgroundImageLogin}></div>
          <LoginMovil />
        </>
      )}
    </>
  );
};
