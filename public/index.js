const nome01 = prompt("Insira o nome do primeiro personagem: ");
const atq01 = parseFloat(prompt("Insira seu poder de ataque : "));
const nome02 = prompt("Insira o nome do segundo personagem: ");
let vida02 = parseFloat(prompt("Insira seus pontos de vida : "));
const def02 = parseFloat(prompt("Insira seus pontos de defesa : "));
const escudo02 = prompt(nome02 + " " + "Possui escudo?");

alert(
  "Personagem 01\n" +
    "\nNome: " +
    nome01 +
    "\n Poder de ataque: " +
    atq01 +
    "\n" +
    "\nPersonagem 02\n" +
    "\nNome: " +
    nome02 +
    "\nPontos de Vida: " +
    vida02 +
    "\nPontos de Defesa: " +
    def02 +
    "\nEscudo: " +
    escudo02
);

if (atq01 > def02 && escudo02 == "Não") {
  var dano = atq01 - def02;
} else if (atq01 > def02 && escudo02 == "Sim") {
  var dano = (atq01 - def02) / 2;
} else {
  var dano = 0;
}
vida02 = vida02 - dano;

alert("Dano causado: " + dano);
alert(
  "Personagem 01\n" +
    "\nNome: " +
    nome01 +
    "\n Poder de ataque: " +
    atq01 +
    "\n" +
    "\nPersonagem 02\n" +
    "\nNome: " +
    nome02 +
    "\nPontos de Vida: " +
    vida02 +
    "\nPontos de Defesa: " +
    def02 +
    "\nEscudo: " +
    escudo02
);
