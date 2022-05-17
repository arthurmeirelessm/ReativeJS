function run(input) {
    //cleanedInput remove todos os símbolos especiais, acentos e ao final converte para minúsculo o valor de input 
    const cleanedInput = input.normalize("NFD").replace(/[^\w\s]/gi, '').toLowerCase();
    const optionsRegex = {
        "regex 1": "titulo 1",
        "regex 2": "titulo 2",
        "regex 3": "titulo 3"
    };

    let data = null;
    for (let key in optionsRegex) {
        if (optionsRegex.hasOwnProperty(key)) {
            const matching = new RegExp(key, "i");

            if (matching.test(cleanedInput)) {
                data = optionsRegex[key];
            }
        }
    }

    if (data == null) {
        return 'input inesperado';
    }
    return data;
}


console.log('ti')