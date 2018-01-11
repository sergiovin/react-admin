// ./src/actions/bookActions.js
export const createBook = (book,descr) => {
    console.log(2);
    console.log(descr);
    // Return action
    return {
        // Unique identifier
        type: 'CREATE_BOOK',
        // Payload
        book: book
    }
};