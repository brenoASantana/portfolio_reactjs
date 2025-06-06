//React
import React from "react";

//CSS
import styles from "./About.module.css";

export default function About() {
  return (
    <article className={styles}>
      <h2>Sobre Mim</h2>
      <p>
        Nascido em Volta Redonda e criado em Barra do Piraí, sempre fui movido
        pela curiosidade de entender como a tecnologia funciona. Desde criança,
        desmontava e remontava aparelhos para descobrir seu funcionamento
        interno — uma fascinação que se transformou em paixão pelo
        desenvolvimento de software. Além do código, sou entusiasta de jogos
        (que me ensinam a resolver problemas de forma criativa) e música (que
        aguça minha atenção aos detalhes). Estou sempre em busca de{" "}
        <strong>desafios complexos</strong> e{" "}
        <strong>oportunidades para aprender</strong>, mantendo-me atualizado com
        as tendências do mercado por meio de cursos, comunidades de tecnologia
        e experimentação prática.{" "}
        <em>
          Vamos conversar sobre como posso contribuir para o seu próximo
          projeto?
        </em>
      </p>
    </article>
  );
}
