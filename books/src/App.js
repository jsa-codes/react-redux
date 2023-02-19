import { useState } from 'react'
import { BookCreate } from './components/BookCreate'
import { BookList } from './components/BookList'

export const App = () => {

    const [books, setBooks] = useState([])

    const editBookById = (id, newTitle) => {
        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, title: newTitle}
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

    const createBook = (title) => {
        const updatedBooks = [
            ...books, { 
                id: Math.round(Math.random() * 9999), 
                title 
            }
        ]
        setBooks(updatedBooks)
    }


    return (
    <div className='app'>
        <h1>Reading List</h1>
        <BookList onEdit={editBookById} books={books} onDelete={deleteBookById}/>
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

