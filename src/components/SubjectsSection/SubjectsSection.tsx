import React from "react";
import { Card, CardContent } from "../ui/card";
import { SubjectsProps, SubjectCard } from "../../types";
import styles from "./SubjectsSection.module.css";

const SubjectsSection: React.FC<SubjectsProps> = ({
  className = "",
  title = "Disciplinas",
  description = "Explore nossas disciplinas e comece sua jornada de aprendizado em programação.",
  subjects = [
    {
      id: "data-structures",
      title: "Estruturas de Dados",
      description: "Aprenda as principais estruturas de dados e algoritmos de forma interativa.",
      hasIcon: true,
      iconSrc: "/learners-illo-light-1.svg",
    },
    {
      id: "algorithms",
      title: "Algoritmos",
      description: "Domine algoritmos fundamentais e técnicas de resolução de problemas.",
      hasIcon: false,
    },
    {
      id: "programming",
      title: "Programação",
      description: "Desenvolva suas habilidades de programação com projetos práticos.",
      hasIcon: false,
    },
    {
      id: "web-development",
      title: "Desenvolvimento Web",
      description: "Crie aplicações web modernas com as tecnologias mais atuais.",
      hasIcon: false,
    },
  ],
}) => {
  const handleSubjectClick = (subject: SubjectCard) => {
    console.log(`Subject clicked: ${subject.title}`);
  };

  return (
    <section className={`${styles.subjects} ${className}`}>
      <header className={styles.header}>
        <img
          className={styles.headerIcon}
          alt="Subjects icon"
          src="/image-9.png"
        />
        <h2 className={styles.headerTitle}>
          {title}
        </h2>
      </header>

      <div className={styles.description}>
        <p className={styles.descriptionText}>
          {description}
        </p>
      </div>

      <div className={styles.grid}>
        {subjects.map((subject) => (
          <Card
            key={subject.id}
            className={styles.card}
            onClick={() => handleSubjectClick(subject)}
          >
            <CardContent className={styles.cardContent}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>
                  {subject.title}
                </h3>
              </div>

              <div className={styles.cardBody}>
                <p className={styles.cardDescription}>
                  {subject.description}
                </p>

                {subject.hasIcon && subject.iconSrc && (
                  <div className={styles.cardIconContainer}>
                    <img
                      className={styles.cardIcon}
                      alt={`${subject.title} icon`}
                      src={subject.iconSrc}
                    />
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default SubjectsSection;