interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
}

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/Home">
            <h2 className="text-size-300">Seweryn Kustosik</h2>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <CustomLink href={"/Home"}>
                <span>home</span>
              </CustomLink>
              <CustomLink href={"/Projects"}>
                <span>projects</span>
              </CustomLink>
              <CustomLink href={"/Qualifications"}>
                <span>qualifications</span>
              </CustomLink>
              <CustomLink href={"/More"}>
                <span>more</span>
              </CustomLink>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

function CustomLink({ href, children }: CustomLinkProps) {
  const path = window.location.pathname;
  return (
    <li className={path === href ? "active nav-item" : "nav-item"}>
      <a className="nav-link" href={href}>
        {children}
      </a>
    </li>
  );
}

export default Navbar;
