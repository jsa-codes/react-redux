import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go'
import Button from './Button'

function App() {

    const handleClick = () => {
        console.log('Clicked!')
    }
    return <div>
        <div>
            <Button primary onClick={handleClick}>
                Click Here!
            </Button>
        </div>
        <div><Button secondary><GoDatabase/> Buy Now!</Button></div>
        <div><Button success rounded><GoCloudDownload/>See Deal!</Button></div>
        <div><Button warning>Hide Ads!</Button></div>
        <div><Button danger><GoBell />Notify Me!</Button></div>
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