function solucao(disparos) {
  let quantidadeDeDisparos = 0;
  for (const pontuacao of disparos) {
    if (pontuacao >= 70) {
      quantidadeDeDisparos++;
    }
  }
  console.log(quantidadeDeDisparos >= 3 ? quantidadeDeDisparos : "ELIMINADO");
}

const disparos = [0, 50, 90, 80, 100, 80, 40];

solucao(disparos);
