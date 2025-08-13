import React from "react";
import styles from "./profile.module.css";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

export function Profile(props) {
  return (
    <>
      <div className={styles.container}>
        <img src={props.avatar} alt={props.name} className={styles.avatar} />
        <h2 className={styles.name}>{props.name}</h2>
        <div className={styles.info}>{props.bio}</div>
        <div className={styles.info}>{props.phone}</div>
        <div className={styles.info}>{props.email}</div>
        <div className={styles.links}>
          <a
            href={props.githubUrl}
            target="_blank"
            rel="noreferer"
            className={
              props.theme === "male" ? styles.linkButtonMale : styles.linkButton
            }
          >
            <FaGithub className={styles.icon} />
            Github
          </a>
          <a
            href={props.linkedinUrl}
            target="_blank"
            rel="noreferer"
            className={
              props.theme === "male" ? styles.linkButtonMale : styles.linkButton
            }
          >
            <FaLinkedin className={styles.icon} />
            Linkedin
          </a>
          <a
            href={props.instagramUrl}
            target="_blank"
            rel="noreferer"
            className={
              props.theme === "male" ? styles.linkButtonMale : styles.linkButton
            }
          >
            <FaInstagram className={styles.icon} />
            Instagram
          </a>
        </div>
      </div>
    </>
  );
}

// avatar="https://randomuser.me/api/portraits/women/44.jpg"
// name="Anna Caroline Dias"
// bio="Desenvolverdora FullStack"
// phone="+5511987654321"
// email="ana.carol.dias@email.com"
// githubUrl="https://github.com/"
// linkedinUrl="https://linkedin.com/"
// instagramUrl="https://instagram.com/"
