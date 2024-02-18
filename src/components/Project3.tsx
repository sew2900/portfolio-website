interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
}

function Project3() {
  return (
    <div className="projects-list-item">
      <div className="list-item-tags">
        <div className="tag">
          <p className="small">SCSS</p>
        </div>
        <div className="tag">
          <p className="small">Javascript</p>
        </div>
      </div>
      <div className="projects-list-item-content">
        <h3>Old portfolio website</h3>
        <p>Previous portfolio website with video presentation and code</p>
        <div className="margin-top-16 full-width align-right">
          <CustomLink href={"/portfolio-website/ProjectDetails3"}>
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
export default Project3;
