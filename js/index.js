const inputValue = document.querySelector('.converter__input-rub');
const inputResult = document.querySelector('.converter__input-result');
const selectedCurrency = document.querySelector('.converter__currency');

function getInputData() {
    return {
        rub: Number(inputValue.value),
        currency: selectedCurrency.value
    }
}

function getConvertedResult() {
    const currentSelectedCurrency = selectedCurrency.value;
    const result = calculteCurrency(getInputData());

    renderResult(inputResult, result, currentSelectedCurrency);
}


inputValue.addEventListener('input', () => {
    getConvertedResult();
});

selectedCurrency.addEventListener('change', () => {
    getConvertedResult();
});