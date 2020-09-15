(function () {
    function navegarViaAjax(cerquilha) {
        if (!cerquilha) return // Se cerquilha não existir retorne nulo

        const link = document.querySelector(`[wm-link='${cerquilha}']`) // Tudo que tem o atributo wm-link="cerquilha"
        if(!link) return // Se o link não existir retorne nulo

        const destino = document.querySelector('[wm-link-destino]') // Aquilo que tem o atributo wm-link-destino

        const url = cerquilha.substring(1) // Tudo que está fora do cerquilha
        fetch(url) // Ajax na URL
            .then(resp => resp.text()) // resposta vai ser um texto
            .then(html => { // Pegou o html
                destino.innerHTML = html // O html vai ser inserido na tag com o destino
                const resultado = html.match(/\<script\>([\s\S]*)\<\/script\>/);
                if(resultado && resultado.length >= 2){
                    eval(resultado[1]) // e a tag script vai ser executada
                }
            })
    }

    function configurarLinks() {
        document.querySelectorAll('[wm-link]').forEach(link => {
                link.href = link.attributes['wm-link'].value;
        })
    }

    function navegacaoInicial() {
        if (location.hash) {
            navegarViaAjax(location.hash);
        } else {
            const primeiroLink = document.querySelector('[wm-link]');
            navegarViaAjax(primeiroLink.hash);
        }
    }

    window.onhashchange = e => navegarViaAjax(location.hash);
    
    configurarLinks();
    navegacaoInicial();
})()