let buttonSortByPrice = document.getElementById('btnOrdenarPorPreco');
buttonSortByPrice.addEventListener("click", sortBooksByPrice)

function sortBooksByPrice() {
    let booksSort = books.sort((a, b) => a.preco - b.preco);
    insertBooks(booksSort)
}