import Image from "next/image";
import NavBar from "./components/NavBar/NavBar";
import styles from "./page.module.css";
import nextConfig from '../next.config.mjs';
import ProjectsPage from "./projectsPage/page";

export default function Page() {
  return (
    /*<div>
      <NavBar idToUnderline=""/>
      <div className={styles.homeContenWrap}>
        <div />
        <Image
          className={styles.imageItem}
          fill
          alt="la"
          src={`${nextConfig.basePath}/images/california/downtown1.jpg`}
        />
        <Image
          className={styles.imageItem}
          fill
          alt="hw"
          src={`${nextConfig.basePath}/images/california/hollywood.jpg`}
        />
        <div />
        <div />
        <Image
          className={styles.imageItem}
          fill
          alt="vn"
          src={`${nextConfig.basePath}/images/california/venice_skate1.jpg`}
        />
      </div>
    </div>*/
    //removed homepage gallery; replaced with projects page
    <ProjectsPage/>
  );
}
