function solucao(notas) {
  let maiorNumero = notas[0];
  let menorNumero = notas[0];
  for (const nota of notas) {
    if (nota > maiorNumero) {
      maiorNumero = nota;
    }
    if (nota < menorNumero) {
      menorNumero = nota;
    }
  }
  notas.splice(notas.indexOf(maiorNumero), 1);
  notas.splice(notas.indexOf(menorNumero), 1);
  let somaDasNotas = 0;
  for (const nota of notas) {
    somaDasNotas += nota;
  }
  let mediaDasNotas = somaDasNotas / notas.length;
  console.log(mediaDasNotas);
}

const notas = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100];
// const notas = [100, 100, 100, 50];

solucao(notas);
