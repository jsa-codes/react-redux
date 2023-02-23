import Button from './Button'

function App() {
    return <div>
        <div><Button primary>Click Here!</Button></div>
        <div><Button secondary>Buy Now!</Button></div>
        <div><Button success>See Deal!</Button></div>
        <div><Button warning>Hide Ads!</Button></div>
        <div><Button danger>Notify Me!</Button></div>
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