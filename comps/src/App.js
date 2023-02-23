import Button from './Button'

function App() {
    return <div>
        <div><Button success primary>Click Here!</Button></div>
        <div><Button>Buy Now!</Button></div>
        <div><Button>See Deal!</Button></div>
        <div><Button>Hide Ads!</Button></div>
        <div><Button>Notify Me!</Button></div>
    </div>
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