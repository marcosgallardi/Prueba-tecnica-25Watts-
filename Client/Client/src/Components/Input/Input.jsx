import styles from "./Input.module.css";

export const Input = ({heigth, label, type, name, value, onChange }) => {
  return (
    <>
      <label className="pb-2">{label}</label> 
      <br />
      <input
        type={type}
        placeholder="Escribir aqui..."
        name={name}
        value={value}
        onChange={onChange}
        className={`${styles.input} ${heigth}`}
      />
    </>
  );
};
