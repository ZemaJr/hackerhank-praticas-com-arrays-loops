function solucao(primeiraLetra, segundaLetra, palavras) {
  let nenhuma = false;
  for (const palavra of palavras) {
    if (palavra[0] == primeiraLetra && palavra[1] == segundaLetra) {
      console.log(palavra);
      nenhuma = true;
    }
  }
  if (!nenhuma) {
    console.log("NENHUMA");
  }
}

const primeiraLetra = "c";
const segundaLetra = "v";
const palavras = ["aveia", "manha", "ave"];

solucao(primeiraLetra, segundaLetra, palavras);
