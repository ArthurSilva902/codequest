import React from "react";
import { SearchIcon } from "lucide-react";
import { Button } from "../ui/button";
import { HeaderProps, NavigationItem } from "../../types";
import styles from "./HeaderSection.module.css";

const navigationItems: NavigationItem[] = [
  { label: "INICIO", href: "/webhome" },
  { label: "DESAFIOS", href: "#" },
  { label: "MEU PROGRESSO", href: "#" },
];

const HeaderSection: React.FC<HeaderProps> = ({ className = "" }) => {
  const handleLogin = () => {
    console.log("Login clicked");
  };

  const handleRegister = () => {
    console.log("Register clicked");
  };

  const handleSearch = () => {
    console.log("Search clicked");
  };

  const getNavClassName = (index: number): string => {
    if (index === 0) return `${styles.nav} ${styles.navFirst}`;
    if (index === navigationItems.length - 1) return `${styles.nav} ${styles.navLast}`;
    return `${styles.nav} ${styles.navMiddle}`;
  };

  return (
    <header className={`${styles.header} ${className}`}>
      {/* Logo */}
      <div className={styles.logo}>
        <div className={styles.logoText}>
          CodeQuest
        </div>
      </div>

      {/* Navigation */}
      <nav className={styles.navigation}>
        {navigationItems.map((item, index) => (
          <button
            key={item.label}
            className={getNavClassName(index)}
            onClick={() => console.log(`Navigate to: ${item.href}`)}
          >
            <div className={styles.navItem}>
              {item.label}
            </div>
          </button>
        ))}
      </nav>

      {/* Search */}
      <div className={styles.search} onClick={handleSearch}>
        <div className={styles.searchContent}>
          <div className={styles.searchIcon}>
            <SearchIcon className="w-6 h-6" />
          </div>
          <div className={styles.searchText}>
            Buscar
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className={styles.actions}>
        <Button 
          className={styles.button} 
          onClick={handleLogin}
          variant="default"
        >
          <span className={styles.buttonText}>
            LOGIN
          </span>
        </Button>

        <Button 
          className={styles.button} 
          onClick={handleRegister}
          variant="outline"
        >
          <span className={styles.buttonText}>
            REGISTER
          </span>
        </Button>
      </div>
    </header>
  );
};

export default HeaderSection;