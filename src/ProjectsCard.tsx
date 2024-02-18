interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
}

function ProjectsCard() {
  return (
    <>
      <div className="flex-projects-home">
        <div className=" flex-projects-home-item corrector-projects-home">
          <div className="projects-card-container">
            <h1 className="main-accent-font text-center">
              Full stack developer
            </h1>
            <p>
              With specialization in Java & React. To read more about my
              projects click here
            </p>
            <div className="full-width align-right  margin-top-16">
              <CustomLink href={"/portfolio-website/Projects"}>
                <p className="btn btn-main-accent">projects</p>
              </CustomLink>
            </div>
          </div>
        </div>
        <div className="homecards-image flex-projects-home-item">
          <CustomLink href={"/portfolio-website/Projects"}>
            <img src="home.png" alt="" />
          </CustomLink>
        </div>
      </div>
    </>
  );
}

function CustomLink({ href, children }: CustomLinkProps) {
  return <a href={href}>{children}</a>;
}

export default ProjectsCard;
