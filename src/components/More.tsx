function More() {
  return (
    <>
      <div className="content-container padding-16">
        <div className="more-info-main">
          <h1 className="text-center accent-color">
            Most important informations
          </h1>
          <p className="text-center">
            Here you can read short summary with the most important informations
            about me
          </p>
          <hr className="margin-top-100" />
        </div>
        <div className="more-section-about">
          <div className="more-section-about-items">
            <div className="more-section-about-item default-container">
              <h3>Languages & Technologies</h3>
              <p>
                •Java 17, Spring boot, Spring Security, TypeScript, React,
                Angular, SQL, Visual Basic, Excel, Power Automate, Power Apps,
                Azure
              </p>
            </div>
            <div className="more-section-about-item default-container">
              <h3>Commercial work experience</h3>
              <p>
                •IT specialist internships <br />
                •full stack developer as a freelancer
              </p>
            </div>
          </div>
          <div className="more-section-about-items">
            <div className="more-section-about-item default-container">
              <h3>Certifications</h3>
              <p>
                •From 05.2023 - Azure Database Administrator Associate
                (Microsoft DP-300 Certification)
              </p>
            </div>
            <div className="more-section-about-item default-container">
              <h3>Education</h3>
              <p>
                •Last year of engineering studies with a specialization in
                Computer Science (Part-time) <br />
                •Oracle Certified Professional Java SE 17 Developer - Study
                Guide
                <br />
                •Online courses
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default More;
