import { createContext, useState } from 'react';

// Use the createContext function to create a context object
const BooksContext = createContext()

function Provider({ children }) {
    const [count, setCount] = useState(5)

    // An object that we can share with the rest of our application
    // The value of 'count' 
    // And an object called incrementCount that has a value of a function, that when called will call setCount, which will increment the count by one.
    const valueToShare = {
        // Because value and key are the same, we can condense it down to just 'count'
        count,
        incrementCount: () => {
            setCount(count + 1);
        },
    }

    return (
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    )
}

// Named export
export { Provider }
// Default export
export default BooksContext