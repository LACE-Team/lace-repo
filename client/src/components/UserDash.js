/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import axios from 'axios';

const styles = theme => ({
    appBar: {
      position: 'relative',
    },
    icon: {
      marginRight: theme.spacing.unit * 2,
    },
  
    heroContent: {
      maxWidth: 600,
      margin: '0 auto',
      padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },
    heroButtons: {
      marginTop: theme.spacing.unit * 4,
    },
    layout: {
      width: 'auto',
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
        width: 1100,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    cardGrid: {
      padding: `${theme.spacing.unit * 8}px 0`,
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing.unit * 6,
    },
  });

class UserPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mppInfo: []
    }
  }
  getUserMpps = () => {
    axios.get('/api/userMpps')
      .then(res => {
        console.log(JSON.stringify(res.data) + ' here')
        this.setState({ mppInfo: res.data })        
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
  this.getUserMpps();
  }
 
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <main>
        
          <div className={classNames(classes.layout, classes.cardGrid)}>
            {/* End hero unit */}
            <Grid container spacing={40}>
            {console.log(classes.mppInfo)}
              {/* {this.state.mppInfo.map(info =>  */}
                <Grid sm={6} md={4} lg={3}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      //  image={this.state.photo}
                      // title={this.state.name}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {/* {this.state.name} */}
                      </Typography>
                      <Typography>
                        Riding: 
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Link to={`/mpp/`}>
                        <Button size="small" color="primary">
                          Details                       
                        </Button>
                      </Link>
                    </CardActions>
                  </Card>
                </Grid>
            </Grid>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

UserPage.propTypes = {
  classes: PropTypes.object.isRequired,
  mppInfo: PropTypes.object.isRequired
};

export default withStyles(styles)(UserPage);