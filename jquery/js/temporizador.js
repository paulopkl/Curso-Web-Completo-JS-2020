//
(function ($){
    $.fn.temporizador = function (opcoes) {
        const opcoesFinais = $.extend({
            mensagem: 'Em breve!!!',
            horario: '23:59:59'
        }, opcoes);

        function span(spa, met = 'span') {
            return $(`<${met} class="${spa}"></${met}>`);
        }

        const horaDezena = span("digito").html('0');
        const horaUnidade = span("digito").html('0');
        const minutoDezena = span("digito").html('0');
        const minutoUnidade = span("digito").html('0');
        const segundoDezena = span("digito").html('0');
        const segundoUnidade = span("digito").html('0');

        const separadorHora = span("separador").html(':');
        const separadorMinuto = span("separador").html(':');
        const mensagem = span("mensagem", "div").html(opcoesFinais.mensagem);

        $(this).addClass('temporizador');
        $(this).append(horaDezena, horaUnidade, separadorHora, minutoDezena, minutoUnidade, 
            separadorMinuto, segundoDezena, segundoUnidade, mensagem);

        const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/);

        const horarioAlvo = regex.exec(opcoesFinais.horario);
        // console.log(horarioAlvo);

        let temporizador = setInterval(() => {
            const agora = new Date();
            const alvo = new Date();
            alvo.setHours(horarioAlvo[1]);
            alvo.setMinutes(horarioAlvo[2]);
            alvo.setSeconds(horarioAlvo[3]);

            const diferencaEmMili = alvo.getTime() - agora.getTime();

            if(diferencaEmMili >= 0){
                const diferenca = regex.exec(new Date(diferencaEmMili).toISOString());
                console.log(diferenca);

                horaDezena.html(diferenca[1][0]);
                horaUnidade.html(diferenca[1][1]);
                minutoDezena.html(diferenca[2][0]);
                minutoUnidade.html(diferenca[2][1]);
                segundoDezena.html(diferenca[3][0]);
                segundoUnidade.html(diferenca[3][1]);
            } else {
                clearInterval(temporizador);
            }

        }, 1000);

        return this;
    }
})(jQuery);