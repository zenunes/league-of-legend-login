const inputs = document.querySelectorAll('.input');/*Essa linha é a declaração da variavel inputs, tudo dentro do input vai para "inputs"*/
const button = document.querySelector('.bnt-login');
const hardleFocus = ({target}) => {
    const span = target.previousElementSibling;
    span.classList.add('span-active');
}
const hardleFocusout = ({target}) => {

    if(target.value == ''){/*função if, se o target que é o input estiver vazio, então pode voltar ao estado anterior*/
    const span = target.previousElementSibling;
    span.classList.remove('span-active');
    }
}
const handleChange = () => {
    const [username, password] = inputs;

    if(username.value && password.value.length >= 8){
        button.removeAttribute('disabled');
    }else{
        button.setAttribute('disabled', '');
    }

}
inputs.forEach ((input) => input.addEventListener ('focus', hardleFocus)
);
inputs.forEach ((input) => input.addEventListener ('focusout', hardleFocusout)
);
inputs.forEach ((input) => input.addEventListener ('input', handleChange)
);
