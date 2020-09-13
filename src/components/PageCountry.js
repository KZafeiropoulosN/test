import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core';

import CountryForm from './CountryForm';


const useStyles = makeStyles((theme) => ({
	root: {
	  '& > svg': {
		margin: theme.spacing(2),
		TypographyStyle: {
			color:"blue"
		}
	  },
	},
}));

const PageCountry = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>	
      <Grid
        container 
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <Typography
            align="center"
            color="primary"
            className={classes.TypographyStyle}
            style={{ fontSize: 50  }}
          >
            Application
          </Typography>
        </Grid>
        <Grid item>
          <Typography	
            align="center"
            color="primary"
            className={classes.TypographyStyle}
            style={{ fontSize: 30  }}
            >
              View
              <CountryForm {...props} countries={props.countries} editRow={props.editRow} ifDataChanged={props.ifDataChanged} />
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
};

export default PageCountry;