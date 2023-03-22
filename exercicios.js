// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = parseFloat(prompt('qual a altura do retangulo?'));
  const largura = parseFloat(prompt('qual a largura do retangulo?'));
  const area = altura * largura;
  console.log(area);
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const cYear = parseFloat(prompt('qual o ano atual?'));
  const bYear = parseFloat(prompt('qual seu ano de nascimento?'));
  const idade = cYear - bYear;
  console.log(idade);

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc = peso / (altura * altura);
  return imc;

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt('qual seu nome?');
  const idade = prompt('qual sua idade?');
  const email = prompt('qual seu email?');

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt('insira uma cor');
  const cor2 = prompt('insira outra cor');
  const cor3 = prompt('insira mais uma cor');

  cores = [cor1, cor2, cor3];

  console.log(cores);


}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const upper = string.toUpperCase()

  return upper;

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const valor = custo / valorIngresso;
  return valor

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const igual = (string1.length === string2.length)

  return igual;

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const first = array[0];

  return first;

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const last = array[array.length - 1];

  return last;
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let swap = array.splice(array.length - 1, 1, array[0])[0];
  array[0] = swap


  return array;
}


// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const check = (string1.toLowerCase() === string2.toLowerCase());

  return check

}

// EXERCÍCIO 13

function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const cYear = Number(prompt('qual é o ano atual?'));
  const bYear = Number(prompt('qual é o seu ano de nascimento?'));
  const emission = Number(prompt('qual o ano de emissão do seu rg?'));

  const age = cYear - bYear;
  
  const renew = ((age <= 20 && cYear - emission >= 5) || (age >= 21 && age <= 50 && cYear - emission >= 10) || (age >= 51 && cYear - emission >= 15));
  
  console.log(renew);

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const conditions = ((ano % 4 === 0) && (ano % 100 !== 0) || (ano % 400 === 0));

  return conditions;

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const idade = prompt('você tem mais de 18 anos?');
  const em = prompt('você possui ensino medio completo?');
  const hora = prompt('você está disponivel durante os horarios do curso?');

  const result = (idade === 'sim' && em === 'sim' && hora === 'sim');

  console.log(result);
  return result

};

