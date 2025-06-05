import React from "react";

export default function Footer() {
  return (
    <footer>
      <h2>Contato</h2>
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
      <p>&copy; {new Date().getFullYear()} Breno Santana. Todos os direitos reservados.</p>
    </footer>
  );
}
