import React from "react";

export default function Projects() {
  return (
    <section className="projects">
      <h2>Projetos Realizados</h2>
      <div className="grid">
        <article>
          <h3>Histórias Mal Contadas (DEMO)</h3>
          <ul className="gallery">
            <li>
              <img
                src={`${process.env.PUBLIC_URL}/assets/img/HMC_1.jpg`}
                alt="Imagem do jogo Histórias Mal Contadas 1"
              />
            </li>
            <li>
              <img
                src={`${process.env.PUBLIC_URL}/assets/img/HMC_2.jpg`}
                alt="Imagem do jogo Histórias Mal Contadas 2"
              />
            </li>
            <li>
              <img
                src={`${process.env.PUBLIC_URL}/assets/img/HMC_3.jpg`}
                alt="Imagem do jogo Histórias Mal Contadas 3"
              />
            </li>
            <li>
              <img
                src={`${process.env.PUBLIC_URL}/assets/img/HMC_4.jpg`}
                alt="Imagem do jogo Histórias Mal Contadas 4"
              />
            </li>
          </ul>
          <p>
            <a
              href="https://github.com/brenoASantana/Historias_Mal_Contadas_DEMO"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Histórias Mal Contadas</strong>
            </a>{" "}
            é um jogo de terror e aventura do estilo narrative-driven
            experimental adventure e roguelike. Nele, você vivencia a jornada de
            um Padre que desperta no porão de um monastério, em um local
            desconhecido, sem memória e em busca de respostas. Sem muitas
            opções, ele acaba libertando um antigo mal aprisionado. Agora, sua
            única escolha é sobreviver. Recuperar sua fé e encontrar respostas
            se tornam sua principal motivação.
          </p>
        </article>

        <article>
          <h3>Kaching Software</h3>
          <ul className="gallery">
            <li>
              <img
                src={`${process.env.PUBLIC_URL}/assets/img/KachingSoftware_1.jpg`}
                alt="Imagem do sistema Kaching Software 1"
              />
            </li>
            <li>
              <img
                src={`${process.env.PUBLIC_URL}/assets/img/KachingSoftware_2.jpg`}
                alt="Imagem do sistema Kaching Software 2"
              />
            </li>
            <li>
              <img
                src={`${process.env.PUBLIC_URL}/assets/img/KachingSoftware_3.jpg`}
                alt="Imagem do sistema Kaching Software 3"
              />
            </li>
            <li>
              <img
                src={`${process.env.PUBLIC_URL}/assets/img/KachingSoftware_4.jpg`}
                alt="Imagem do sistema Kaching Software 4"
              />
            </li>
          </ul>
          <p>
            <a
              href="https://github.com/brenoASantana/kaching"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Kaching Software</strong>
            </a>{" "}
            é um projeto Full-Stack de sistema de inventário e gestão organizado
            de forma MVC programado em PHP, HTML e CSS com um CRUD de produtos,
            funcionários, usuários e fornecedores.
          </p>
        </article>
      </div>
    </section>
  );
}
