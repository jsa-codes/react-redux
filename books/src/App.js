import {useState} from 'react'

export const App = () => {
    const [books, setBooks] = useState([])
    return <div>App</div>
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