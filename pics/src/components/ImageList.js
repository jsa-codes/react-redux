import { ImageShow } from './ImageShow'
import './ImageList.css'

export const ImageList = ({images}) => {
    // Mapping through the array of image objects
    const renderedImages = images.map((image) => {
        return <ImageShow key={image.id} image={image}/>
    })
    return <div className='image-list'>{renderedImages}</div>
}