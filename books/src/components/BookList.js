import { BookShow } from './BookShow'

export const BookList = ({books, onEdit, onDelete}) => {
    
    const renderedBooks = books.map((book) => {
        return <BookShow onEdit={onEdit} key={book.id} book={book} onDelete={onDelete}/>
    })

    return <div className='book-list'>{renderedBooks}</div>
}
