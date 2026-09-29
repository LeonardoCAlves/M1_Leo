# 0_ | Preparando o ambiente

Antes de começar as aulas, conheça as ferramentas e prepare o computador para escrever e executar JavaScript.

<p align="center">
	<a href="../README.md">⬅️ README principal</a>
</p>

## Navegação rápida

| Ícone | Tópico | Acessar |
|:--:|---|---|
| 🟨 | JavaScript | [O que é](#javascript) · [Como instalar](#instalar-javascript) |
| 🟩 | Node.js | [O que é](#nodejs) · [Instalação](#instalar-nodejs) |
| 🧩 | Visual Studio Code | [O que é](#visual-studio-code) · [Instalação](#instalar-visual-studio-code) |
| 🚀 | Primeiro arquivo | [Executar](#executar-seu-primeiro-arquivo) |
| 📦 | Entrada de dados | [Preparar as aulas](#preparar-as-aulas-com-entrada-de-dados) |

## JavaScript

JavaScript (JS) é uma linguagem de programação. É muito usada para adicionar interatividade a páginas web e também para criar aplicações, ferramentas e serviços.

### Instalar JavaScript

JavaScript não precisa ser instalado separadamente para começar: os navegadores já incluem um mecanismo para executá-lo. Para executar arquivos JS pelo terminal, instale o Node.js, que fornece esse ambiente fora do navegador.

## Node.js

Node.js é um ambiente que executa JavaScript no computador ou em um servidor, sem depender do navegador. A instalação também inclui o npm, ferramenta usada para instalar pacotes e bibliotecas JavaScript.

### Instalar Node.js

1. Acesse o [site oficial do Node.js](https://nodejs.org/pt-br/).
2. Baixe a versão **LTS**, recomendada para a maioria das pessoas.
3. Abra o instalador e siga as etapas mantendo as opções padrão.
4. Abra um novo terminal no VS Code ou no PowerShell e confira a instalação:

```powershell
node --version
npm --version
```

Se os comandos mostrarem números de versão, o Node.js e o npm estão disponíveis.

## Visual Studio Code

O Visual Studio Code (VS Code) é um editor para escrever e organizar código, abrir pastas de projetos e usar um terminal integrado. Ele não executa JavaScript sozinho; neste curso, usaremos o Node.js para rodar os arquivos `.js`.

### Instalar Visual Studio Code

1. Acesse o [site oficial do Visual Studio Code](https://code.visualstudio.com/Download).
2. Baixe o instalador para Windows.
3. Execute o instalador e siga as etapas recomendadas.
4. Abra o VS Code e selecione **Terminal > Novo Terminal** para abrir o terminal integrado.

## Executar seu primeiro arquivo

1. Abra a pasta deste repositório no VS Code.
2. Crie um arquivo chamado `primeiro.js` e escreva:

```javascript
console.log("JavaScript pronto para uso!");
```

3. No terminal do VS Code, execute:

```powershell
node primeiro.js
```

Se a mensagem aparecer no terminal, seu ambiente está pronto.

## Preparar as aulas com entrada de dados

Alguns exemplos usam o pacote `prompt-sync` para receber dados digitados no terminal. Na pasta principal do repositório, instale-o uma vez:

```powershell
npm install prompt-sync
```

Depois, execute os arquivos das aulas com Node.js a partir da pasta principal. Por exemplo:

```powershell
node .\02_aula\variaveis.js
```

## Resumo

- **JavaScript** é a linguagem de programação.
- **Node.js** executa JavaScript fora do navegador e inclui o npm.
- **VS Code** é o editor onde escrevemos e organizamos o código.