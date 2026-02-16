import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

/* Loader */
import Loader from "./Components/Loader"

/* Lazy loaded pages (IMPORTANT for performance) */
const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Skills = lazy(() => import("./Pages/Skills"));
const Projects = lazy(() => import("./Pages/Projects"));
const Education = lazy(() => import("./Pages/Education"));
const Contact = lazy(() => import("./Pages/Contact"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>

          {/* Homepage loads first (best for SEO + LCP) */}
          <Route path="/" element={<Home />} />

          {/* Lazy routes */}
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
