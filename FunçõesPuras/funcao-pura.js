//UMA FUNÇÃO PURA É UMA FUNÇÃO EM QUE O VALOR
//DE RETORNO É DETERMINADO APENAS POR SEUS VALORES
//DE ENTRADA, SEM EFEITOS COLATERAIS OBSERVAVEIS



//ESSA FUNCTION ABAIXO É IMPURA POIS ESTA USANDO O VALOR DA VARIAL PI QUE É EXTERNA A FUNÇÃO


const PI = 3.14

function areaCirc(raio) {

    return raio * raio * Math.PI
}


console.log(areaCirc(10))



function areaCirc2(raio, pi) {

    return raio * raio * pi
}


console.log(areaCirc2(10, 3.14))

