'use client'
import React from "react";
import styles from './Navbar.module.css';
import Link from "next/link";

interface props {
    id: string,
    name:string,
    href:string,
    idToUnderline:string
}
interface navProps{
    idToUnderline:string
}

function NavMenuItem({id,name,href,idToUnderline}:props){
    if(id==idToUnderline){
    return(
        <Link id={id} href={href} className="m-5"  style={{textDecoration:'underline'}} >{name}</Link>
    )
    }else{
        return(
        <Link id={id} href={href} className="m-5" >{name}</Link>
        )
    }
}

export default function NavBar ({idToUnderline}:navProps){
    return (
        <div className={styles.navWrap}>
            <Link href="/" ><h1 className={styles.title}>Lorenzo Moreschi</h1></Link>
            <div className={styles.links}>
                {/*<NavMenuItem id="projectsId" href="/projectsPage" name="projects" idToUnderline={idToUnderline}/>*/}
                <NavMenuItem id="aboutId" href="/about"  name="about" idToUnderline={idToUnderline} />

            </div>
        </div>
    )
}
