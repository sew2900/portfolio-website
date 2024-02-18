import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
}
function Project2() {
  return (
    <div className="projects-list-item">
      <div className="list-item-tags-container">
        <div className="list-item-tags">
          <div className="tag">
            <p className="small">Java</p>
          </div>
          <div className="tag">
            <p className="small">Angular</p>
          </div>
          <div className="tag">
            <p className="small">Typescript</p>
          </div>
          <div className="tag">
            <p className="small">MySQL</p>
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
        <h3>E-Commerce app</h3>
        <p>
          Java server, Stripe payments, Okta user login/logout, SQL database
          (user information, products list, orders), CRUD operations on shopping
          cart, products sorting and text searching, generated custom SSL
          certificate, Angular frontend
        </p>
        <div className="margin-top-16 full-width align-right">
          <CustomLink href={"/portfolio-website/ProjectDetails2"}>
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
export default Project2;
