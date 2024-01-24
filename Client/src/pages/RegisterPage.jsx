import React from "react";
import { RegisterMovil } from "../Components/Register/RegisterMovil";
import { RegisterDesktop } from "../Components/Register/RegisterDesktop";
import styles from "./pages.module.css";
export const RegisterPage = () => {
  return (
    <>
      <>
        <div className={styles.backgroundImageLogin}></div>
        <RegisterMovil />
      </>
    </>
  );
};
