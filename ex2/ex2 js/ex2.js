function verificaNumero(n){
  if (n % 2 === 0) {
    console.log("O número é par");
  } else {
    console.log("O número é ímpar");
  }

  if (n >= 0) {
    console.log("O número é positivo");
  } else {
    console.log("O número é negativo");
  }
}
verificaNumero(-5);