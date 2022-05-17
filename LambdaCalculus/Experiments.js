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