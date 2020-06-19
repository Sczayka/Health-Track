// Variaveis
const btnShowPass = document.querySelector('.btnShowPass')

// Funções
function showPass(){
    const inputPass = document.querySelector('#password')
    if(inputPass.type === 'password'){
        inputPass.setAttribute('type', 'text')
    }else{
        inputPass.setAttribute('type', 'password')
    }
    
}

// Events
btnShowPass.addEventListener('click', showPass)