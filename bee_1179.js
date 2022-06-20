import fs from 'fs'
const input = fs.readFileSync('bee_1179_input.txt', 'utf-8')
const lines = input.split('\n').map(Number)
    //errada
function main() {
    const array_par = []
    const array_impar = []
    for (let i = 0; i < 15; i++) {
        for (let cont = 0; cont < 5; cont++) {
            if (lines[cont] % 2 === 0) {
                array_par[1] = lines[cont]
            } else {
                array_impar[cont] = lines[cont]
            }
            cont == 4 ? cont = 0 : cont = cont
        }

        if (array_par.length == 5) {
            console.log(`par[${i}] = ${array_par[i]}`)
        } else {
            console.log(`impar[${i}] = ${array_impar[i]}`)
        }
    }

}
main()