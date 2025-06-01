import React from "react";

export default function Header() {
  return (
    <header>
      <nav className="top-bar">
        {/* Redes sociais */}
        <div className="social-links">
          <a
            href="https://instagram.com/brenoasantana"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <span className="material-symbols-outlined">photo_camera</span>
          </a>
          <a
            href="https://linkedin.com/in/brenoasantana"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <span className="material-symbols-outlined">business_center</span>
          </a>
          <a
            href="https://github.com/brenoasantana"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <span className="material-symbols-outlined">code</span>
          </a>
          <a href="mailto:contatobrenosantana@outlook.com" aria-label="E-mail">
            <span className="material-symbols-outlined">mail</span>
          </a>
          <a
            href="https://linktr.ee/brenoasantana"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linktree"
          >
            <span className="material-symbols-outlined">link</span>
          </a>
        </div>

        {/* Botões de troca de idioma */}
        <div className="language-switcher">
          <button
            className="langButton"
            onClick={() => window.setLanguage("pt-BR")}
            aria-pressed="true"
          >
            Português
          </button>
          <button
            className="langButton"
            onClick={() => window.setLanguage("en")}
            aria-pressed="false"
          >
            English
          </button>
          <button
            className="langButton"
            onClick={() => window.setLanguage("es")}
            aria-pressed="false"
          >
            Español
          </button>
        </div>
      </nav>
    </header>
  );
}
