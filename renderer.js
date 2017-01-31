// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var items = [
    'Só Vence quem acredita na vitória',
    'O suor poupa o sangue',
    'É perante o obstáculo, que o homem se descobre',
    'Se é possível está feito, se é impossível há-de fazer-se',
    'Audácia, prudência... Caminho para o êxito',
    'Todos os páras são voluntários. Nem todos os voluntários conseguem a boina verde',
    'Instrução dura... Combate fácil',
    'Que nunca por vencidos se conheçam',
    'Deixa arder em ti a chama de ser Prec',
    'Seguros e confiantes... Sempre!',
    'Podemos não voltar, mas vamos',
    'O que somos?... Amigos! <br /> O que queremos?... Alvorada! <br /> O que amamos?... O perigo! <br /> O que tememos?... Nada! <br /> Em posição!... Já!'



];

var maxItems = items.length;


function random(){
  var rnd = Math.floor(Math.random() * maxItems);
   document.getElementById("aantal").innerHTML = items[rnd];
}

random(); 
