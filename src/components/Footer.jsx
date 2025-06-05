//React

// CSS Module
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer>
      <h2>Contato</h2>
      {/* Redes sociais */}
      <div className={styles.socialLink}>
        <a
          href="https://instagram.com/brenoasantana"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <span className={styles.materialSymbolsOutlined}>photo_camera</span>
        </a>
        <a
          href="https://linkedin.com/in/brenoasantana"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <span className={styles.materialSymbolsOutlined}>business_center</span>
        </a>
        <a
          href="https://github.com/brenoasantana"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <span className={styles.materialSymbolsOutlined}>code</span>
        </a>
        <a href="mailto:contatobrenosantana@outlook.com" aria-label="E-mail">
          <span className={styles.materialSymbolsOutlined}>mail</span>
        </a>
        <a
          href="https://linktr.ee/brenoasantana"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linktree"
        >
          <span className={styles.materialSymbolsOutlined}>link</span>
        </a>
      </div>
      <p>
        &copy; {new Date().getFullYear()} Breno Santana. Todos os direitos
        reservados.
      </p>
    </footer>
  );
}
