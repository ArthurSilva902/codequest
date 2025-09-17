# 🚀 CodeQuest - Frontend

Um frontend moderno e responsivo para a plataforma CodeQuest, desenvolvido com React, TypeScript e CSS Modules.

## ✨ Características

- ⚛️ **React 18** com TypeScript
- 🎨 **CSS Modules** para estilos organizados
- 🎯 **Tailwind CSS** para utilitários
- 📱 **Design Responsivo** para todos os dispositivos
- 🧩 **Componentes Modulares** e reutilizáveis
- 🛡️ **Type Safety** completo com TypeScript
- ⚡ **Vite** para desenvolvimento rápido

## 🏗️ Estrutura do Projeto

```
src/
├── components/           # Componentes React
│   ├── HeaderSection/    # Cabeçalho da aplicação
│   ├── FooterSection/    # Rodapé com links e redes sociais
│   ├── DescriptionSection/ # Seção de descrição principal
│   ├── LoginOptionsSection/ # Opções de login
│   ├── SubjectsSection/  # Seção de disciplinas/cursos
│   └── ui/              # Componentes UI reutilizáveis
├── pages/               # Páginas da aplicação
├── types/               # Definições de tipos TypeScript
└── utils/               # Funções utilitárias
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js 16+ 
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone https://github.com/ArthurSilva902/codequest.git

# Entre na pasta do projeto
cd codequest

# Instale as dependências
npm install

# Execute o projeto
npm run dev
```

### Scripts Disponíveis
```bash
npm run dev      # Executa em modo desenvolvimento
npm run build    # Gera build de produção
npm run preview  # Visualiza o build de produção
```

## 🎨 CSS Modules

Este projeto usa **CSS Modules** com a sintaxe `className={styles.container}`:

```tsx
import styles from "./Component.module.css";

const Component = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Título</h1>
    </div>
  );
};
```

## 📱 Componentes

### HeaderSection
- Logo da aplicação
- Navegação principal
- Campo de busca
- Botões de login/registro

### FooterSection
- Links organizados por categoria
- Ícones de redes sociais
- Informações de contato
- Copyright

### DescriptionSection
- Título principal
- Descrição da plataforma
- Texto customizável via props

### LoginOptionsSection
- Opções de login (Google, GitHub, etc.)
- Design responsivo
- Imagem ilustrativa

### SubjectsSection
- Grid de disciplinas/cursos
- Cards interativos
- Ícones personalizados
- Hover effects

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca de interface
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS
- **CSS Modules** - Estilos com escopo
- **Lucide React** - Ícones
- **React Router** - Roteamento

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 📞 Contato

- **GitHub**: [@ArthurSilva902](https://github.com/ArthurSilva902)
- **Repositório**: [CodeQuest](https://github.com/ArthurSilva902/codequest)

---

Desenvolvido com ❤️ por [Arthur Silva](https://github.com/ArthurSilva902)