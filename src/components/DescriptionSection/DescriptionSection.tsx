import React from "react";
import { DescriptionProps } from "../../types";
import styles from "./DescriptionSection.module.css";

const DescriptionSection: React.FC<DescriptionProps> = ({ 
  className = "",
  title = "Transforme o aprendizado em uma experiência interativa!",
  description = "No CodeQuest, você aprende Estruturas de Dados de forma prática e divertida: codifique, visualize em tempo real e receba feedback inteligente da IA. Avance nos desafios, conquiste medalhas e descubra como estudar programação pode ser tão envolvente quanto jogar!"
}) => {
  return (
    <section className={`${styles.description} ${className}`}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          {title}
        </h2>

        <div className={styles.text}>
          {description}
        </div>
      </div>
    </section>
  );
};

export default DescriptionSection;