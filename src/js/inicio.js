function inicio () {
    const divConteudoInicial = document.createElement("div");
    divConteudoInicial.id = "conteudo_inicio";
    const h2 = document.createElement("h2");
    h2.id = "h2Inicio";
    h2.innerText = "Bem vindo ao jogo";
    const h1 = document.createElement("h1");
    h1.id = "h1Inicio";
    h1.innerText = "GENIUS";
    const input = document.createElement("input");
    input.id = "inputIncio";
    input.placeholder = "Digite seu nome aqui";
    const button = document.createElement("button");
    button.id = "botaoInicio";
    button.innerText = "INICIAR JOGO";

    body.appendChild(divConteudoInicial);
    divConteudoInicial.appendChild(h2);
    divConteudoInicial.appendChild(h1);
    divConteudoInicial.appendChild(input);
    divConteudoInicial.appendChild(button);
}

inicio();

button = document.getElementById("botaoInicio");

button.addEventListener('click', (e) => {    
    const divInicio = document.getElementById("conteudo_inicio");
    const input = document.getElementById("inputIncio").value;
    if(input !== ''){
        divInicio.removeAttribute('id', 'conteudo_inicio');
        divInicio.classList.add('hide');
        criarGenius(input);
    }else {
        alert("Para continuar digite seu nome!");
    }
})