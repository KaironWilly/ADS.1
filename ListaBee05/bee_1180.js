import fs from 'fs'
const input = fs.readFileSync('bee_1180_input.txt', 'utf-8')
const lines = input.split('\n')
    //errada
function main() {
    const N = Number(lines[0])
    const X = lines[1].split(" ").map(Number)

    let [menor_valor, posicao] = pegar_menor_valor_e_posicao(X)

    console.log(`Menor valor: ${menor_valor}`)
    console.log(`Posicao: ${posicao}`)

}
main()

function pegar_menor_valor_e_posicao(vetor) {
    let menor_valor = 0,
        posicao = 0
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] === 0) {
            menor_valor = vetor[i]
            posicao = i
        } else {
            if (menor_valor > vetor[i]) {
                menor_valor = vetor[i]
                posicao = i
            }
        }


    }
    return [menor_valor, posicao]
}