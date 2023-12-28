import { SucursalesPage, LoginPage, RegisterPage, SaldoPage } from "../pages";

export const routes = [
  {
    to: "/",
    path: "/login/*",
    Component: LoginPage,
    name: "login",
  },
  {
    to: "/registro",
    path: "/registro/*",
    Component: RegisterPage,
    name: "Registro",
  },
  {
    to: "/saldo",
    path: "/saldo/*",
    Component: SaldoPage,
    name: "Cargar saldo",
  },
  {
    to: "/sucursales",
    path: "/sucursales/*",
    Component: SucursalesPage,
    name: "Sucursales",
  },
];
