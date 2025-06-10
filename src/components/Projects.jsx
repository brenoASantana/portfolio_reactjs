import React from "react";
import Picture from "./Picture";
import styles from "./Projects.module.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Projects() {
  const projects = [
    {
      title: "Histórias Mal Contadas (DEMO)",
      link: "https://github.com/brenoASantana/Historias_Mal_Contadas_DEMO",
      description: `é um jogo de terror e aventura do estilo narrative-driven experimental adventure e roguelike. Nele, você vivencia a jornada de um Padre que desperta no porão de um monastério, em um local desconhecido, sem memória e em busca de respostas. Sem muitas opções, ele acaba libertando um antigo mal aprisionado. Agora, sua única escolha é sobreviver. Recuperar sua fé e encontrar respostas se tornam sua principal motivação.`,
      images: [
        {
          src: "https://github.com/brenoASantana/Historias_Mal_Contadas_DEMO/blob/main/assets/images/tela_inicial.png?raw=true",
          alt: "Imagem da tela inicial do jogo HMC",
        },
        {
          src: "https://github.com/brenoASantana/Historias_Mal_Contadas_DEMO/blob/main/assets/images/tela_unknow.png?raw=true",
          alt: "Imagem da tela de comando desconhecido do jogo HMC",
        },
        {
          src: "https://github.com/brenoASantana/Historias_Mal_Contadas_DEMO/blob/main/assets/images/level_two.png?raw=true",
          alt: "Imagem da tela da segunda fase do jogo HMC",
        },
        {
          src: "https://github.com/brenoASantana/Historias_Mal_Contadas_DEMO/blob/main/assets/images/game_over.png?raw=true",
          alt: "Imagem da tela de fim do jogo HMC",
        },
      ],
    },
    {
      title: "Kaching Software",
      link: "https://github.com/brenoASantana/kaching",
      description: `é um projeto Full-Stack de sistema de inventário e gestão organizado de forma MVC programado em PHP, HTML e CSS com um CRUD de produtos, funcionários, usuários e fornecedores.`,
      images: [
        {
          src: "https://github.com/brenoASantana/kaching/blob/main/view/css/img/telaInicial.png?raw=true",
          alt: "Imagem da tela de cadastro de usuário do sistema Kaching Software",
        },
        {
          src: "https://github.com/brenoASantana/kaching/blob/main/view/css/img/cadastroUser.png?raw=true",
          alt: "Imagem da tela de pesquisa de usuário do sistema Kaching Software",
        },
        {
          src: "https://github.com/brenoASantana/kaching/blob/main/view/css/img/apagarUser.png?raw=true",
          alt: "Imagem da tela de exclusão de usuário do sistema Kaching Software",
        },
        {
          src: "https://github.com/brenoASantana/kaching/blob/main/view/css/img/atualizarUser.png?raw=true",
          alt: "Imagem da tela de atualização de usuário do sistema Kaching Software",
        },
      ],
    },
  ];

  return (
    <section className={styles.projects}>
      <h2>Projetos Realizados</h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <article key={index}>
            <h3>{project.title}</h3>
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
            >
              {project.images.map((image, i) => (
                <SwiperSlide key={i}>
                  <Picture src={image.src} alt={image.alt} />
                </SwiperSlide>
              ))}
            </Swiper>
            <p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>{project.title}</strong>
              </a>{" "}
              {project.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
