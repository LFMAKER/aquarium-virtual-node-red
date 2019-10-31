$('#turnOffBtn').on( "click", function() {
    var luz = $('#luz');
    var luzAtual = $('#luz').attr('class');
    var fundo = $('#fundo');


    if(luzAtual == "iluminacao"){
        luz.removeClass('iluminacao');
        luz.addClass('iluminacaoOff');
        
        fundo.removeClass('tankBackground');
        fundo.addClass('tankBackgroundOff');

        console.log('Desligando...');
    }else{
        luz.removeClass('iluminacaoOff');
        luz.addClass('iluminacao');

        fundo.removeClass('tankBackgroundOff');
        fundo.addClass('tankBackground');

        console.log('Ligando...');
    }
  });