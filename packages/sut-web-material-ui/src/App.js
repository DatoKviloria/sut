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
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  textFieldInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    width: 'calc(100% - 24px)',
  }
});

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      projectName: 'neo ide',
      scaleSearchBox: false,
      wH: window.innerHeight,
      query: '',
      data: [],
      url: 'http://localhost:1960'
    }
  }

  componentWillMount() {
    let self = this;
    this.socket = io(this.state.url); 
    this.socket.on('test', (data) => {
      self.setState({data: data.body && JSON.parse(data.body)});
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
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <AppBar style={{padding: 10}} color='default' position='static'>
            <Toolbar>
              <Typography variant='title' color='inherit' className={classes.flex}>
                {this.state.projectName.toUpperCase()}
              </Typography>
              {/* <TextField
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
              /> */}
            </Toolbar>
          </AppBar>
        
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper} style={{minHeight: this.state.wH - 120, maxHeight: this.state.wH - 100, overflowY: 'scroll'}}>
            <Paper style={{textAlign: 'center', padding: 10, color: '#555'}} elevation={1}>
              <h1>{`Passed ${this.state.data.passed && this.state.data.passed.length || 0}`.toUpperCase()}</h1>              
            </Paper>
            {
              (this.state.data.passed)
                ?
                this.state.data.passed
                // .filter((each) => JSON.stringify(this.state.data.passed).includes(this.state.query))
                .map((data, index) => {
                  return (
                    <List component='nav' key={index}>
                      <ListItem divider>
                        <ListItemIcon style={{backgroundColor: 'green', padding: 10, color: '#fff'}}>
                          <CheckIcon />
                        </ListItemIcon>
                        <ListItemText primary={`${(data.emoji) ? data.emoji : ''} ${data.test_description}`} secondary={`Time: ${data.time}`} />
                      </ListItem>
                    </List>
                  );
                })
                : <Paper><h1>No passed test</h1></Paper>
            }
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper} style={{minHeight: this.state.wH - 120, maxHeight: this.state.wH - 100, overflowY: 'scroll'}}>
            <Paper style={{textAlign: 'center', padding: 10, color: '#555'}} elevation={1}>
              <h1>{`Failed ${this.state.data.failed && this.state.data.failed.length || 0}`.toUpperCase()}</h1>              
            </Paper>
              { 
                (this.state.data.failed) 
                  ? 
                  this.state.data.failed
                  .map((data, index) => {
                    return (
                      <List component='nav' key={index}>
                        <ListItem divider>
                          <ListItemIcon style={{backgroundColor: 'red', padding: 10, color: '#fff'}}>
                            <ClearIcon />
                          </ListItemIcon>
                          <ListItemText primary={`${(data.emoji) ? data.emoji : ''} ${data.test_description}`} secondary={`Time: ${data.time}`} />
                        </ListItem>
                      </List>
                    );
                  })
                : <Paper><h1>No failed test</h1></Paper>
            }
          </Paper>
        </Grid>
      </Grid>
    );
  }

}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);