function handleDiscountBooks (books) {
    const discount = 0.3
    livrosDiscount = books.map(books => {
        return {...books, preco: books.preco - (books.preco * discount)}
    })
    return livrosDiscount
}