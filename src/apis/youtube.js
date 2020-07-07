import axios from 'axios';
const KEY = 'AIzaSyAkBhhZ3Y0OYwgRep4ncnD-291szvTFHqA'; // mention your youtube API key here

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})