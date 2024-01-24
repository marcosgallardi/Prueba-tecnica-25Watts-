import React from "react";
import { RegisterMovil } from "../Components/Register/RegisterMovil";

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
