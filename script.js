var nome = prompt("Qual é o nome da pessoa mais incrível do mundo?");
if (
  nome == "Gabi" ||
  nome == "gabi" ||
  nome == "Gabrieli" ||
  nome == "gabrieli" ||
  nome == "GABRIELI" ||
  nome == "GABI" ||
  nome == "Bibi" ||
  nome == "BIBI" ||
  nome == "bibi"
) {
  alert(
    "Você acertou! A pessoa mais incrível do mundo é o amor da minha vida!"
  );
} else if (
  nome == "Henrique" ||
  nome == "henrique" ||
  nome == "HENRIQUE" ||
  nome == "rique" ||
  nome == "Rique" ||
  nome == "RIQUE"
) {
  alert(
    "Você ta quase certo! A pessoa mais incrível do mundo é a minha gatinha Bibi e você mesmo!"
  );
} else {
  alert("Você errou! A pessoa mais incrível do mundo é a minha gatinha Bibi!");
}
function mudar() {
  document.getElementById("titulo").innerHTML = "EU TE AMOOOOOO MEU AMOR!";
}
