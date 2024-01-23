export const validations = (values) => {
  const errors = {};
  if (values) {
    if (values.email) {
      errors.email = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
        values.email
      )
        ? ''
        : "Dirección de email incorrecta";
    }
    if (values.password) {
      errors.password =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};:'"<>,./?]).{8,50}$/i.test(
          values.password
        )
          ? ''
          : "La contraseña no cumple con al menos una mayuscula, al menos una minuscula,  al menos una un numero y un simbolo";
    }
  }

  return errors;
};
