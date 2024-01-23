import React from "react";
import { RegisterMovil } from "../Components/Register/RegisterMovil";
import { RegisterDesktop } from "../Components/Register/RegisterDesktop";
import styles from "./pages.module.css"
export const RegisterPage = () => {
  return (
    <>
      <>
        <div className="d-block d-md-none position-relative">
          <div className={styles.backgroundImageLogin}></div>
          <RegisterMovil />
        </div>
        <div className="d-none d-lg-block">
          <div className={styles.backgroundImageLogin}></div>
          <RegisterDesktop />
        </div>
      </>
    </>
  );
};
