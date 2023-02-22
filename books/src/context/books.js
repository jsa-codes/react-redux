import { useState, createContext } from 'react';
import axios from 'axios'

// Use the createContext function to create a context object
const BooksContext = createContext()

// Create the custom Provider.
function Provider({ children }) {

    const [books, setBooks] = useState([])

    // GET all books
    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books')

        setBooks(response.data)
    }

    // UPDATE book by id
    const editBookById = async (id, newTitle) => {

        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            // BODY of the request
            title: newTitle
        })

        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                // Take all the different properties (aka - response.data = "key: value pairs") from the book object, and add it to the book object
                return { ...book, ...response.data }
            }
            return book
        })
        setBooks(updatedBooks)
    }

    // CREATE a Book
    const createBook = async (title) => {

        const response = await axios.post('http://localhost:3001/books', {
            title
        })

        // Take all of the books, add them into this brand new array, and then add in the data from the response to the very end of it.
        const updatedBooks = [...books, response.data]
        setBooks(updatedBooks)
    }

    // DELETE by by id
    const deleteBookById = async (id) => {

        await axios.delete(`http://localhost:3001/books/${id}`)

        const updatedBooks = books.filter((book) => {
            return book.id !== id
        })

        setBooks(updatedBooks)
    }

    // SHARING STATE
    const valueToShare = {
        books,
        fetchBooks,
        createBook,
        editBookById,
        deleteBookById
    }

    // Context Object uses the built in Context Provider to share the state throughout the Application
    return (
        <BooksContext.Provider value={ valueToShare }>
            {children}
        </BooksContext.Provider>
    )
}

// Named export
export { Provider }
// Default export
export default BooksContext


