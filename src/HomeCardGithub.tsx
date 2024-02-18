import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

function HomeCardGithub() {
  return (
    <div className="homecard-container">
      <div>
        <h3 className="">Github</h3>
        <p>Link to all my public repositories from Github</p>
      </div>
      <div className="full-width align-right">
        <a href="https://github.com/sew2900" target="_blank">
          <p className="btn btn-second-accent margin-right-20">
            <FontAwesomeIcon icon={faArrowRightLong} />
          </p>
        </a>
      </div>
    </div>
  );
}

export default HomeCardGithub;
