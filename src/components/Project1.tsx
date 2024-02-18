import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
}

function Project1() {
  return (
    <div className="projects-list-item">
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
      <div className="projects-list-item-content">
        <h3>Boat reservation service</h3>
        <p>
          React frontend, reservation information in SQL database, Java server
          (handling reservation state, active reservations and e-mail
          communication by gmail), Google Analitycs, Google search console, DNS
          configuration, setting up hosting (server, static site, database)
        </p>
        <div className="margin-top-16 full-width align-right">
          <CustomLink href={"/ProjectDetails1"}>
            <p className="btn btn-main-accent">details</p>
          </CustomLink>
        </div>
      </div>
    </div>
  );
}
function CustomLink({ href, children }: CustomLinkProps) {
  return <a href={href}>{children}</a>;
}
export default Project1;
