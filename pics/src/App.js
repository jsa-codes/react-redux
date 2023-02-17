import { useState } from 'react';
import { SearchBar } from './components/SearchBar'
import searchImages from './api';
import { ImageList } from './components/ImageList';

export const App = () => {

    const [images, setImages] = useState([])

    const handleSubmit = async (searchTerm) => {
        const result = await searchImages(searchTerm)
         setImages(result)
    }

    // ImageList contains images={images} 
    //  - Images is a prop.
    // In the App component, images is state
    return (
        <div>
            <SearchBar onSubmit={handleSubmit}/>
            <ImageList images={images}/>
        </div>
    )
}