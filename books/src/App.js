import { useState } from 'react'
import { BookCreate } from './components/BookCreate'

export const App = () => {
    const [books, setBooks] = useState([])

    const createBook = (title) => {
        
    }


    return (<div>
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