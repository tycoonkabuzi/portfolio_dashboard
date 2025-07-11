import { Route, Routes } from "react-router-dom";
import "./App.css";

import UploadProject from "./components/UploadProject";
import Project from "./layouts/Project";
import { useState } from "react";

function App() {
  const [active, setActive] = useState({
    home: false,
    project: true,
    skills: false,
    contact: false,
  });
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Project active={active} setActive={setActive} />}
        >
          <Route
            path="projects"
            element={<UploadProject active={active} setActive={setActive} />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
