import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { LoginSectionProps } from "../../types";
import styles from "./LoginSection.module.css";

const LoginSection: React.FC<LoginSectionProps> = ({ className = "" }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e?: React.MouseEvent) => {
    e?.preventDefault();
    try {
      const { data } = await axios.post(
        "/api/auth/login",
        { email, senha: password },
        { withCredentials: true }
      );
      localStorage.setItem("token", data.token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
      navigate("/home");
    } catch (err: any) {
      const msg = err?.response?.data?.erro || err?.message || "Falha no login";
      alert(msg);
    }
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  const handleFacebookLogin = () => {
    console.log("Facebook login clicked");
  };

  const handleSupport = () => {
    console.log("Support clicked");
  };

  const handleCreateAccount = () => {
    navigate("/register");
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <section className={`${styles.loginSection} ${className}`}>
      <div className={styles.container}>
        <div className={styles.loginCard}>
          <div className={styles.header}>
            <button 
              className={styles.backButton}
              onClick={handleBackToHome}
            >
              ← Voltar
            </button>
            <h2 className={styles.title}>Login</h2>
          </div>
          
          <div className={styles.userIcon}>
            <div className={styles.userAvatar}>
              <div className={styles.avatarHead}></div>
              <div className={styles.avatarBody}></div>
            </div>
          </div>

          <form className={styles.form}>
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

            <Button 
              className={styles.loginButton}
              onClick={handleLogin}
              variant="default"
            >
              Cadastrar
            </Button>
          </form>

          <div className={styles.createAccount}>
            <span className={styles.createAccountText}>Não possui uma conta?</span>
            <button 
              className={styles.createAccountLink}
              onClick={handleCreateAccount}
            >
              Criar-conta
            </button>
          </div>

          <div className={styles.socialLogin}>
            <Button 
              className={styles.socialButton}
              onClick={handleGoogleLogin}
              variant="outline"
            >
              <span className={styles.socialIcon}>G</span>
              Entrar Com Google
            </Button>

            <Button 
              className={styles.socialButton}
              onClick={handleFacebookLogin}
              variant="outline"
            >
              <span className={styles.socialIcon}>f</span>
              Entrar Com Facebook
            </Button>
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

export default LoginSection;
