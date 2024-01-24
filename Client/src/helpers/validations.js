export const validations = ({
  email,
  password,
  name,
  lastName,
  birthDate,
  phoneNumber,
}) => {
  const errors = {};

  if (email) {
    errors.email = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
      ? ""
      : "Dirección de email incorrecta";
  }
  if (password) {
    errors.password =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};:'"<>,./?]).{8,50}$/i.test(
        password
      )
        ? ""
        : "La contraseña no cumple con al menos una mayuscula, al menos una minuscula,  al menos un numero y un simbolo";
  }

  if (name) {
    errors.name = /^[a-zA-Z]{3,20}$/i.test(name) ? "" : "Nombre invalido";
  }

  if (lastName) {
    errors.lastName = /^[a-zA-Z]{3,20}$/i.test(lastName)
      ? ""
      : "Apellido invalido";
  }

  if (birthDate) {
    errors.birthDate =
      /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/i.test(
        birthDate
      )
        ? ""
        : "Fecha invalida";
  }

  if (phoneNumber) {
    errors.phoneNumber = /^[0-9]{10}$/i.test(phoneNumber)
      ? ""
      : "Numero invalido";
  }

  return errors;
};
