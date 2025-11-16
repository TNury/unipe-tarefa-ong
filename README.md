# GiveLife - ONG

Projeto desenvolvido para a disciplina de Desenvolvimento Front-End para a web do curso de Análise e Desenvolvimento de Sistemas da Unipê.

## Sobre o Projeto

Site institucional de uma ONG com foco em voluntariado e doações, desenvolvido com HTML5, CSS3 e JavaScript puro.

## Scripts Disponíveis

```bash
# Build completo (minificação de HTML, CSS e JS)
npm run build

# Build individual
npm run build:html
npm run build:css
npm run build:js
```

## Tecnologias

- HTML5
- CSS3
- JavaScript (ES6+)
- `html-minifier-terser` para minificação de HTML
- `clean-css-cli` para minificação de CSS
- `terser` para minificação de JavaScript

## Páginas

- **index.html**: Página inicial com informações sobre a organização
- **projetos.html**: Projetos sociais, voluntariado e doações
- **cadastro.html**: Formulário de cadastro para voluntários
- **voluntarios.html**: Listagem de voluntários cadastrados

## Estrutura de Pastas

```
├── assets/          # Imagens e recursos visuais
├── cadastro/        # Página e scripts de cadastro
├── projetos/        # Página e scripts de projetos
├── voluntarios/     # Página e scripts de voluntários
├── utils/           # Utilitários compartilhados
├── dist/            # Arquivos otimizados para produção
└── design_system.css # Sistema de design
```

## Estrutura das Branches

```
├── main                         # Branch principal de desenvolvimento
├── production                   # Branch de produção
├── feature/nome-da-feature      # Branch de nova funcionalidade
├── fix/nome-da-fix              # Branch de correção de bugs
├── hotfix/nome-do-hotfix        # Branch de correção de bugs urgentes
└── chore/nome-do-chore          # Branch de tarefas de manutenção
```

## Git Flow

### 1. Crie sua branch

```
git switch production
git pull
git switch -c feature/nome-da-feature
git push --set-upstream origin feature/nome-da-feature
```

### 2. Abrir pull request

Após finalizar a contribuição, abra um pull request para a branch `main` e aguarde a aprovação do revisor.

### 3. Após o merge na `main`

Depois do merge na `main`, o revisor fará o merge da sua contribuição na branch `production` caso ela passe pelos testes de qualidade.
