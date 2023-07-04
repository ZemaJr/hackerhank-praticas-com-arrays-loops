function solucao(letra, palavras) {
  let quantidadeDeCriancasQuePerderam = 0;

  for (const palavra of palavras) {
    if (palavra[0] != letra) {
      quantidadeDeCriancasQuePerderam++;
    }
  }
  console.log(quantidadeDeCriancasQuePerderam);
}

const letra = "m";
const palavras = ["mamao", "maca", "melao", "melancia", "laranja"];

solucao(letra, palavras);
