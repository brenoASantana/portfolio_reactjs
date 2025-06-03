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
                src={`https://github.com/brenoASantana/Historias_Mal_Contadas_DEMO/blob/main/assets/images/tela_inicial.png?raw=true`}
                alt="Imagem da tela inicial do jogo HMC"
              />
            </li>
            <li>
              <img
                src={`https://github.com/brenoASantana/Historias_Mal_Contadas_DEMO/blob/main/assets/images/tela_unknow.png?raw=true`}
                alt="Imagem da tela de comando desconhecido do jogo HMC"
              />
            </li>
            <li>
              <img
                src={`https://github.com/brenoASantana/Historias_Mal_Contadas_DEMO/blob/main/assets/images/level_two.png?raw=true`}
                alt="Imagem da tela da segunda fase do jogo HMC"
              />
            </li>
            <li>
              <img
                src={`https://github.com/brenoASantana/Historias_Mal_Contadas_DEMO/blob/main/assets/images/game_over.png?raw=true`}
                alt="Imagem da tela de fim do jogo HMC"
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
                src={`https://github.com/brenoASantana/kaching/blob/main/view/css/img/telaInicial.png?raw=true`}
                alt="Imagem da tela de cadastro de usuário do sistema Kaching Software"
              />
            </li>
            <li>
              <img
                src={`https://github.com/brenoASantana/kaching/blob/main/view/css/img/cadastroUser.png?raw=true`}
                alt="Imagem da tela de pesquisa de usuário do sistema Kaching Software"
              />
            </li>
            <li>
              <img
                src={`https://github.com/brenoASantana/kaching/blob/main/view/css/img/apagarUser.png?raw=true`}
                alt="Imagem da tela de exclusão de usuário do sistema Kaching Software"
              />
            </li>
            <li>
              <img
                src={`https://github.com/brenoASantana/kaching/blob/main/view/css/img/atualizarUser.png?raw=true`}
                alt="Imagem da tela de atualização de usuário do sistema Kaching Software"
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
