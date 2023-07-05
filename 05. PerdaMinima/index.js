function solucao(precos) {
  let menorPrejuizo = Infinity;
  for (let i = 0; i < precos.length; i++) {
    for (let j = 0; j < precos.length; j++) {
      if (j > i) {
        if (precos[j] < precos[i]) {
          let diferenca = precos[i] - precos[j];
          if (diferenca < menorPrejuizo) {
            menorPrejuizo = diferenca;
          }
        }
      }
    }
  }
  console.log(menorPrejuizo);
}

// const precos = [5, 10, 3];
const precos = [30, 10, 54, 76, 1, 4, 35];

solucao(precos);
