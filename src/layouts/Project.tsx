import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const Project = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};
export default Project;
