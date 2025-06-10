// React
import React from "react";

// CSS Module
import styles from "./SocialLinks.module.css";

const socialLinks = [
  {
    href: "https://instagram.com/brenoasantana",
    label: "Instagram",
    icon: "https://www.svgrepo.com/show/521711/instagram.svg",
  },
  {
    href: "https://linkedin.com/in/brenoasantana",
    label: "LinkedIn",
    icon: "https://www.svgrepo.com/show/521725/linkedin.svg",
  },
  {
    href: "https://github.com/brenoasantana",
    label: "GitHub",
    icon: "https://www.svgrepo.com/show/521688/github.svg",
  },
  {
    href: "mailto:contatobrenosantana@outlook.com",
    label: "E-mail",
    icon: "https://www.svgrepo.com/show/511921/email-1573.svg",
  },
  {
    href: "https://linktr.ee/brenoasantana",
    label: "Linktree",
    icon: "https://www.svgrepo.com/show/330844/linktree.svg",
  },
];

export default function SocialLinks() {
  return (
    <div className={styles.socialLink}>
      {socialLinks.map(({ href, label, icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("mailto:") ? "_self" : "_blank"}
          rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
          aria-label={label}
        >
          {/* <span className={styles.materialSymbolsOutlined}>{icon}</span> */}
            <img src={icon} alt={label}/>

        </a>
      ))}
    </div>
  );
}
