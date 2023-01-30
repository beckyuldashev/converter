const RATES = {
    'usd': 0.014,
    'eur': 0.015,
}

const CURRENCY_SYMBOLS = {
    'usd': '$',
    'eur': '€'
}

function calculteCurrency({
    rub,
    currency
}) {
    if (!RATES[currency]) {
        return null;
    }

    return rub * RATES[currency];
}

function renderResult(node, result, selectedCurrency, infoOutputNode) {
    let currencySymbol = CURRENCY_SYMBOLS[selectedCurrency];

    node.value = `${result.toFixed(2)}${currencySymbol}`;
}