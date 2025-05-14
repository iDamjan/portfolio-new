import Navigation from "./components/navigation";
import Home from "./components/home";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./pages/about/page";
import Projects from "./pages/projects/page";
function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
