<template>
    <div class="calculator">
        <Display :value="displayValue" />
        <Button label="AC" triple @onClick="clearMemory" />
        <Button label="/" operation @onClick="setOperation" />
        <Button label="7" @onClick="addDigito" />
        <Button label="8" @onClick="addDigito" />
        <Button label="9" @onClick="addDigito" />
        <Button label="*" operation @onClick="setOperation" />
        <Button label="4" @onClick="addDigito" />
        <Button label="5" @onClick="addDigito" />
        <Button label="6" @onClick="addDigito" />
        <Button label="-" operation @onClick="setOperation" />
        <Button label="1" @onClick="addDigito" />
        <Button label="2" @onClick="addDigito" />
        <Button label="3" @onClick="addDigito" />
        <Button label="+" operation @onClick="setOperation" />
        <Button label="0" double @onClick="addDigito" />
        <Button label="." @onClick="addDigito" />
        <Button label="=" operation @onClick="setOperation" />
    </div>
</template>

<script>
import Display from '../components/Display';
import Button from '../components/Button';

export default {
    data: function () {
        return {
            displayValue: "0",
            clearDisplay: false,
            operation: null,
            values: [0, 0],
            current: 0
        }
    },
    components: { Button, Display },
    methods: {
        clearMemory() {
            Object.assign(this.$data, this.$options.data()) // Dentro dessa opção você tem o estado 
            // inicial do Objeto. Ele volta ao estado inicial
        },
        setOperation(operation) {
            if (this.current === 0) {
                this.operation = operation;
                this.current = 1;
                this.clearDisplay = true;
            } else {
                const equals = operation === "=";
                const currentOperation = this.operation;

                try {
                    this.values[0] = eval(`${this.values[0]} ${currentOperation} ${this.values[1]}`);
                } catch(erro) {
                    this.$emit('onError', erro);
                }

                this.values[1] = 0;

                this.displayValue = this.values[0];
                this.operation = equals ? null : operation;
                this.current = equals ? 0 : 1;
                this.clearDisplay = !equals;
            }
        },
        addDigito(n) {
            if (n == '.' && this.displayValue.includes('.')) {
                return 
            }

            const clearDisplay = this.displayValue === "0" || this.clearDisplay;
            const currentValue = clearDisplay ? "" : this.displayValue;
            const displayValue = currentValue + n;

            this.displayValue = displayValue;
            this.clearDisplay = false;

            // Alternativa 1
            this.values[this.current] = displayValue;

            // Alternativa 2
            // if (n !== '.') {
            //     const i = this.current;
            //     const newValue = parseFloat(displayValue);
            //     this.values[i] = newValue
            // }
        }
    }
}
</script>

<style>
    .calculator {
        height: 320px;
        width: 235px;
        border-radius: 5px;
        overflow: hidden;

        display: grid;
        grid-template-columns: repeat(4, 25%);
        grid-template-rows: 1fr 48px 48px 48px 48px 48px;
    }
</style>