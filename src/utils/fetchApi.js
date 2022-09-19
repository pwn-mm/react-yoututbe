import axios from "axios";

const BASE_YT_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
    url: BASE_YT_URL,
    params: {
        // relatedToVideoId: '7ghhRHRP6t4',
        // part: 'id,snippet',
        // type: 'video',
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchApi = async (url) => {
    const { data } = await axios.get(`${BASE_YT_URL}/${url}`, options);

    return data;
}