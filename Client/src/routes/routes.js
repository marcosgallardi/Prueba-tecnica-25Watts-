
import { SucursalesPage, LoginPage, RegisterPage, SaldoPage,SaldoDetailPage,PagarPage } from "../pages";

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
  {
    to: "/saldoDetail",
    path: "/saldoDetail/*",
    Component: SaldoDetailPage,
    name: "saldoDetail",
  },
  {
    to: "/PagarPage",
    path: "/PagarPage/*",
    Component: PagarPage,
    name: "PagarPage",
  }
];
