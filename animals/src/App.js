import './App.css'
import { useState } from 'react'
import AnimalShow from './AnimalShow'

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse']

    return animals[Math.floor(Math.random() * animals.length)]
}

function App() {

    const [animals, setAnimals] = useState([])
    /* 
        - this 'handleClick' function is aka Event Handler or Callback function.
        - It's going to be called automatically, at some future point in time, when the user clicks on something, or types, etc. It's called automatically by some other piece of code.
        - The name comes from 'handle' + Name of Function ('click') = 'handleClick'
    */
    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()])
    }

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index}/>
    })

    return (
        <div className='app'>
            {/* Whenever the button is clicked we are running the function 'handleClick 
                - Translates to: On the click of the button run the function 'handleClick'
        */}
            <button onClick={handleClick}>Add Animal</button>
            <div className='animal-list'>{renderedAnimals}</div>

        </div>
    )
}

export default App