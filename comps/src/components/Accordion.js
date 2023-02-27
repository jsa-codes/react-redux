import {useState} from 'react'

function Accordion({items}) {

    const [expandedIndex, setExpandedIndex] = useState(0)

    const renderedItems = items.map((item, index) => {

        const isExpanded = index === expandedIndex 
        /* 
            - Create a new div called 'content'
                - IF 'isExpanded' is truthy THEN we are going to get back the last truthy value
        */

        const icon = <span>{isExpanded ? "DOWN" : "ARROW"}</span>
        return (
            <div key={item.id}>
                <div onClick={() => setExpandedIndex(index)}>{icon}{item.label}</div>
                {isExpanded && <div>{item.content}</div>}
            </div>
        )
    })
    return <div>{renderedItems}</div>
}

export default Accordion 