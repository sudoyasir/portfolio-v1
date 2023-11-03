import React, { useState, useEffect } from "react";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import Skills from "./components/Skills/Skills";
import { HashLoader } from "react-spinners";
import ScrollToTopButton from "./components/ScrollTopBtn/ScrollTopBtn";
import { ToastContainer } from "react-toastify";

function App() {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpinner(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showSpinner ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <HashLoader color="#00ff76" />
        </div>
      ) : (
        <div>
          <ProgressBar />
          <ToastContainer />
          <Header />
          <Hero />
          <Skills />
          <ProjectCard />
          <Footer />
          <ScrollToTopButton />
        </div>
      )}
    </div>
  );
}

export default App;
