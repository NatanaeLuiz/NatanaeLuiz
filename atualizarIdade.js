const fs = require('fs');

// 🗓️ Coloque seu ano de nascimento aqui:
const anoNascimento = 1997;

// 🧮 Calcula a idade com base no ano atual
const idadeAtual = new Date().getFullYear() - anoNascimento;

// 📄 Lê o conteúdo atual do README.md
const caminho = 'README.md';
let conteudo = fs.readFileSync(caminho, 'utf8');

// 🔄 Substitui a linha que começa com "- Idade: " e um número
conteudo = conteudo.replace(/- Idade: \d+/, `- Idade: ${idadeAtual}`);

// 💾 Salva o arquivo com a idade atualizada
fs.writeFileSync(caminho, conteudo);

console.log(`Idade atualizada para: ${idadeAtual}`);