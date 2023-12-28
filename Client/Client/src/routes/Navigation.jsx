import { Routes, Route, Navigate } from "react-router-dom";
import { routes } from "../routes/routes";

export const Navigation = () => {
  return (
    <Routes>
      {routes.map(({ path, Component }) => {
        return <Route key={path} path={path} element={<Component />} />;
      })}

      <Route path="/*" element={<Navigate to={routes[0].path} />} />
    </Routes>
  );
};
