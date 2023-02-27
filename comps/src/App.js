import Accordion from './components/Accordion'


function App() {

     const items = [
        {
            id: '2347t',
            label: 'Can I use React on a piece of bread?',
            content: 'YES. You can use React on a piece of bread'
        },
        {
            id: 'eruy833',
            label: 'Can I use JSON on a piece of bread?',
            content: 'YES. You can use JSON on a piece of bread'
        },
        {
            id: '1238457d',
            label: 'Can I use Peanut butter on a piece of bread?',
            content: 'YES! You can use Peanut butter on a piece of bread'
        },
     ]

    return <Accordion items={items}/>
    
}

export default App



/* 
PROPS for Buttons : ALL booleans
(for false just leave button blank)

- primary
- secondary
- success
- warning
- danger

- outline
- rounded
*/