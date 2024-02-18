import ProjectsCard from "./ProjectsCard";
import HomeCardQualifications from "./HomeCardQualifications";
import HomeCardGithub from "./HomeCardGithub";
import HomeCardMore from "./HomeCardMore";

function Home() {
  return (
    <>
      <div className="content-container padding-16">
        <div className="homecards-first">
          <ProjectsCard></ProjectsCard>
        </div>

        <hr></hr>
        <div className="homecards-second">
          <HomeCardQualifications></HomeCardQualifications>
          <HomeCardGithub></HomeCardGithub>
          <HomeCardMore></HomeCardMore>
        </div>
      </div>
    </>
  );
}

export default Home;
