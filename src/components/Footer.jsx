import React from "react";

export default function Footer() {
  return (
    <footer>
      <h2>Contato</h2>
       <p>Email: <a href="mailto:contatobrenosantana@outlook.com">contatobrenosantana@outlook.com</a></p>
      <p>&copy; {new Date().getFullYear()} Breno Santana. Todos os direitos reservados.</p>
      <p>Desenvolvido por Breno Santana</p>
    </footer>
  );
}
