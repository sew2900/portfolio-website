import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
}
function ProjectDetails3() {
  return (
    <div className="content-container padding-16 display-block">
      <div className="list-item-tags-container">
        <div className="list-item-tags">
          <div className="tag">
            <p className="small">SCSS</p>
          </div>
          <div className="tag">
            <p className="small">Javascript</p>
          </div>
        </div>
      </div>
      <h3 className="accent-color">Old portfolio website</h3>
      <div className="margin-top-16 full-width align-right">
        <CustomLink href={"/portfolio-website/Projects"}>
          <p className="btn btn-main-accent">
            <FontAwesomeIcon icon={faArrowLeftLong} />
          </p>
        </CustomLink>
      </div>
      <hr className="hr-space"></hr>
      <div className="details-container margin-top-16">
        <div className="details-item">
          <p className="bold">Description</p>
          <p>
            Previous version of portfolio website which i used on github pages.
            Using only HTML, SCSS, and JavaScript. Website was responsive and I
            made this project inspired by the work of Brad Traversy, which
            allowed to utilize his code for this purpose and edit it as desired.
          </p>
          <br />

          <p>
            You can find the link to his course &nbsp;
            <a
              className="main-accent-font"
              href="https://www.udemy.com/course/modern-html-css-from-the-beginning/"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
          </p>
          <br />
          <p className="bold">Technologies</p>
          <ul>
            <li>Frontend</li>
            <ul>
              <li>HTML</li>
              <li>SCSS</li>
              <li>Javascript</li>
            </ul>
          </ul>
          <br />
          <p className="bold">Code availability</p>
          <p>
            I'm sharing my code for this project. If you'd like to try it out
            yourself, feel free to do so.
          </p>
          <div className="margin-top-16 full-width align-right">
            <a
              href="https://github.com/sew2900/Old-portfolio-website"
              target="blank"
            >
              <p className="btn btn-main-accent">repository link</p>
            </a>
          </div>
        </div>
        <div className="details-item">
          <p className="bold">Preview</p>
          <div className="video-wrapper display-grid">
            <iframe
              src="https://www.youtube.com/embed/johV-MjzXjQ?si=V1Pw8ILfzShBXa38"
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
export default ProjectDetails3;
