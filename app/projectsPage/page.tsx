import NavBar from '../components/NavBar/NavBar';
import ProjectItem from '../components/ProjectItem/ProjectItem';
import styles from './page.module.css';
import * as ProjectManager from '../utils/projectsManager';

function ProjectsGallery(){
  let ProjArray = ProjectManager.getProjectsList();
  let name,thumbnail,href;
  
  return ProjArray.map(function(element:string){
     name = ProjectManager.getProjectTitle(element);
     thumbnail = ProjectManager.getProjectThumbnail(element);
     href = "/projectsPage/"+element;
    return(
      <ProjectItem key={element} projectName={name} imageUrl={thumbnail} hrefPage={href}/>
    )
  })
}

export default function ProjectsPage() {
  return <div><NavBar idToUnderline="projectsId"/>
    <div className={styles.contentWrap}>
      <ProjectsGallery/>
    </div>
  </div>
}