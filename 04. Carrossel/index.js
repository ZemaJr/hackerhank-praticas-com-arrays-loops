function solucao(sequencia) {
  let cliques = 0;

  for (const clique of sequencia) {
    clique == ">" ? cliques++ : cliques--;
    cliques == -1 ? (cliques = 6) : cliques;
    cliques == 7 ? (cliques = 0) : cliques;
  }

  console.log(cliques);
}

// const sequencia = ">>><>";
// const sequencia = ">";
// const sequencia = "<";
const sequencia = ">>>>>>>>>";

solucao(sequencia);
