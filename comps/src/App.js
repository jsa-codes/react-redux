import { useState } from 'react'
import Dropdown from './components/Dropdown'

function App() {

    // Default value is null because by default nothing is selected
    const [selection, setSelection] = useState(null)


    // The option the user selected is passed in as the argument
    const handleSelect = (option) => {

        // Update our selection piece of state
        setSelection(option)
    }

    const options = [
        { label: 'Red', value: 'red' },
        { label: 'Green', value: 'green' },
        { label: 'Blue', value: 'blue' },
    ]

    return (
    <div className='flex'>
        <Dropdown options={options} value={selection} onChange={handleSelect}/>
        <Dropdown options={options} value={selection} onChange={handleSelect}/>
    </div>
    )

}

export default App



