import React,{useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { axiosRequestArtistDetails } from '../actions/artistActions'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Details from '../components/Details'
import Events from '../components/Events'
//import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    search: {
        position: 'relative',
        background: '#fff',
        boxShadow: '0 1px 2px 0 rgb(34 36 38 / 15%)',
        margin: '1rem 0',
        padding: '1em 1em',
        borderRadius: '.28571429rem',
        border: '1px solid rgba(34,36,38,.15)',
        minWidth: '35rem',
      },
    image: {
        width: 128,
        height: 128,
      },
      img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
        borderRadius: '50%',
      },
      details: {
          minWidth: '100%',
          textAlign: 'left',
      },
      searchIcons:{
        width:'20rem',
      },
      
  }));

function Filter() {
    const classes = useStyles();
    const [ query, setQuery ] = useState(null)
    const [ artistName, setArtistName ] = useState(null)
    const [ totalEvents, setTotalEvents ] = useState(null)
    const [ results, setResults ] = useState([])
    const [ showArtist, setShowArtist ] = useState(false)
    const [ showDetails, setShowDetails ] = useState(false)
   
    useEffect (()=> {
        setShowArtist(false)
    },[])

      useEffect(() => {
          if(query){
            setArtistName(query)
            axiosRequestArtistDetails(query)
            .then(({ data }) => {
                setResults(data)
                setTotalEvents(data.upcoming_event_count)
                setShowArtist(true)
            })
          }
       
    }, [query]);

    const handleInputChange = (e) => {
        setQuery(e.target.value)
    }
    
    const viewDetails = e => {
        e.preventDefault();
        setShowArtist(false)
        setShowDetails(true)
    }
 
    return(
    <Grid container spacing={3}>
        {!showDetails &&
            <Grid item xs={12}>
                <Paper  elevation={0} className={classes.paper}>
                    <TextField 
                        type="search"
                        className={classes.searchIcons}
                        name="search"
                        onChange={handleInputChange} label="Search artist" variant="outlined" 
                        />
                </Paper>
            </Grid>}

        {showArtist && results && results !== '' &&
        <Grid item xs={12} > 
            <Details results = { results }
             ShowDetails = {showDetails} />
            <Button onClick={viewDetails}>view Events</Button>
         </Grid> }   
     
        {showDetails && 
        <Events 
        results = {results} 
        setShowDetails = {setShowDetails} 
        setShowArtist= {setShowArtist}
        artistName = {artistName}
        totalEvents = {totalEvents}/>}      
    </Grid>
    
    )
}

export default Filter
