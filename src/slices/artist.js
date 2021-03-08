import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    artists: null,
    events: null
  }
  
  const artist = createSlice({
    name: 'artist information',
    initialState,
    reducers: {
      setArtist(state, action) {
        state.artists = action.payload
      },
      setEvent(state, action) {
        state.events = action.payload.role
      }
    }
  })
  export const { setArtist, setEvent } = artist.actions
  export default artist.reducer