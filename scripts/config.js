
let btnCalcular = document.querySelector('.c-button__calcular');
let showResultado = document.querySelector('.c-text__resultado');
let date = new Date();
let currentYear = date.getFullYear();


btnCalcular.addEventListener('click', () => {
    let inputIdade = document.querySelector('.c-input__idade');

    result = currentYear - inputIdade.value

    if (inputIdade.value > currentYear) {
        showResultado.innerHTML = `Erro: A idade informada é maior <br> que o ano atual ${currentYear}`
        showResultado.style.color = 'red'
    } else {
        showResultado.innerHTML = `A idade é: ${result} anos.`
        showResultado.style.color = 'yellow'
    }


    inputIdade.value = ''

    setTimeout(() => {
        showResultado.innerHTML = ''
    }, 6000);


})



