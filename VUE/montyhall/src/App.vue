<template>
    <div id="app">
        <h1>Problema de Mounty Hall</h1>
        <div class="form">
            <div v-if="!started">
                 <label for="portsQuantidade">Quantas portas? </label>
                 <input type="text" id="portsQuantidade" size="3" v-model.number="portsQuantidade">
            </div>
            <div v-if="!started">
                <label for="selecionada">Qual porta é premiada? </label>
                <input type="text" id="selecionada" size="3" v-model.number="selecionada">
            </div>
            <button v-if="!started" @click="started = true">Iniciar</button>
            <button v-if="started" @click="started = false">Reiniciar</button>
        </div>
        <div class="doors" v-if="started">
            <div v-for="i in portsQuantidade" :key="i">
                <Door class="dooor" :hasGift="i === selecionada" :number="i" />
            </div>
        </div>
    </div>
</template>

<script>
import Door from './components/Door';

export default {
    name: 'App',
    components: { Door },
    data: function () {
        return {
            started: false,
            portsQuantidade: 3,
            selecionada: null
        }
    }
}
</script>

<style>

    * {
        box-sizing: border-box;
        font-family: 'Montserrat';
    }

    body {
        color: #fff;
        background: linear-gradient(to right, rgba(21, 153, 87), rgba(21, 87, 153));
    }

    #app {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #app h1 {
        border: 1px solid black;
        background-color: #0004;
        padding: 20px;
        margin-bottom: 60px;

    }

    .form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 40px;
    }

    .form, .form input, .form button {
        margin-bottom: 10px;
        font-size: 2rem;
    }

    .doors {
        align-self: stretch;
        display: flex;
        justify-content: space-around;

        flex-wrap: wrap;
    }
</style>