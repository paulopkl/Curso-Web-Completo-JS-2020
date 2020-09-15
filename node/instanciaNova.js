// Uma factory retorna um nobo objeto
module.exports = () => {
    return {
        valor: 1,
        inc(){
            this.valor++
        }
    }
}