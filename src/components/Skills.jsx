import React from "react";

import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <article className={styles.ul}>
      <div className={styles.skillsContainer}>
        <h2>Habilidades e Competências</h2>

          <strong>
            <div className={styles.paragraph}>
          <p>Java</p>
          <p>PostgreSQL</p>
          <p>C</p>
          <p>Python</p>
          <p>PHP</p>
          <p>Git & GitHub</p>
          <p>AWS</p>
          <p>iDempiere ERP</p>
          <p>Metodologias Ágeis</p>
          <p>Inglês</p>
          </div>
          </strong>

      </div>
    </article>
  );
}
