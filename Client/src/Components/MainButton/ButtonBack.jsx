import { Link } from "react-router-dom";

export const ButtonBack = ({ path }) => {
  return (
    <>
      <Link
        to={path}
        className="ps-2 pb-2 text-decoration-none text-dark fw-bold">
        {" "}
        X
      </Link>
    </>
  );
};
