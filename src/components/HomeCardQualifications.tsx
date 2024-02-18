import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
}

function HomeCardQualifications() {
  return (
    <div className="homecard-container">
      <div>
        <h3 className="">Qualifications</h3>
        <p>Check my commercial experience, certificates, courses list.</p>
      </div>
      <div className="full-width align-right">
        <CustomLink href={"/portfolio-website/Qualifications"}>
          <p className="btn btn-second-accent margin-right-20">
            <FontAwesomeIcon icon={faArrowRightLong} />
          </p>
        </CustomLink>
      </div>
    </div>
  );
}

function CustomLink({ href, children }: CustomLinkProps) {
  return <a href={href}>{children}</a>;
}

export default HomeCardQualifications;
