import Storage from '../helpers/storage'
import  { setArtist, setEvent }  from '../slices/artist'
import axios from 'axios'
export const API_URL = 'https://rest.bandsintown.com/artists'
const axiosInstance = axios.create()
export const axiosRequestArtistDetails = (query) => {
    const artistDetails = axiosInstance.get(`${API_URL}/${query}?app_id=testing`)
    Storage.set( 'artists', JSON.stringify(artistDetails))
    setArtist(artistDetails)
   return artistDetails
}
export const axiosRequestArtistEvents = (artistName) => {
    const eventDetails = axiosInstance.get(`${API_URL}/${artistName}/events?app_id=testing`)
    Storage.set( 'events', JSON.stringify(eventDetails))
    setEvent(eventDetails)
    return eventDetails

}
