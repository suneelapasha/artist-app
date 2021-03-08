import axios from 'axios'
export const API_URL = 'https://rest.bandsintown.com/artists'
const axiosInstance = axios.create()

export const axiosRequestArtistDetails = (query) => {
    
   return axiosInstance.get(`${API_URL}/${query}?app_id=testing`)
}

export const axiosRequestArtistEvents = (artistName) => {
    return axiosInstance.get(`${API_URL}/${artistName}/events?app_id=testing`);
}
