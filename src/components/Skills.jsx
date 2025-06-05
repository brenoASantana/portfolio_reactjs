import React from "react";

import styles from './Skills.module.css';

export default function Skills() {
  return (
    <article className={styles.ul}>
      <h2>Habilidades e Competências</h2>
      <ul>
        <li>Java</li>
        <li>PostgreSQL</li>
        <li>C</li>
        <li>Python</li>
        <li>PHP</li>
        <li>Git & GitHub</li>
        <li>AWS</li>
        <li>iDempiere ERP</li>
        <li>Metodologias Ágeis</li>
        <li>Inglês</li>
      </ul>
    </article>
  );
}
