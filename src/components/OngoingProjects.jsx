import React from "react";

export default function OngoingProjects() {
  return (
    <section className="projects">
      <h2>Projetos em Andamento</h2>
      <div className="grid">
        <article>
          <h3>KachingERP</h3>
          <p>
            <strong>KachingERP</strong> é uma solução empresarial robusta e
            customizável, desenvolvida a partir do sistema open source{" "}
            <strong>iDempiere ERP</strong> e integrada ao plugin de localização
            brasileira <strong>LBR</strong>. O projeto foi concebido para
            aprimorar diversas áreas da gestão empresarial, desde o controle de
            estoques até a automação de processos operacionais.
          </p>
        </article>
        <article>
          <h3>CineSystem</h3>
          <p>
            <strong>CineSystem</strong> é uma solução completa para a gestão de
            cinemas, desenvolvida em Java para atender com eficiência as
            demandas operacionais e estratégicas desse segmento. A plataforma
            facilita o gerenciamento de salas, sessões, filmes e ingressos.
          </p>
        </article>
      </div>
    </section>
  );
}
