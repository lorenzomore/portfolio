import NavBar from "../components/NavBar/NavBar";
import styles from "./page.module.css";
import nextConfig from "../../next.config.mjs";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      <NavBar idToUnderline="aboutId" />
      <div className={styles.contentWrap}>
        <p>©2025 Lorenzo Moreschi</p>
        <Link target="_blank" href="https://www.instagram.com/itsmoreskk/">
        <Image
          style={{ marginTop: "10px" }}
          width={16}
          height={16}
          src={`${nextConfig.basePath}/instagram.svg`}
          alt="Prev"
        />
        </Link>
      </div>
    </div>
  );
}
