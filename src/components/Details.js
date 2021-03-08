import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


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
        width: '128px',
        height: '128px',
        ['@media (max-width:500px)']: { // eslint-disable-line no-useless-computed-key
            width: '90px',
            height: '80px',
          },
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
      },
      detailAlign: {
        marginTop: '2.5rem',
        textAlign: 'left',
        ['@media (max-width:500px)']: { // eslint-disable-line no-useless-computed-key
            marginTop: '1rem',
          },
      },
     
  }));

  function Details(props) {
    const classes = useStyles();
    const { results } = props

    return(
        <Paper  elevation={0} className={classes.paper}>
        <Grid item xs={12} md={6} > <Paper className={classes.paper}>
        <Grid container spacing={2}>
            <Grid item xs={4} md={3} >
                <div className={classes.image}>
                <img className={classes.img} alt="complex" src={results.image_url} />
                </div>
            </Grid>
            <Grid item xs={8} md={8} className={classes.detailAlign} >
                <Typography className={classes.details}>{results.name}</Typography>
                <Typography className={classes.details}>{results.facebook_page_url? (results.facebook_page_url).substr(11):''}</Typography>               
            </Grid>
            </Grid>
        </Paper>
        </Grid>
        </Paper>
    )
  }
  export default Details