function solucao(stringCorrompida) {
  const caracteresCorrompidos = "!@#$%&*().";
  let dadoPurificado = "";

  for (const caracter of stringCorrompida) {
    let existe = false;

    for (const caracterCorrompido of caracteresCorrompidos) {
      if (caracter == caracterCorrompido) {
        existe = true;
        break;
      }
    }

    if (!existe) {
      dadoPurificado += caracter;
    }
  }
  console.log(dadoPurificado);
}

solucao("*Canis %lupus )familiaris");
