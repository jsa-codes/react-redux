import { useState, useEffect } from 'react'
import axios from 'axios'
import { BookCreate } from './components/BookCreate'
import { BookList } from './components/BookList'

export const App = () => {

    const [books, setBooks] = useState([])

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books')

        setBooks(response.data)
    }

    useEffect(() => {
        fetchBooks()
    }, [])

    const editBookById = (id, newTitle) => {
        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, title: newTitle }
            }
            return book
        })
        setBooks(updatedBooks)
    }

    const deleteBookById = (id) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== id
        })

        setBooks(updatedBooks)
    }

    const createBook = async (title) => {

        const response = await axios.post('http://localhost:3001/books', {
            title
        })


        // Take all of the books, add them into this brand new array, and then add in the data from the response to the very end of it.
        const updatedBooks = [...books, response.data]
        setBooks(updatedBooks)
    }


    return (
        <div className='app'>
            <h1>Reading List</h1>
            <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
            <BookCreate onCreate={createBook} />
        </div>)
}


/* 
COMPONENTS
1) BookCreate
2) BookList
3) BookShow
4) BookEdit

-----------------
HIERARCHY:

APP
    - BookCreate
    - BookList: Displays the number of books
        - BookShow, BookShow, BookShow
            - BookEdit


*/


/* 
ADD NEW COLOR : EXAMPLE (Adding new color to the end of the colors array)
- You can also add the new color to the beginning of the colors array by 
    placing the new color before the colors array
    newColor, ...colors
    
function App() { 
    const [colors, setColors] = useState([])

    const addColor = (newColor) => {
        updatedColors = [
        ...colors, newColor
        ]
        setColors(newColors)
    }
}

*/

