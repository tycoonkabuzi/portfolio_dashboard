import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import UploadProject from "./components/UploadProject";
import Project from "./layouts/Project";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Project />}>
          <Route path="projects" element={<UploadProject />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
