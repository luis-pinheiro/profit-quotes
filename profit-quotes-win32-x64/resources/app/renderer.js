$(document).ready(function(){

    var bgArray = [
        './img/1.jpg',
        './img/2.jpg',
        './img/3.jpg',
        './img/4.jpg',
        './img/5.jpg',
        './img/6.jpg',
        './img/7.jpg',
        './img/8.jpg',
        './img/9.jpg',
        './img/10.jpg',
        './img/11.jpg',
        './img/12.jpg',
        './img/13.jpg',
        './img/14.jpg',
        './img/15.jpg'
    ];

    var bg = bgArray[Math.floor(Math.random() * bgArray.length)];

    $('html').css('background', 'url(' + bg + ')');

    var items = [
        'Só Vence quem acredita na vitória <br> <h6>Only win who believes in victory.</h6>',
        'O suor poupa o sangue <br> <h6>Sweat saves blood.</h6>',
        'É perante o obstáculo, que o homem se descobre <br> <h6>Is faced with the obstacle, the man discovers himself.</h6>',
        'Se é possível está feito, se é impossível há-de fazer-se <br> <h6>If it is possible it is done, if it is impossible it will be done.</h6>',
        'Audácia, prudência... Caminho para o êxito <br> <h6>Audacity, prudence ... Path to success.</h6>',
        'Todos os páras são voluntários. Nem todos os voluntários conseguem a boina verde <br> <h6>All paratroopers are volunteers. Not all volunteers get the green beret.</h6>',
        'Instrução dura... Combate fácil <br> <h6>Hard instruction ... Easy combat.</h6>',
        'Que nunca por vencidos se conheçam <br> <h6>That never by losers be know.</h6>',
        'Deixa arder em ti a chama de ser Prec <br> <h6>Let burn in you de flame of being Airfield Precursor.</h6>',
        'Seguros e confiantes... Sempre! <br> <h6>Insurance and confident. Always!</h6>',
        'Podemos não voltar, mas vamos <br> <h6>We may not come back, but we go.</h6>',
        'O que somos?... Amigos! <br /> O que queremos?... Alvorada! <br /> O que amamos?... O perigo! <br /> O que tememos?... Nada! <br /> Em posição!... Já! <br> <h6>What are we? ... Friends! <br> What do we want? ... Dawn! <br> What do we love? ... The danger! <br> What do we fear? ... Nothing! <br> In position! ... Now!</h6>'
    ];

    var maxItems = items.length;


    function random(){
      var rnd = Math.floor(Math.random() * maxItems);
       document.getElementById("quote").innerHTML = items[rnd];
    }

    random(); 

    $("#btn-qt").click(function() { 
      bg = bgArray[Math.floor(Math.random() * bgArray.length)];
      $('html').css({'background-image':'url(' + bg + ')'}); 
      random();
    });

});

