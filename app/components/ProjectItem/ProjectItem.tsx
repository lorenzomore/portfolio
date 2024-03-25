import React from "react";
import styles from './ProjectItem.module.css'
import Image from "next/image";
import Link from "next/link";

interface props {
    projectName : string,
    imageUrl: string,
    hrefPage: string
}

export default function ProjectItem({projectName,imageUrl,hrefPage}:props){
    return (
        <div className={styles.projWrap}>
            <Link href={hrefPage}>
                <Image className={styles.projCover} src={imageUrl} alt={projectName} placeholder="data:image/..."  fill style={{objectFit:'cover'}}/>
                <p className={styles.projTitle}>{projectName}</p>
            </Link>
        </div>
    );
} 