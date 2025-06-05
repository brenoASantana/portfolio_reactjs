// React
import React from "react";

//Module CSS
import styles from "./Profile.module.css";

export default function Profile() {
  return (
    <article className={styles.profile}>
      <img
        className={styles.profilePicture}
        src={`https://github.com/brenoASantana.png`}
        alt="Foto de perfil"
      />
      <div className={styles.profileText}>
        <h2>Breno Santana</h2>
        <p>
          <strong>Desenvolvedor Back-End Júnior</strong> & estudante de{" "}
          <strong>Ciência da Computação</strong> na <strong>UERJ</strong>.{" "}
          Experiência com <strong>Java</strong>, <strong>PostgreSQL</strong> e
          muito mais!
        </p>
      </div>
    </article>
  );
}
