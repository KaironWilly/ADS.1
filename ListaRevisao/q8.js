import prompt from 'prompt-sync'
const input = prompt({ sigint: false })

function main() {
    const valorHora = Number(input("Informe seu valor por hora trabalhada: R$"))
    const qtdHoras = Number(input("Informe sua quantidade de horas trabalhadas no mês: "))

    const salario = calcularSalario(valorHora, qtdHoras).toFixed(2)

    function calcularSalario(valor, tempo) {
        return valor * tempo
    }
}
main()