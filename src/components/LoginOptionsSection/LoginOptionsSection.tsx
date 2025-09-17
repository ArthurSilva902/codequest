import React from "react";
import { Button } from "../ui/button";
import { LoginOptionsProps, LoginOption } from "../../types";
import styles from "./LoginOptionsSection.module.css";

const LoginOptionsSection: React.FC<LoginOptionsProps> = ({
  className = "",
  title = "Comece sua jornada de aprendizado",
  description = "Faça login com sua conta preferida e comece a aprender programação de forma interativa e divertida.",
  loginOptions = [
    {
      id: "google",
      provider: "Google",
      iconSrc: "/image-6.png",
      text: "Entrar com Google",
      onClick: () => console.log("Google login clicked"),
    },
    {
      id: "github",
      provider: "GitHub",
      iconSrc: "/github-icon.png",
      text: "Entrar com GitHub",
      onClick: () => console.log("GitHub login clicked"),
    },
  ],
}) => {
  const handleLogin = (option: LoginOption) => {
    if (option.onClick) {
      option.onClick();
    } else {
      console.log(`${option.provider} login clicked`);
    }
  };

  return (
    <section className={`${styles.loginOptions} ${className}`}>
      <div className={styles.content}>
        <div className={styles.container}>
          <h2 className={styles.title}>
            {title}
          </h2>

          <p className={styles.description}>
            {description}
          </p>

          <div className={styles.buttons}>
            {loginOptions.map((option) => (
              <Button
                key={option.id}
                className={styles.button}
                onClick={() => handleLogin(option)}
                variant="outline"
              >
                <img
                  className={styles.buttonIcon}
                  alt={`${option.provider} icon`}
                  src={option.iconSrc}
                />
                <span className={styles.buttonText}>
                  {option.text}
                </span>
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.image}>
        <img
          className={styles.imageImg}
          alt="Hero illustration"
          src="/hero-illo-3x-1.png"
        />
      </div>
    </section>
  );
};

export default LoginOptionsSection;