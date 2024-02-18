import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
function Projects() {
  return (
    <>
      <div className="content-container padding-16 display-block">
        <div className="projects-list-container">
          <h2 className="title accent-color">Projects</h2>
          <hr className="margin-top-16" />
          <Project1></Project1>
          <hr />
          <Project2></Project2>
          <hr />
          <Project3></Project3>
        </div>
      </div>
    </>
  );
}
export default Projects;
