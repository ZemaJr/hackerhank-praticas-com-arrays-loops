function solucao(resultados) {
  let somaPontos = 0;
  for (const letra of resultados) {
    somaPontos += letra == "V" ? 3 : letra == "E" ? 1 : 0;
  }
  console.log(somaPontos);
}

const resultados = ["V", "E", "V", "E"];

solucao(resultados);
