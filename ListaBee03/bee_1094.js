import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const N = Number(input(''))
    let Quantia = []
    let Tipo = []
    let cont = 0

    while (cont < N) {
        [Quantia[cont], Tipo[cont]] = input("").split(" ")
        cont++
    }

    const [qtd_ratos, qtd_coelhos, qtd_sapos] = contar_animais(Tipo, Quantia)
    console.log(qtd_ratos, qtd_coelhos, qtd_sapos)


}
main()

function contar_animais(tipos, quantia) {
    let qtd_ratos = 0
    let qtd_sapos = 0
    let qtd_coelhos = 0
    for (let index in tipos) {
        if (tipos[index] = 'R') {
            qtd_ratos += Number(quantia[index])
        } else if (tipos[index] = 'S') {
            qtd_sapos += Number(quantia[index])
        } else if (tipos[index] = 'C') {
            qtd_coelhos += Number(quantia[index])
        }
    }

    return [qtd_ratos, qtd_coelhos, qtd_sapos]
}