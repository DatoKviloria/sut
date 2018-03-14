import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import ClearIcon from 'material-ui-icons/Clear';
import CheckIcon from 'material-ui-icons/Check';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';

import io from 'socket.io-client';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 10,
    backgroundColor: theme.palette.background.paper,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paper_zero: {
    padding: theme.spacing.unit * 3,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  flex: {
    flex: 1,
    padding: 10
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  textFieldInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    width: 'calc(100% - 24px)',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  }
});

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      projectName: 'sut@neo web-ui',
      scaleSearchBox: false,
      wH: window.innerHeight,
      query: ''
    }
  }

  componentWillMount() {
    this.socket = io('http://localhost:1960');
    this.socket.on('test', function (data) {
      this.socket.emit('my other event', { my: 'data' });
    });  
  }

  updateDimensions() {
    this.setState({wH: window.innerHeight});
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this));
  }

  handleSearch(e) {
    this.setState({query: e.target.value});
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container spacing={0}>
      
          <Grid item xs={12}>

            <AppBar position='static'>
              <Toolbar>
                <Typography variant='title' color='inherit' className={classes.flex}>
                  {this.state.projectName.toUpperCase()}
                </Typography>
                <TextField
                  onFocus={() => this.setState({scaleSearchBox: true})}
                  onBlur={() => this.setState({scaleSearchBox: false})}
                  onChange={this.handleSearch.bind(this)}
                  placeholder='Search ...'
                  fullWidth={this.state.scaleSearchBox}
                  InputProps={{
                    disableUnderline: true,
                    classes: {
                      root: classes.textFieldRoot,
                      input: classes.textFieldInput,
                    },
                  }}
                  InputLabelProps={{
                    shrink: true,
                    className: classes.textFieldFormLabel,
                  }}
                />
              </Toolbar>
            </AppBar>
          
          </Grid>
          <Grid item xs={6} sm={4}>
            <Paper className={classes.paper} style={{backgroundColor: '#00b894', minHeight: this.state.wH - 100, maxHeight: this.state.wH - 100, overflowY: 'scroll'}}>
              <Paper style={{textAlign: 'left', color: '#fff', backgroundColor: '#00b894'}} elevation={0}>
                <h1>{`Passed Test(${4})`.toUpperCase()}</h1>              
                <Divider />
              </Paper>
              {
                [1,2,3,4,5,6,7,9,10,2,2,3,4,4,3,3,3,3,1,3,3,3,3]
                  .filter((each) => String(each).includes(this.state.query))
                  .map((data, index) => {
                    return (
                      <List component='nav' key={index}>
                        <ListItem button style={{backgroundColor: '#55efc4'}}>
                          <ListItemIcon style={{backgroundColor: 'green', padding: 5, color: '#fff', borderRadius: 100}}>
                            <CheckIcon />
                          </ListItemIcon>
                          <ListItemText primary={`Name is David \tid: ${index}`} secondary={`Time: ${0.02410}`} />
                        </ListItem>
                      </List>
                    );
                  })
              }
            </Paper>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Paper className={classes.paper} style={{backgroundColor: '#e17055', minHeight: this.state.wH - 100, maxHeight: this.state.wH - 100, overflowY: 'scroll'}}>
              <Paper style={{textAlign: 'left', backgroundColor: '#e17055'}} elevation={0}>
                <h1>{`Failed Test(${4})`.toUpperCase()}</h1>              
                <Divider />
              </Paper>              {
                [1,2,3,4]
                  .map((data, index) => {
                    return (
                      <List component='nav' key={index}>
                        <ListItem button style={{backgroundColor: '#fab1a0'}}>
                          <ListItemIcon style={{backgroundColor: 'red', padding: 5, color: '#fff', borderRadius: 100}}>
                            <ClearIcon />
                          </ListItemIcon>
                          <ListItemText inset primary='Chelsea Otakan' />
                        </ListItem>
                      </List>
                    );
                  })
              }
            </Paper>
          </Grid>

          <Grid item xs={6} sm={4}>
            <Paper className={classes.paper} style={{backgroundColor: '#74b9ff', minHeight: this.state.wH - 100, maxHeight: this.state.wH - 100, overflowY: 'scroll'}}>
              <Paper style={{textAlign: 'left', backgroundColor: '#74b9ff'}} elevation={0}>
                <h1>{`All Test(${8})`.toUpperCase()}</h1>              
                <Divider />
              </Paper>              {
                [1,2,3,4]
                  .map((data, index) => {
                    return (
                      <List component='nav' key={index}>
                        <ListItem button style={{backgroundColor: '#fab1a0'}}>
                          <ListItemIcon style={{backgroundColor: 'red', padding: 5, color: '#fff', borderRadius: 100}}>
                            <ClearIcon />
                          </ListItemIcon>
                          <ListItemText inset primary='Chelsea Otakan' />
                        </ListItem>
                      </List>
                    );
                  })
              }
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }

}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);