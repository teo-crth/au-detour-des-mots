export const booksArray = [];

// Fonction pour ajouter des livres à booksArray
export const addBooksToArray = (newBooks) => {
    // On parcourt les nouveaux livres reçus
    newBooks.forEach((newBook) => {
        // Vérification si le livre existe déjà dans le tableau (par exemple avec un 'id' ou 'isbn')
        const exists = booksArray.some((book) => book.id === newBook.id); // Change 'id' en fonction de ton champ unique

        // Si le livre n'existe pas déjà dans le tableau, on l'ajoute
        if (!exists) {
            booksArray.push(newBook);
        }
    });

    console.log("Books added:", newBooks);
    console.log("Current books array:", booksArray);
};
