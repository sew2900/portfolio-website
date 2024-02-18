import WorkExp1 from "./WorkExp1";
import WorkExp2 from "./WorkExp2";
import Certification1 from "./Certification1";

function Qualifications() {
  return (
    <>
      <div className="content-container padding-16 display-block">
        <div className="qualifications-container">
          <h2 className="title accent-color">Work experience</h2>
          <div className="qualifications-item">
            <WorkExp1></WorkExp1>
            <WorkExp2></WorkExp2>
          </div>
          <hr className="margin-bottom-16" />
          <h2 className="title accent-color">Certifications</h2>
          <div className="qualifications-item">
            <Certification1></Certification1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Qualifications;
