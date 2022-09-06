function converterDolar() {
    var valorElementoDolar = document.getElementById('valor')
    var valorDolar = valorElementoDolar.value;
    var valorDolarFormatado = parseFloat(valorDolar);

    var valorDolarReal = valorDolar * 5.25;

    console.log(valorDolarReal);

    var elementoValorDolarConvertido = document.getElementById('valorConvertidoDolar');
    var valorConvertidoDolar = "O resultado em real é R$ " + valorDolarReal;
    elementoValorDolarConvertido.innerHTML = valorConvertidoDolar;
}

function converterEuro() {
    var valorElementoEuro = document.getElementById('valor')
    var valorEuro = valorElementoEuro.value;
    var valorEuroFormatado = parseFloat(valorEuro);

    var valorEuroReal = valorEuro * 5.20;

    console.log(valorEuroReal);

    var elementoValorEuroConvertido = document.getElementById('valorConvertidoEuro');
    var valorConvertidoEuro = "O resultado em real é R$ " + valorEuroReal;
    elementoValorEuroConvertido.innerHTML = valorConvertidoEuro;
}

function converterDirham() {
    var valorElementoDirham = document.getElementById('valor')
    var valorDirham = valorElementoDirham.value;
    var valorDirhamFormatado = parseFloat(valorDirham);

    var valorDirhamReal = valorDirham * 1.43;

    console.log(valorDirhamReal);

    var elementoValorDirhamConvertido = document.getElementById('valorConvertidoDirham');
    var valorConvertidoDirham = "O resultado em real é R$ " + valorDirhamReal;
    elementoValorDirhamConvertido.innerHTML = valorConvertidoDirham;
}

function converterBitcoin() {
    var valorElementoBitcoin = document.getElementById('valor')
    var valorBitcoin = valorElementoBitcoin.value;
    var valorBitcoinFormatado = parseFloat(valorBitcoin);

    var valorBitcoinReal = valorBitcoin * 242496.10;

    console.log(valorBitcoinReal);

    var elementoValorBitcoinConvertido = document.getElementById('valorConvertidoBitcoin');
    var valorConvertidoBitcoin = "O resultado em real é R$ " + valorBitcoinReal;
    elementoValorBitcoinConvertido.innerHTML = valorConvertidoBitcoin;
}