import BookShow from './BookShow'
import BooksContext from '../context/books'
import { useContext } from 'react'

function BookList({ books, onEdit, onDelete }) {

    const { count, incrementCount } = useContext(BooksContext)

    const renderedBooks = books.map((book) => {
        return <BookShow onEdit={onEdit} key={book.id} book={book} onDelete={onDelete} />
    })

    return (
        <div className='book-list'>
            {count}
            <button onClick={incrementCount}>Click It!</button>
            {renderedBooks}
        </div>
    )
}


export default BookList