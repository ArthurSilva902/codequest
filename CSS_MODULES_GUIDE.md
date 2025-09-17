# Guia de CSS Modules

Este projeto agora usa **CSS Modules** com a sintaxe `className={styles.container}`, que é muito mais fácil e organizado!

## ✅ **Como Funciona**

### **1. Arquivo CSS Module**
Cada componente tem seu próprio arquivo `.module.css`:

```css
/* HeaderSection.module.css */
.header {
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  background-color: white;
}

.logo {
  display: flex;
  align-items: center;
}

.logoText {
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  font-size: 1.5rem;
}
```

### **2. Uso no Componente**
```tsx
import React from "react";
import styles from "./HeaderSection.module.css";

const HeaderSection = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <div className={styles.logoText}>
          CodeQuest
        </div>
      </div>
    </header>
  );
};
```

## 🎯 **Vantagens dos CSS Modules**

- ✅ **Sintaxe simples**: `className={styles.container}`
- ✅ **Escopo isolado**: Classes não conflitam entre componentes
- ✅ **IntelliSense**: Autocompletar no VS Code
- ✅ **Type Safety**: TypeScript reconhece as classes
- ✅ **Fácil manutenção**: Cada componente tem seus estilos separados

## 📁 **Estrutura Atual**

```
src/
├── components/
│   ├── HeaderSection/
│   │   ├── HeaderSection.tsx
│   │   └── HeaderSection.module.css
│   ├── FooterSection/
│   │   ├── FooterSection.tsx
│   │   └── FooterSection.module.css
│   └── ...
└── tailwind.css (apenas Tailwind base)
```

## 🚀 **Como Adicionar Novos Estilos**

### **1. Criar arquivo CSS Module**
```css
/* NewComponent.module.css */
.container {
  padding: 1rem;
  background-color: white;
}

.title {
  font-size: 1.5rem;
  font-weight: bold;
}
```

### **2. Usar no componente**
```tsx
import styles from "./NewComponent.module.css";

const NewComponent = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Título</h1>
    </div>
  );
};
```

## 🎨 **Classes Disponíveis**

### **HeaderSection**
- `styles.header` - Container principal
- `styles.logo` - Logo container
- `styles.logoText` - Texto do logo
- `styles.navigation` - Navegação
- `styles.nav` - Item de navegação
- `styles.search` - Campo de busca
- `styles.actions` - Botões de ação

### **FooterSection**
- `styles.footer` - Container principal
- `styles.container` - Container interno
- `styles.logo` - Logo
- `styles.grid` - Grid de links
- `styles.column` - Coluna de links
- `styles.social` - Ícones sociais

### **DescriptionSection**
- `styles.description` - Container principal
- `styles.container` - Container interno
- `styles.title` - Título
- `styles.text` - Texto descritivo

### **LoginOptionsSection**
- `styles.loginOptions` - Container principal
- `styles.content` - Conteúdo
- `styles.buttons` - Container de botões
- `styles.button` - Botão individual

### **SubjectsSection**
- `styles.subjects` - Container principal
- `styles.grid` - Grid de cards
- `styles.card` - Card individual
- `styles.cardContent` - Conteúdo do card

## 🔧 **Configuração**

O projeto está configurado no `vite.config.ts` para usar CSS Modules com `camelCase`:

```typescript
css: {
  modules: {
    localsConvention: "camelCase",
  },
}
```

Isso significa que você pode usar tanto `styles.container` quanto `styles['container']`.

## ✨ **Exemplo Completo**

```tsx
import React from "react";
import styles from "./MyComponent.module.css";

interface MyComponentProps {
  title: string;
  className?: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ 
  title, 
  className = "" 
}) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>
        Este é um exemplo de CSS Modules!
      </p>
    </div>
  );
};

export default MyComponent;
```

```css
/* MyComponent.module.css */
.container {
  padding: 2rem;
  background-color: #f9fafb;
  border-radius: 0.5rem;
}

.title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 1rem;
}

.description {
  color: #6b7280;
  line-height: 1.6;
}
```

Agora é muito mais fácil trabalhar com estilos! 🎉
