import "./App.css";
import * as style from "./AppStyle";
import { MainPage } from "./components/MainPage";
import { MyWork } from "./components/MyWork";
import { AboutMe } from "./components/AboutMe";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <style.App>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/mywork" element={<MyWork />} />
        </Routes>
      </style.App>
    </HashRouter>
  );
}

export default App;
