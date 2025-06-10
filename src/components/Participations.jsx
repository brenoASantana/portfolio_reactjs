//React
import React from "react";

//CSS
import styles from "./Participations.module.css";

export default function Participations() {
  const participations = [
    {
      title: "Hack na Ilha",
      imgSrc:
        "https://media.licdn.com/dms/image/v2/D4D22AQErj4bjJ06mVQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1713311759597?e=1752105600&v=beta&t=lbAg8lp8grA1mWX_obhZSDoK8b3FJhouH-pyD1mtdw4",
      alt: "Foto do evento Hack na Ilha",
      description: (
        <>
          Participei do <strong>Hack na Ilha</strong>, promovido pelo{" "}
          <strong>CEADS/UERJ</strong> e <strong>FAPERJ</strong>, em{" "}
          <strong>Ilha Grande</strong>. Desenvolvemos soluções para
          conectividade local, aliando tecnologias como{" "}
          <strong>CubeSats</strong> e redes <strong>MeshConnects</strong> a uma
          abordagem socialmente integrada.
        </>
      ),
    },
    {
      title: "Programação 0",
      imgSrc:
        "https://media.licdn.com/dms/image/v2/D4D22AQGMNCmd8ic6yg/feedshare-shrink_1280/feedshare-shrink_1280/0/1721943452348?e=1752105600&v=beta&t=v_rHPbutapSl8olt72-Pfz5BC6SwbARIqnxpj2hw_Eo",
      alt: "Foto do curso Programação 0",
      description: (
        <>
          Lecionei na <strong>primeira edição do curso "Programação 0"</strong>,
          iniciativa do <strong>IME/UERJ</strong>. Ministrei aulas sobre{" "}
          <strong>Sistemas de Numeração</strong> e{" "}
          <strong>Estrutura de Decisão</strong>.
        </>
      ),
    },
    {
      title: "Bate Papo sobre Banco de Dados",
      imgSrc:
        "https://media.licdn.com/dms/image/v2/D4D22AQEKsPQLze-i0g/feedshare-shrink_1280/feedshare-shrink_1280/0/1711138390610?e=1752105600&v=beta&t=w0UP1lhnS2_-U1v5faZ9fqgiTDMTHLQ2qqJBcQnIfrE",
      alt: "Foto do bate papo sobre banco de dados",
      description: (
        <>
          Participei de um bate-papo com alunos da{" "}
          <strong>Escola Estadual de Felisburgo</strong> sobre{" "}
          <strong>Banco de Dados em Jogos</strong> e carreira em tecnologia.
        </>
      ),
    },
    {
      title: "Desafio de Engenharia de Software Kraft Baterias EntregPag",
      imgSrc:
        "https://media.licdn.com/dms/image/v2/D4D2DAQE0OuZnJFulsg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1728578433849?e=1750204800&v=beta&t=2rXFzn4uYSA3njFYrWulYcvr8Wbps5fTsymI6xQO4jA",
      alt: "Foto do Desafio Kraft",
      description: (
        <>
          Fui premiado com o 2º lugar no{" "}
          <strong>
            Desafio de Engenharia de Software Kraft Baterias EntregPag
          </strong>
          , configurando o iDempiere na AWS e criando janelas e tabelas.
          Recebi prêmio em dinheiro e vaga de estágio.
        </>
      ),
    },
  ];

  return (
    <section className={styles.participations}>
      <h2>Participações</h2>
      <div className={styles.grid}>
        {participations.map((item, index) => (
          <article key={index}>
            <h3>{item.title}</h3>
            <img src={item.imgSrc} alt={item.alt} />
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
