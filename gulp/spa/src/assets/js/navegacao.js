(function () {
    function marcarLinkComoSelecionado(hashParam) {
        const links = document.querySelectorAll(`[wm-link]`)
        links.forEach(link => link.classList.remove('selecionado'))

        const link = document.querySelector(`[wm-link='${hashParam}']`)
        link.classList.add('selecionado')
    }

    function navegarViaAjax(hashParam) {
        if (!hashParam) return

        const link = document.querySelector(`[wm-link='${hashParam}']`)
        const destino = document.querySelector('[wm-link-destino]')

        const url = hashParam.substring(1);
        fetch(url)
            .then(resp => resp.text())
            .then(html => {
                destino.innerHTML = html
                marcarLinkComoSelecionado(hashParam);
            })
    }

    function configurarLinks() {
        document.querySelectorAll('[wm-link]')
            .forEach(link => {
                link.href = link.attributes['wm-link'].value
            })
    }

    function navegacaoInicial() {
        if (location.hash) {
            navegarViaAjax(location.hash)
        } else {
            const primeiroLink = document.querySelector('[wm-link]')
            navegarViaAjax(primeiroLink.hash)
        }
    }

    window.onhashchange = (e) => navegarViaAjax(location.hash);
    
    configurarLinks()
    navegacaoInicial()
})()