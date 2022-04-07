const body = document.getElementById("body");

function criarGenius (nome) {
    const divPrincipalGenius = document.createElement("div");
    divPrincipalGenius.id = "conteudo_principal";
    
    const divVerdeVermelho = document.createElement("div");
    divVerdeVermelho.id = "verde_vermelho";
    const divVerde = document.createElement("div");
    divVerde.id = "verde";
    const divVermelho = document.createElement("div");
    divVermelho.id = "vermelho";

    const divAmereloAzul = document.createElement("div");
    divAmereloAzul.id = "amarelo_azul";
    const divAmarelo = document.createElement("div");
    divAmarelo.id = "amarelo";
    const divAzul = document.createElement("div");
    divAzul.id = "azul";

    const divCentro = document.createElement("div");
    divCentro.id = "centro";
    const h1Centro = document.createElement("h1");
    h1Centro.innerText = `Bem vindo ${nome}!`;

    body.appendChild(divPrincipalGenius);
    body.appendChild(divCentro);

    divPrincipalGenius.appendChild(divVerdeVermelho);
    divVerdeVermelho.appendChild(divVerde);
    divVerdeVermelho.appendChild(divVermelho);

    divPrincipalGenius.appendChild(divAmereloAzul);
    divAmereloAzul.appendChild(divAmarelo)
    divAmereloAzul.appendChild(divAzul);


    divCentro.appendChild(h1Centro);
}