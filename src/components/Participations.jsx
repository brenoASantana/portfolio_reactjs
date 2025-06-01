import React from "react";

export default function Participations() {
  return (
    <section className="participations">
      <h2>Participações</h2>
      <div className="grid">
        <article>
          <h3>Hack na Ilha</h3>
          <img
            src={`${process.env.PUBLIC_URL}/assets/img/HackNaIlha.jpg`}
            alt="Foto do evento Hack na Ilha"
          />
          <p>
            Participei do <strong>Hack na Ilha</strong>, promovido pelo{" "}
            <strong>CEADS/UERJ</strong> e <strong>FAPERJ</strong>, em{" "}
            <strong>Ilha Grande</strong>. Desenvolvemos soluções para
            conectividade local, aliando tecnologias como{" "}
            <strong>CubeSats</strong> e redes <strong>MeshConnects</strong> a
            uma abordagem socialmente integrada.
          </p>
        </article>

        <article>
          <h3>Programação 0</h3>
          <img
            src={`${process.env.PUBLIC_URL}/assets/img/Prog0.jpg`}
            alt="Foto da turma do curso Programação 0"
          />
          <p>
            Lecionei na <strong>primeira edição do curso "Programação 0"</strong>
            , iniciativa do <strong>IME/UERJ</strong>. Ministrei aulas sobre{" "}
            <strong>Sistemas de Numeração</strong> e{" "}
            <strong>Estrutura de Decisão</strong>.
          </p>
        </article>

        <article>
          <h3>Bate Papo sobre Banco de Dados</h3>
          <img
            src={`${process.env.PUBLIC_URL}/assets/img/Palestra.jpg`}
            alt="Foto do bate papo sobre banco de dados"
          />
          <p>
            Participei de um bate-papo com alunos da{" "}
            <strong>Escola Estadual de Felisburgo</strong> sobre{" "}
            <strong>Banco de Dados em Jogos</strong> e carreira em tecnologia.
          </p>
        </article>

        <article>
          <h3>Desafio de Engenharia de Software Kraft Baterias EntregPag</h3>
          <img
            src={`${process.env.PUBLIC_URL}/assets/img/DesafioKraft.jpg`}
            alt="Foto do Desafio Kraft"
          />
          <p>
            Fui premiado com o 2º lugar no{" "}
            <strong>
              Desafio de Engenharia de Software Kraft Baterias EntregPag
            </strong>
            , configurando o iDempiere na AWS e criando janelas e tabelas.
            Recebi prêmio em dinheiro e vaga de estágio.
          </p>
        </article>
      </div>
    </section>
  );
}
