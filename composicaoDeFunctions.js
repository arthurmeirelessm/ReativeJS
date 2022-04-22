/*const notes = [5.7, 7.6, 6.7, 5.7, 7.0, 7.8, 9.0 ]


const somar = (a, b) => a + b
const dividir = (a, b) => a / b


const media = dividir(notes.reduce(somar), notes.length)

console.log(media)*/

//Imperative Method
/*const students = [
    {name: 'Ana', note: 5.0,},
    {name: 'Arthur', note: 9.0},
    {name: 'Caio', note: 6.0},
]

function run(students) {
    const approved = []
    for (let i = 0; i < students.length; i++) {
        if (alunos[i].note >= 7.0) {
            approved.push(alunos[i])
        }
    }
    return 'No student approved'
}
console.log(run(students))*/



//Declarative method

/*const students =   [
    {name: 'Ana', note: 5.0,},
    {name: 'Arthur', note: 9.0},
    {name: 'Caio', note: 6.0},
]

const isApproved = students => students.note >= 7

const approveds = students.filter(isApproved)

console.log(approveds)  

*/




function fn5() {
    fn3() 
 } 

function fn4() {
    fn5() 
 } 

function fn3() {
    setTimeout(() => console.log('timeout'), 7000) 
    console.log("DVERFGBRERBR")
    fn4()
    
} 
function fn2() {
   fn3() 
} 
function fn1() {
    fn2()
} 

function main() {
   fn1()
}

main()
console.log('Fim!')