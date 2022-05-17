let r

const I = (a, b) => b * a - a

r = I(3, 9)

r

// ---------------------------------------------------------

let c

const O = (a) => a

r = O(3)

r


r = O(O) 
r


const PRI = a => b => a



r = PRI(7)(11)

r


const ULT = a => b => b


c = ULT(23)(78)


c


const TROCA =  f => a => b => f(b)(a)

c = TROCA(ULT)(45)(68)

c


const T = true
const F = false




const valdation = F ? "TRUE" : "FALSE"



valdation

// ------------------------------------------------------------------------

const VERDADEIRO = PRI
const FALSO = ULT


VERDADEIRO.inspect = () => "Verdadeiro (PRI)"
FALSO.inspect = () => "False (ULT)"


VERDADEIRO
FALSO




//NO

console.log(PRI)
const NOT = a => PRI(a)(FALSO)

o = NOT(FALSO)

o


//AND



const AND = a => b => a(b)(FALSO)

o = AND(VERDADEIRO)(VERDADEIRO)

o