var vidas = 6;
var arrPalavra = ['a', 'b', 'a', 'c', 'a', 'x', 'i']
var letrasAcertadas = ['_', '_', '_', '_', '_', '_', '_'];
var letrasChutadas = [];
var estadoAtual = [];
var arrEstado = ['aguardando chute', 'ganhou', 'perdeu'];


class Forca {


  chutar(letra) {
    letra = letra.toLowerCase();
    if (letra.length == 1) { 
  
   {
    if(arrPalavra.includes(letra)) {
    
      var index = arrPalavra.indexOf(letra);
        while (index != -1){
       letrasAcertadas[index] = letra;
       index = arrPalavra.indexOf(letra, index+1);
        }
  }
    else if (letrasChutadas.includes(letra) || letrasAcertadas.includes(letra)){
      estadoAtual = arrEstado[0];

    }
     else {
      vidas--;
      }
    }
letrasChutadas.push(letra)

  }
}
  buscarEstado() { 
    if (vidas === 0){
      estadoAtual = arrEstado[2];
    }
    else if (letrasAcertadas.includes('_')){
      estadoAtual = arrEstado[0];
    }
    else {
      estadoAtual = arrEstado[1];;
    }
    
    return estadoAtual; } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
      return {
          letrasChutadas, // Deve conter todas as letras chutadas
          vidas, // Quantidade de vidas restantes
          letrasAcertadas, // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }
  }

module.exports = Forca;