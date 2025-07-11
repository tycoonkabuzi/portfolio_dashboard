import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const Project = ({ active, setActive }) => {
  return (
    <>
      <Nav active={active} />
      <Outlet />
    </>
  );
};
export default Project;
