import { useEffect, useContext } from 'react'
import BookCreate  from './components/BookCreate'
import BookList  from './components/BookList'
import BooksContext from './context/books'

function App() {

    // Destructuring fetchBooks from BooksContext
    const { fetchBooks } = useContext(BooksContext)

    useEffect(() => {
        fetchBooks()
    }, [])

    
    return (
        <div className='app'>
            <h1>Reading List</h1>
            <BookList />
            <BookCreate />
        </div>)
}

export default App


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

