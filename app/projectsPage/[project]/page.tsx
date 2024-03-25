
import NavBar from "../../components/NavBar/NavBar";
import Carousel from "../../components/Carousel/Carousel";
import * as ProjectManager from "../../utils/projectsManager";
interface params {
  project: string;
}

//nextjs function => retriving projects to create static routes to each project pages
export async function generateStaticParams() {
  const pjarr = ProjectManager.getProjectsList();
    return pjarr.map((proj) => ({
    project: proj,
  }))
}

export default function Project({ params }: { params: params }) {
  return (
    <div>
      <NavBar idToUnderline="projectsId" />
      <div>
        <Carousel projectId={params.project} />
      </div>
    </div>
  );
}
