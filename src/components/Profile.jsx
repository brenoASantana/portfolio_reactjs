import React from "react";

export default function Profile() {
  return (
    <article className="profile">
      <img
        className="profilePicture"
        src={`${process.env.PUBLIC_URL}/assets/img/profilePic.jpg`}
        alt="Foto de perfil"
      />
      <div className="profileText">
        <h2>Breno Santana</h2>
        <p>
          <strong>Desenvolvedor Back-End Júnior</strong> & estudante de{" "}
          <strong>Ciência da Computação</strong> na <strong>UERJ</strong>.{" "}
          Experiência com <strong>Java</strong>, <strong>PostgreSQL</strong> e
          muito mais!
        </p>
      </div>
    </article>
  );
}
