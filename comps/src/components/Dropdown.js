import { useState } from 'react'
import { GoChevronDown } from 'react-icons/go'
import Panel from './Panel'


function Dropdown({ options, value, onChange }) {

    const [isOpen, setIsOpen] = useState(false)

    // This function is called when we click on a dropdown
    //  The value of isOpen is then set to true
    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    // This function is called when we click on a dropdown item
    //    - When a user clicks on an item in the dropdown, the onChange event is fired setting the value of the selection and the closes the dropdown by setting it back to false
    const handleOptionClick = (option) => {
        // Close the dropdown
        setIsOpen(false)
        // Set the option the user clicked on
        onChange(option)
    }


    const renderedOptions = options.map((option) => {
        return (
            <div className='hover:bg-sky-100 rounded cursor-pointer p-1' onClick={() => handleOptionClick(option)} key={option.value}>
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
        <div className='w-48 relative'>
            <Panel className='flex justify-between items-center cursor-pointer' onClick={handleClick}>
                {value?.label || 'Select...'} <GoChevronDown className='text-lg' />
            </Panel>
            {isOpen && <Panel className='absolute top-full'>{renderedOptions}</Panel>}
        </div>
    )
}

export default Dropdown


