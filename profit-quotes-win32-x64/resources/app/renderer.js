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
        'Instrução dura... Combate fácil <br> <h6>Hard instruction ... Easy combat.</h6>',
        'Que nunca por vencidos se conheçam <br> <h6>That never by losers be know.</h6>',
        'Seguros e confiantes... Sempre! <br> <h6>Insurance and confident. Always!</h6>',
        'Podemos não voltar, mas vamos <br> <h6>We may not come back, but we go.</h6>',
        'Als k werk als programeur kan k bijna elke vrouw hebben.',
        'Se nao a tratas bem, <br> Ha quem a trate.',
        'Do not go where the path may lead, <br> go instead where there is no path and leave a trail. <br> <br> <h6>"Ralph Waldo Emerson"</h6>',
        'Allways use the AIDA model, <br> which stands for "Atention, Interest, Desire and Action". <br> <br> <h6> ===== Fiverr ===== </h6>',
        'Giving a detailed, <br> personalized response in a timely manner shows that you’ve listened to the Buyer’s request, <br> and you’re not reciting a canned response. <br> <br> <h6> ===== Fiverr ===== </h6>',
        'If you fail to plan, You plan to fail. <br> <h6> ===== Fiverr ===== </h6>',
        'Always dress for success. <br> Get dressed for freelance work as if you were going to an office. <br> You will feel more in step with your work, and perform better. <br> <br> <h6> ===== Fiverr ===== </h6>',
        'An organized, <br> dedicated workspace where your surroundings are in order is a great way to feel relaxed, <br> comfortable and focused.<br> <br> <h6> ===== Fiverr ===== </h6>',
        'A vida é dura para quem é mole.'
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

    /*
    * Window close
    */
    var ipc = require('ipc');

    var closeEl = document.querySelector('.close');
    closeEl.addEventListener('click', function () {
        ipc.send('close-main-window');
    });

});
