// React
import React from "react";

// CSS
import styles from "./Picture.module.css";

export default function Picture() {
  return (
    <div>
      <ul className={styles.gallery}>
        <li>
          <img
            src="https://github.com/brenoASantana/Historias_Mal_Contadas_DEMO/blob/main/assets/images/tela_inicial.png?raw=true"
            alt="Imagem da tela inicial do jogo HMC"
          />
        </li>
        <li>
          <img
            src="https://github.com/brenoASantana/Historias_Mal_Contadas_DEMO/blob/main/assets/images/tela_unknow.png?raw=true"
            alt="Imagem da tela de comando desconhecido do jogo HMC"
          />
        </li>
        <li>
          <img
            src="https://github.com/brenoASantana/Historias_Mal_Contadas_DEMO/blob/main/assets/images/level_two.png?raw=true"
            alt="Imagem da tela da segunda fase do jogo HMC"
          />
        </li>
        <li>
          <img
            src="https://github.com/brenoASantana/Historias_Mal_Contadas_DEMO/blob/main/assets/images/game_over.png?raw=true"
            alt="Imagem da tela de fim do jogo HMC"
          />
        </li>
      </ul>

      <ul className={styles.gallery}>
        <li>
          <img
            src="https://github.com/brenoASantana/kaching/blob/main/view/css/img/telaInicial.png?raw=true"
            alt="Imagem da tela de cadastro de usuário do sistema Kaching Software"
          />
        </li>
        <li>
          <img
            src="https://github.com/brenoASantana/kaching/blob/main/view/css/img/cadastroUser.png?raw=true"
            alt="Imagem da tela de pesquisa de usuário do sistema Kaching Software"
          />
        </li>
        <li>
          <img
            src="https://github.com/brenoASantana/kaching/blob/main/view/css/img/apagarUser.png?raw=true"
            alt="Imagem da tela de exclusão de usuário do sistema Kaching Software"
          />
        </li>
        <li>
          <img
            src="https://github.com/brenoASantana/kaching/blob/main/view/css/img/atualizarUser.png?raw=true"
            alt="Imagem da tela de atualização de usuário do sistema Kaching Software"
          />
        </li>
      </ul>
    </div>
  );
}
