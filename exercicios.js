/*
  2) Dado a sequência de Fibonacci, onde se inicia por O e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...),
  escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado
  pertence ou não a sequência.

  IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
*/

function isFibonacci(num, a = 0, b = 1) {
  if(num === 0 || num === 1) {
    return num + " pertence a sequencia de figonacci";
  }

  let nextNumber = a+b;

  if(nextNumber === num) {
    return num + " pertence a sequencia de figonacci";
  }
  else if(nextNumber > num) {
    return num + " não pertence a sequencia de figonacci";
  }

  return isFibonacci(num, b, nextNumber);
}

// Inserir abaixo um valor para validar se o número pertence a sequencia do fibonacci.
console.log(isFibonacci(4));

/*
  3) Dado um vetor que guarda O valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:

  • O menor valor de faturamento ocorrido em um dia do mês;
  • O maior valor de faturamento ocorrido em um dia do mês;

  Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.
  IMPORTANTE:
  a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
  b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
*/

data=[{"dia":1,"valor":22174.1664},{"dia":2,"valor":24537.6698},{"dia":3,"valor":26139.6134},{"dia":4,"valor":0.0},{"dia":5,"valor":0.0},{"dia":6,"valor":26742.6612},{"dia":7,"valor":0.0},{"dia":8,"valor":42889.2258},{"dia":9,"valor":46251.174},{"dia":10,"valor":11191.4722},{"dia":11,"valor":0.0},{"dia":12,"valor":0.0},{"dia":13,"valor":3847.4823},{"dia":14,"valor":373.7838},{"dia":15,"valor":2659.7563},{"dia":16,"valor":48924.2448},{"dia":17,"valor":18419.2614},{"dia":18,"valor":0.0},{"dia":19,"valor":0.0},{"dia":20,"valor":35240.1826},{"dia":21,"valor":43829.1667},{"dia":22,"valor":18235.6852},{"dia":23,"valor":4355.0662},{"dia":24,"valor":13327.1025},{"dia":25,"valor":0.0},{"dia":26,"valor":0.0},{"dia":27,"valor":25681.8318},{"dia":28,"valor":1718.1221},{"dia":29,"valor":13220.495},{"dia":30,"valor":8414.61}];
menorValorFaturamento=0;
i=0
Object.keys(data).forEach(function(prop) {
  if (data[prop].valor == 0) {
    return;
  } else if (i == 0) {
    menorValorFaturamento = data[prop].valor
  } else if (data[prop].valor < menorValorFaturamento ) {
    menorValorFaturamento = data[prop].valor;
  }
  i++;
});

console.log("O menor valor é: " + menorValorFaturamento);

/*
  4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

  SP - R$67.836,43
  RJ - R$36.678,66
  MG - R$29.229,88
  ES - R$27.165,48
  Outros - R$19.849,53

  Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.
*/

estados=[{"uf": "SP", valor:67836.43},{"uf": "RJ", valor:36678.66},{"uf": "MG", valor:29229.88},{"uf": "ES", valor:27165.48},{"uf": "Outros", valor:19849.53}];

// SOMANDO O TOTAL DOS ESTADOS
valorTotalEstado=0
Object.keys(estados).forEach(function(prop) {
  valorTotalEstado = valorTotalEstado + estados[prop].valor;
});

Object.keys(estados).forEach(function(prop) {
  console.log("Porcentagem de " + estados[prop].uf + ": " + (estados[prop].valor/valorTotalEstado)*100 + "%");
});

/*
  5) Escreva um programa que inverta os caracteres de um string. 
  IMPORTANTE:
  a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
  b) Evite usar funções prontas, como, por exemplo, reverse;
*/

var texto = "estou realizando um teste para a empresa target sistemas.";
var textoInvertido = [];
var k=0;
for (var i = texto.length; i >= 0; i--) {
    textoInvertido[k] = texto.charAt(i);
    k++;
}

console.log(textoInvertido.join(''));