import NavBar from '../components/NavBar/NavBar';
import styles from './page.module.css';


export default function AboutPage() {
  return <div><NavBar idToUnderline="aboutId"/>
    <div className={styles.contentWrap}>
      <p>this is the about page</p>
    </div>
  </div>
}