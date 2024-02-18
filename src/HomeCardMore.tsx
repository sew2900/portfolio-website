import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
}

function HomeCardMore() {
  return (
    <div className="homecard-container">
      <div>
        <h3 className="">More</h3>
        <p>Here you can find more information about me.</p>
      </div>
      <div className="full-width align-right">
        <CustomLink href={"/portfolio-website/More"}>
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

export default HomeCardMore;
