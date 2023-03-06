import { useState } from 'react'


function Dropdown({ options, selection, onSelect }) {

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    const handleOptionClick = (option) => {
        // Close the dropdown
        setIsOpen(false)
        // Set the option the user clicked on
        onSelect(option)
    }

    const renderedOptions = options.map((option) => {
        return (
            <div onClick={() => handleOptionClick(option)} key={option.value}>
                {option.label}
            </div>
        )
    })

    // THIS CODE WAS REPLACED WITH THE CODE BELOW IN THE ONCLICK.
    // let content = 'Select...'
    // // If we don't have a selection we DO NOT enter the if statement
    // if (selection) {
    //     content = selection.label
    // }

    return (
        <div>
            <div onClick={handleClick}>
                {selection?.label || 'Select...'}
            </div>
            {isOpen && <div>{renderedOptions}</div>}
        </div>
    )
}

export default Dropdown


