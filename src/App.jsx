import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
// only this add ramadan fastival
import { RamadanOverlay } from 'ramadan-overlay/react';

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
const Privacy = lazy(() => import("./Pages/Privacy"));
const Terms = lazy(() => import("./Pages/Terms"));

const App = () => {
  return (
    <BrowserRouter>
      <RamadanOverlay
        variant="lanterns"
        position="both"
        opacity={0.95}

        // Replace generic confetti with themed particles
        confetti="crescent-stars"

        locale="en"
        region="premium"

        // Rich gradient-inspired palette (gold + emerald + night blue)
        colors={[
          "#d4af37", // gold
          "#f6e27a", // soft gold
          "#0b3d2e", // deep green
          "#14532d", // emerald
          "#020617", // night sky
          "#1e3a8a", // royal blue
          "#7c3aed", // subtle purple
        ]}

        glowColor="rgba(212,175,55,0.7)"   // soft golden glow
        ceilingColor="linear-gradient(to bottom, #020617, #0b3d2e)"
        ropeColor="#b8962e"

        lanternStyle={2}   // more detailed lantern design

        // New advanced props (custom logic you should add)
        animation="sway"
        glowIntensity={0.8}
        particleDensity={60}
        blurBackground={true}
        flicker={true}
      />

      <Routes>




        {/* Homepage loads instantly (BEST for LCP + SEO) */}
        <Route path="/" element={<Home />} />

        {/* Lazy routes */}
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

        {/* NEW LEGAL PAGES */}
        <Route
          path="/privacy"
          element={
            <Suspense fallback={<Loader />}>
              <Privacy />
            </Suspense>
          }
        />

        <Route
          path="/terms"
          element={
            <Suspense fallback={<Loader />}>
              <Terms />
            </Suspense>
          }
        />

      </Routes>
    </BrowserRouter>
  );
};

export default App;