function solucao(precos) {
  if (precos.length >= 5) {
    let menorPreco = precos[0];
    for (const valor of precos) {
      if (valor < menorPreco) {
        menorPreco = valor;
      }
    }
    precos.splice(precos.indexOf(menorPreco), 1);
  }
  let total = 0;
  for (const valor of precos) {
    total += valor;
  }
  console.log(total);
}

const precosDosProdutos = [50, 50, 50, 50, 100];

solucao(precosDosProdutos);
