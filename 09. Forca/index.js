function solucao(palpite, palavra) {
  let palpitesCertos = 0;
  for (const letra of palavra) {
    if (letra == palpite) {
      palpitesCertos++;
    }
  }
  console.log(palpitesCertos);
}

const palpite = "a";
const palavra = "abelha";

solucao(palpite, palavra);
