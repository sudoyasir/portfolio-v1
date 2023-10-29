import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Skills />
      <ProjectCard />
      <Footer />
    </div>
  );
}

export default App;
