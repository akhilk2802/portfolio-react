import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeContext";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Work from "./components/Work";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/project" element={<Projects />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
