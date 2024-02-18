import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
}
function ProjectDetails1() {
  return (
    <div className="content-container padding-16 display-block">
      <div className="list-item-tags-container">
        <div className="list-item-tags">
          <div className="tag">
            <p className="small">Java</p>
          </div>
          <div className="tag">
            <p className="small">React</p>
          </div>
          <div className="tag">
            <p className="small">Typescript</p>
          </div>
          <div className="tag">
            <p className="small">Postgres</p>
          </div>
        </div>

        <div>
          <div className="tag">
            <p className="small accent-color">
              <FontAwesomeIcon icon={faCrown} />
            </p>
          </div>
        </div>
      </div>
      <h3 className="accent-color">Boat reservation service</h3>

      <div className="margin-top-16 full-width align-right">
        <CustomLink href={"/Projects"}>
          <p className="btn btn-main-accent">
            <FontAwesomeIcon icon={faArrowLeftLong} />
          </p>
        </CustomLink>
      </div>

      <hr className="hr-space"></hr>
      <div className="details-container">
        <div className="details-item">
          <p className="bold">Description</p>
          <p>
            I used React for the frontend of the application. A Java server is
            utilized for managing reservation states, sending automated emails
            to customers and website owners, and controlling reservations. The
            database is designed to store the most important information about
            reservations. The entire service is deployed and operational online,
            connected to Google Analytics for data tracking and analysis. Online
            visibility is ensured through Google Search Engine optimization.
            Additionally, DNS configuration is set up for domain routing.
          </p>
          <br />
          <p className="bold">Technologies</p>
          <ul>
            <li>Server</li>
            <ul>
              <li>Java</li>
              <li>Spring Boot</li>
            </ul>
            <li>Database</li>
            <ul>
              <li>Postgres</li>
            </ul>
            <li>Frontend</li>
            <ul>
              <li>React</li>
              <li>Typescript</li>
              <li>CSS</li>
              <li>HTML</li>
            </ul>
          </ul>
          <br />
          <p className="bold">Code availability</p>
          <p>
            I cannot share the code for this project at the moment because it is
            in commercial use. However, I do have a video demonstration
            showcasing how it operates.
          </p>
          <div className="margin-top-16 full-width align-right">
            <p className="btn btn-main-accent btn-off">repository link</p>
          </div>

          <br />
          <p className="bold">Functionalities:</p>
          <ul>
            <li>Innovative way for booking - visual boat representation</li>
            <li>List available boats for reservation.</li>
            <li>Allow users to select dates for reservations.</li>
            <li>Implemented and developed reservation system</li>
            <li>Live reservation availability</li>
            <li>
              Send automated confirmation emails to customers after
              reservations.
            </li>
            <li>
              Manage reservation states (e.g., pending, confirmed, canceled).
            </li>
            <li>
              Track reservations and customer interactions for analytics
              purposes.
            </li>
          </ul>

          <br />
          <p className="bold">More details:</p>
          <ul>
            <li>
              Send automated emails to site owner with reservation details
            </li>
            <li>
              Display available boats with details (e.g., capacity, amenities).
            </li>
            <li>
              Integration with Google Analytics for website traffic analysis.
            </li>
            <li>Improved online visibility.</li>
            <li>Set up DNS configuration for domain routing.</li>
          </ul>
        </div>
        <div className="details-item">
          <p className="bold">Preview</p>
          <div className="video-wrapper display-grid">
            <iframe
              src="https://www.youtube.com/embed/X2_WeUbBFiY?si=uVF6Q7afPDnanY66"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="video justify-self-center"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
function CustomLink({ href, children }: CustomLinkProps) {
  return <a href={href}>{children}</a>;
}
export default ProjectDetails1;
