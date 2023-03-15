let books = [];
const endPointApi = "https://guilhermeonrails.github.io/casadocodigo/livros.json";
getBooksFromApi();

async function getBooksFromApi () {
    const response = await fetch(endPointApi)
    books = await response.json()
    books = handleDiscountBooks(books)
    insertBooks(livrosDiscount)
}


