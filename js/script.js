$('.cpf').mask('000.000.000-00', {reverse: true});
$('.kmkm').mask('000.000.000', {reverse: true});
$('.licence').mask('AAA-0A00');

function disableTextS() {
    $('body').css('-webkit-user-select','none');
    $('body').css('-moz-user-select','none');
    $('body').css('-ms-user-select','none');
    $('body').css('-o-user-select','none');
    $('body').css('user-select','none');
}

disableTextS();
