import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { RegisterSectionProps } from "../../types";
import styles from "./RegisterSection.module.css";

const RegisterSection: React.FC<RegisterSectionProps> = ({ className = "" }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    console.log("Register clicked", { 
      firstName, 
      lastName, 
      email, 
      password, 
      confirmPassword, 
      phone 
    });
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSupport = () => {
    console.log("Support clicked");
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <section className={`${styles.registerSection} ${className}`}>
      <div className={styles.container}>
        <div className={styles.registerCard}>
          <div className={styles.header}>
            <button 
              className={styles.backButton}
              onClick={handleBackToHome}
            >
              ← Voltar
            </button>
            <h2 className={styles.title}>Cadastro</h2>
          </div>

          <form className={styles.form}>
            {/* Nome Completo - Primeiro Nome e Sobrenome */}
            <div className={styles.fieldGroup}>
              <label className={styles.label}>Nome Completo</label>
              <div className={styles.nameRow}>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Primeiro Nome"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Sobrenome"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            {/* E-mail */}
            <div className={styles.fieldGroup}>
              <label className={styles.label}>E-mail</label>
              <input
                type="email"
                className={styles.input}
                placeholder="Digite seu E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Senha */}
            <div className={styles.fieldGroup}>
              <label className={styles.label}>Senha</label>
              <input
                type="password"
                className={styles.input}
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Confirmar Senha */}
            <div className={styles.fieldGroup}>
              <label className={styles.label}>Senha</label>
              <input
                type="password"
                className={styles.input}
                placeholder="Digite sua senha novamente"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            {/* Telefone */}
            <div className={styles.fieldGroup}>
              <label className={styles.label}>Telefone</label>
              <input
                type="tel"
                className={styles.input}
                placeholder="(32) XXXXX-XXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <Button 
              className={styles.registerButton}
              onClick={handleRegister}
              variant="default"
            >
              Cadastrar-se
            </Button>
          </form>

          <div className={styles.loginLink}>
            <span className={styles.loginText}>Já possui uma conta?</span>
            <button 
              className={styles.loginButton}
              onClick={handleLogin}
            >
              Logar-se
            </button>
          </div>

          <Button 
            className={styles.supportButton}
            onClick={handleSupport}
            variant="outline"
          >
            Suporte
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;
