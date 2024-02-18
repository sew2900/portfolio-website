import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Projects from "./Projects";
import ProjectDetails1 from "./ProjectDetails1";
import ProjectDetails2 from "./ProjectDetails2";
import ProjectDetails3 from "./ProjectDetails3";
import Qualifications from "./Qualifications";
import More from "./More";
import Footer from "./Footer";

function App() {
  let SelectedComponent: React.ComponentType = Home;

  switch (window.location.pathname) {
    case "/portfolio-website/":
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
