import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import ProjectDetails1 from "./components/ProjectDetails1";
import ProjectDetails2 from "./components/ProjectDetails2";
import ProjectDetails3 from "./components/ProjectDetails3";
import Qualifications from "./components/Qualifications";
import More from "./components/More";
import Footer from "./components/Footer";

function App() {
  let SelectedComponent: React.ComponentType = Home;

  switch (window.location.pathname) {
    case "/portfolio-website/Home":
      SelectedComponent = Home;
      break;
    case "/portfolio-website/Projects":
      SelectedComponent = Projects;
      break;
    case "/portfolio-website/ProjectDetails1":
      SelectedComponent = ProjectDetails1;
      break;
    case "/portfolio-website/ProjectDetails2":
      SelectedComponent = ProjectDetails2;
      break;
    case "/portfolio-website/ProjectDetails3":
      SelectedComponent = ProjectDetails3;
      break;
    case "/portfolio-website/Qualifications":
      SelectedComponent = Qualifications;
      break;
    case "/portfolio-website/More":
      SelectedComponent = More;
      break;
  }
  return (
    <>
      <div className="app-flex">
        <Navbar></Navbar>
        <SelectedComponent></SelectedComponent>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
