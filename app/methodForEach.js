const elementInsertBooks = document.getElementById("livros")
const elementTotalValue = document.getElementById("valor_total_livros_disponiveis");

function insertBooks (arrayBooks) {
    elementInsertBooks.innerHTML = ''
    elementTotalValue.innerHTML = ''
    arrayBooks.forEach(books => {
        let available = books.quantidade > 0 ? "livro__imagens" : "livro__imagens indisponivel"
        elementInsertBooks.innerHTML += `
        <div class="livro">
            <img class="${available}" src=${books.imagem} alt=${books.alt} />
            <h2 class="livro__titulo">
            ${books.titulo}
            </h2>
            <p class="livro__descricao">${books.autor}</p>
            <p class="livro__preco" id="preco">R$ ${books.preco.toFixed(2)}</p>
            <div class="tags">
            <span class="tag">${books.categoria}</span>
            </div>
      </div>
      `
    })
}