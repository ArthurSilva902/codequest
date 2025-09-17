import React from "react";
import { Separator } from "../ui/separator";
import { FooterProps, FooterColumn, SocialIcon } from "../../types";
import styles from "./FooterSection.module.css";

const FooterSection: React.FC<FooterProps> = ({ className = "" }) => {
  const footerColumns: FooterColumn[] = [
    {
      id: "company",
      title: "CodeQuest",
      links: [
        { id: "about", text: "Quem somos", href: "/about" },
        { id: "login", text: "Cadastro/Login", href: "/login" },
        { id: "careers", text: "Trabalhe conosco", href: "/careers" },
      ],
    },
    {
      id: "get-started",
      title: "Começa agora",
      links: [
        { id: "discussions", text: "Discussões", href: "/discussions" },
        { id: "codes", text: "Códigos", href: "/codes" },
        { id: "examples", text: "Exemplos", href: "/examples" },
      ],
    },
    {
      id: "support",
      title: "Central de Atendimento",
      links: [
        { id: "help", text: "Central de Ajuda", href: "/help" },
        { id: "contact", text: "Contate-nos", href: "/contact" },
        { id: "phone", text: "(00) 0000 - 0000", href: "tel:0000000000" },
        { id: "schedule", text: "Segunda à Sexta: 08h às 18h" },
        { id: "weekend", text: "Sábados e Feriados Nacionais: 09h às 16h" },
      ],
    },
    {
      id: "legal",
      title: "Termos",
      links: [
        { id: "terms", text: "Termos de uso do site", href: "/terms" },
        { id: "privacy", text: "Política de privacidade", href: "/privacy" },
        { id: "refund", text: "Política de Cancelamento e Reembolso", href: "/refund" },
        { id: "payment", text: "Política de Pagamento", href: "/payment" },
      ],
    },
    {
      id: "app",
      title: "App",
      links: [
        { id: "download", text: "Baixe o nosso aplicativo", href: "/download" },
      ],
    },
  ];

  const socialIcons: SocialIcon[] = [
    {
      id: "facebook",
      src: "/facebook-1.png",
      alt: "Facebook",
      href: "https://facebook.com",
    },
    {
      id: "pinterest",
      src: "/pinterest-1.png",
      alt: "Pinterest",
      href: "https://pinterest.com",
    },
    {
      id: "twitter",
      src: "/twitter-alt-1.png",
      alt: "Twitter",
      href: "https://twitter.com",
    },
    {
      id: "youtube",
      src: "/youtube-1.png",
      alt: "YouTube",
      href: "https://youtube.com",
    },
    {
      id: "instagram",
      src: "/instagram-1.png",
      alt: "Instagram",
      href: "https://instagram.com",
    },
  ];

  const handleLinkClick = (href?: string) => {
    if (href) {
      if (href.startsWith("http")) {
        window.open(href, "_blank");
      } else {
        console.log(`Navigate to: ${href}`);
      }
    }
  };

  return (
    <footer className={`${styles.footer} ${className}`}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <div className={styles.logoText}>
            CodeQuest
          </div>
        </div>

        <Separator className={styles.separator} />

        {/* Links Grid */}
        <div className={styles.grid}>
          {footerColumns.map((column) => (
            <div key={column.id} className={styles.column}>
              <h3 className={styles.columnTitle}>
                {column.title}
              </h3>
              <ul className={styles.columnLinks}>
                {column.links.map((link) => (
                  <li key={link.id}>
                    <button
                      className={styles.columnLink}
                      onClick={() => handleLinkClick(link.href)}
                    >
                      {link.text}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className={styles.separator} />

        {/* Social Icons */}
        <div className={styles.social}>
          <div className={styles.socialIcons}>
            {socialIcons.map((icon) => (
              <button
                key={icon.id}
                className={styles.socialIcon}
                onClick={() => handleLinkClick(icon.href)}
                aria-label={icon.alt}
              >
                <img
                  src={icon.src}
                  alt={icon.alt}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.copyright}>
          <p className={styles.copyrightText}>
            Copyright © 2025, CodeQuest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;