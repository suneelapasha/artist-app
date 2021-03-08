import React,{ useState,useEffect}from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { axiosRequestArtistEvents } from '../actions/artistActions'
import Details from '../components/Details'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
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
      btnAlign: {
          marginTop:'3rem',
          marginLeft: '.85rem',
      },
      header: {
        textAlign:'left',
        fontWeight:700,
      },
      content: {
        textAlign: 'left',
        marginTop: '-10px',
        fontSize: '.85rem',
      },
      eventHeader:{
        textTransform: 'uppercase',
        textAlign: 'left',
        fontWeight: '500',
      },
      eventDetail: {
        ['@media (max-width:500px)']: { // eslint-disable-line no-useless-computed-key
            padding: '40px !important',
          },
      },
      upcomming: {
        marginLeft: '.85rem',
      },
  }));

function Events(props) {
   
    const classes = useStyles();
    const {results, setShowDetails, setShowArtist, artistName, totalEvents} = props
    const[events , setEvents] = useState([])

    const handleSubmit=() => {
         setShowDetails(false)
         setShowArtist(true)
    }


    useEffect(()=>{
        axiosRequestArtistEvents(artistName)
        .then(({ data }) => {
        setEvents(data)
        })

    },[artistName])

    return(
    <Grid container spacing={3} >
        <Grid item xs={12}>
        <Button onClick={handleSubmit} className={classes.btnAlign}>Back to results</Button>
            <Details results = {results}/>
        <Typography className={classes.upcomming}>{totalEvents} upcomming events</Typography>
        </Grid>
       
        {events && events !== '' &&  
        events.map((value, index) => {
            return (
                <Grid item xs={12} md={3 } className={classes.eventDetail} key={index}>
                <Paper className={classes.paper} >
                <Grid container spacing={2}>
                   <Grid item xs={12} className={classes.eventHeader}>
                       Event Details
                       <Divider/>
                   </Grid>
                   <Grid item xs={6} className={classes.header}>
                    Country
                   </Grid>
                   <Grid item xs={6} className={classes.header}>
                    City
                   </Grid>
                  
                   <Grid item xs={6} className={classes.content}>
                    {value.venue.country}
                   </Grid>
                  
                   <Grid item xs={6} className={classes.content}>
                   {value.venue.city}
                   </Grid>
    
                   <Grid item xs={6} className={classes.header}>
                    Venue
                   </Grid>
                   <Grid item xs={6} className={classes.header}>
                    Date
                   </Grid>
                   <Grid item xs={6} className={classes.content}>
                   {value.venue.name}
                   </Grid>
                   <Grid item xs={6} className={classes.content}>
                   {/* {value.datetime} */}
                   {new Date(value.datetime).toDateString()}
                   </Grid>
                </Grid>
               </Paper>
           </Grid>
            )
}
 
        )}
        </Grid>
       
    )
}
export default Events