import axios from 'axios'

const searchImages = async (searchTerm) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID wXoc7tAJ5FVsP_--ghTZ44XFMlrhpA8GSQbbsde9Ef4'
        },
        params: {
            query: searchTerm,
        }
    })
    return response.data.results
}

export default searchImages