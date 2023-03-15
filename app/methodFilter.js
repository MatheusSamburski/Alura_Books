const buttons = document.querySelectorAll(".btn")
buttons.forEach(btn => btn.addEventListener("click", filterBooks))

function filterBooks() {
    const elementButton = document.getElementById(this.id)
    const category = elementButton.value
    let booksFiltered = category == "disponivel" ? sortBooksAmount() : sortBooksCategory(category)
    insertBooks(booksFiltered)
    if (category == "disponivel") {
        const valueTotal = calculateBooksAvailable(booksFiltered)
        displayValueTotal(valueTotal)
    }
}

function sortBooksCategory(category) {
    return books.filter(books => books.categoria == category)
}

function sortBooksAmount() {
    return books.filter(books => books.quantidade > 0)
}

function displayValueTotal(valueTotal) {
    elementTotalValue.innerHTML = `
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valueTotal}</span></p>
    </div>
  `
}