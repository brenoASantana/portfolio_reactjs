// React
import React from "react";

// Components
import SocialLinks from "./SocialLinks";

// CSS Module
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer>
      <h2>Contato</h2>
      <SocialLinks />
      <p>
        &copy; {new Date().getFullYear()} Breno Santana. Todos os direitos
        reservados.
      </p>
    </footer>
  );
}
