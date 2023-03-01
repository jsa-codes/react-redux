import { useState } from 'react'
import { GoChevronDown, GoChevronLeft } from 'react-icons/go'

function Accordion({ items }) {

    const [expandedIndex, setExpandedIndex] = useState(-1)

    const handleClick = (currentIndex) => {
        if (expandedIndex === currentIndex) {
            setExpandedIndex(-1)
        } else {
            setExpandedIndex(currentIndex)
        }
    }


    const renderedItems = items.map((item, index) => {

        // IF current index is equal to expandedIndex the set isExpanded to contain that item
        const isExpanded = index === expandedIndex


        // Toggling Panels: Lesson 184
        const icon = (
            <span className='text-2xl'>{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>
        )


        return (
            <div key={item.id}>
                <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
                    onClick={() => handleClick(index)}>
                    {item.label}
                    {icon}
                </div>
                {isExpanded && <div className='border-b p-5'>{item.content}</div>}
            </div>
        )
    })
    
    return <div className='border-x border-t rounded'>{renderedItems}</div>
}

export default Accordion

