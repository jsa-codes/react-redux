import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go'
import Button from '../components/Button'

function ButtonPage() {

    const handleClick = () => {
        console.log('Clicked!')
    }
    return <div>
        <div>
            <Button primary className='mb-5' onClick={handleClick}>
                Click Here!
            </Button>
        </div>
        <div><Button secondary onMouseEnter={handleClick}><GoDatabase /> Buy Now!</Button></div>
        <div><Button success rounded onMouseLeave={handleClick}><GoCloudDownload />See Deal!</Button></div>
        <div><Button warning>Hide Ads!</Button></div>
        <div><Button danger><GoBell />Notify Me!</Button></div>
    </div>
}

export default ButtonPage



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