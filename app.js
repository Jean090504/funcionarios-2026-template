'use strict'

import funcionarios from "./funcionarios.json" with { type: "json" }

//Transformar os dados do JSON em elementos HTML para exibir na página
function criarCard(funcionario) {
    const card = document.createElement("div")
    card.classList.add("card")

    const foto = document.createElement("img")
    foto.src = `./img/${funcionario.imagem}`
    foto.alt = `Foto de ${funcionario.nome}`

    const nome = document.createElement("h3")
    nome.textContent = funcionario.nome

    const cargo = document.createElement("span")
    cargo.textContent = `Cargo: ${funcionario.cargo}`

    card.append(foto, nome, cargo)

    return card
}

const cards = funcionarios.map(criarCard)

document.getElementById('container').replaceChildren(...cards)




