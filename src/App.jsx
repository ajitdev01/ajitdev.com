import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

/* Loader */
import Loader from "./Components/Loader";

/* IMPORTANT: Homepage should NOT be lazy */
import Home from "./Pages/Home";

/* Lazy load secondary pages only */
const About = lazy(() => import("./Pages/About"));
const Skills = lazy(() => import("./Pages/Skills"));
const Projects = lazy(() => import("./Pages/Projects"));
const Education = lazy(() => import("./Pages/Education"));
const Contact = lazy(() => import("./Pages/Contact"));

const App = () => {
  return (
    <BrowserRouter>

      <Routes>

        {/* Homepage loads instantly (BEST for LCP + SEO) */}
        <Route path="/" element={<Home />} />

        {/* Lazy routes wrapped individually (elite pattern) */}
        <Route
          path="/about"
          element={
            <Suspense fallback={<Loader />}>
              <About />
            </Suspense>
          }
        />

        <Route
          path="/skills"
          element={
            <Suspense fallback={<Loader />}>
              <Skills />
            </Suspense>
          }
        />

        <Route
          path="/projects"
          element={
            <Suspense fallback={<Loader />}>
              <Projects />
            </Suspense>
          }
        />

        <Route
          path="/education"
          element={
            <Suspense fallback={<Loader />}>
              <Education />
            </Suspense>
          }
        />

        <Route
          path="/contact"
          element={
            <Suspense fallback={<Loader />}>
              <Contact />
            </Suspense>
          }
        />

      </Routes>

    </BrowserRouter>
  );
};

export default App;
