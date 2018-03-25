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
import SettingsIcon from 'material-ui-icons/Settings';
import ChatIcon from 'material-ui-icons/Chat';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import MenuItem from 'material-ui/Menu/MenuItem';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';

import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

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
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 150,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  message_input: {
    border: 'none'
  }
});


const Protocol = [
  {
    value: 'http://',
    label: 'HTTP'
  },
  {
    value: 'https://',
    label: 'HTTPS'
  }
];


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      projectName: 'neo ide',
      scaleSearchBox: false,
      wH: window.innerHeight,
      query: '',
      data: [],
      dialogIsOpen: false,
      hostname: localStorage.getItem('hostname') || null,
      port: localStorage.getItem('port') || null,
      protocol: localStorage.getItem('protocol') || null,
      error: false,
      info: '',
      chat: false,
      message: ''
    }

    this.toggleChat = this.toggleChat.bind(this);
    this.onMessageSubmit = this.onMessageSubmit.bind(this);
    this.messages = [];
  }


  componentWillMount() {
    if (localStorage.getItem('protocol') && localStorage.getItem('port') && localStorage.getItem('hostname')) {
      this.connectSocket();
    }
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

  componentDidCatch(error, info) {
    this.setState({ error: true, info });
  }

  handleSearch(e) {
    this.setState({query: e.target.value});
  }

  handleClickOpen() {
    this.setState({ dialogIsOpen: true });
  }

  handleClose() {
    this.setState({ dialogIsOpen: false });
  }

  handleProtocol(e) {
    this.setState({
      protocol: e.target.value,
    });
  }

  handlePort(e) {
    this.setState({
      port: e.target.value,
    });
  }

  handleHostname(e) {
    this.setState({
      hostname: e.target.value,
    });
  }

  toggleChat(open) {
    this.setState({chat: open});
  }

  handleMessage(e) {
    this.setState({message: e.target.value}, () => {
      // user is typing
      this.socket.emit('typing', {
        name: 'kvilo'
      });
    });
  }

  connectSocket() {

    let self = this;

    this.socket = io(`${this.state.protocol}${this.state.hostname}:${this.state.port}`);

    this.socket.on('test', (data) => {
      console.log(JSON.parse(data.body));
      self.setState({data: data.body && JSON.parse(data.body)});
      localStorage.setItem('protocol', this.state.protocol);
      localStorage.setItem('port', this.state.port);
      localStorage.setItem('hostname', this.state.hostname);
    });

    this.socket.on('typing', (data) => {
      console.log('User is typing');
    })

    this.socket.on('message', (data) => {
      this.messages.push(data);
    });

  }

  handleUpdate() {
    this.forceUpdate();
  }

  onMessageSubmit(e) {
    e.preventDefault();
    if (this.state.message.length >= 1) {
      this.handleUpdate();
      this.socket.emit('message', {
        text: this.state.message,
        name: 'kvilo'
      });
    }
  }

  render() {
    const { classes, fullScreen } = this.props;
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
              <Button onClick={() => this.toggleChat(true)}>
                <ChatIcon />
              </Button>
              <Button onClick={this.handleClickOpen.bind(this)}>
                <SettingsIcon />
              </Button>
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
                .map((data, index) => {
                  return (
                    <List component='nav' key={index}>
                      <ListItem button divider>
                        <ListItemIcon style={{backgroundColor: '#2ecc71', padding: 10, color: '#fff'}}>
                          <CheckIcon />
                        </ListItemIcon>
                        <ListItemText primary={`${(data.emoji) ? data.emoji : ''} ${data.test_description}`} secondary={`Time: ${data.time}`} />
                        <div style={{display: 'flex', flexDirection: 'column', flexBasis: 30+'%', textAlign: 'center', color: '#fff'}}>
                          <Paper elevation={0} style={{marginBottom: 4, felx: 1, padding: 10, backgroundColor: '#2ecc71'}}><b>{typeof data.diff.explanation}</b> {new String(data.diff.explanation)}</Paper>
                          <Paper elevation={0} style={{padding: 10, backgroundColor: '#2ecc71'}}><b>{typeof data.diff.expected}</b> {new String(data.diff.expected)}</Paper>
                        </div>
                    </ListItem>
                    </List>
                  );
                })
                : <Paper style={{padding: 10}}><h1>No data available</h1></Paper>
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
                        <ListItem button divider>
                          <ListItemIcon style={{backgroundColor: '#e74c3c', padding: 10, color: '#fff'}}>
                            <ClearIcon />
                          </ListItemIcon>
                          <ListItemText primary={`${(data.emoji) ? data.emoji : ''} ${data.test_description}`} secondary={`Time: ${data.time}`} />
                          <div style={{display: 'flex', flexDirection: 'column', flexBasis: 30+'%', textAlign: 'center', color: '#fff'}}>
                            <Paper elevation={0} style={{marginBottom: 4, felx: 1, padding: 10, backgroundColor: '#2ecc71'}}><b>{typeof data.diff.explanation}</b> {new String(data.diff.explanation)}</Paper>
                            <Paper elevation={0} style={{padding: 10, backgroundColor: '#e74c3c'}}><b>{typeof data.diff.expected}</b> {new String(data.diff.expected)}</Paper>
                          </div>
                        </ListItem>
                      </List>
                    );
                  })
                : <Paper style={{padding: 10}}><h1>No data available</h1></Paper>
            }
          </Paper>
        </Grid>

        <Dialog
          fullScreen={fullScreen}
          open={this.state.dialogIsOpen}
          onClose={this.handleClose.bind(this)}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{"Connection Settings"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <form onSubmit={this.connectSocket.bind(this)} className={classes.container} noValidate autoComplete="off">

                <TextField
                  required
                  select
                  label="Protocol"
                  className={classes.textField}
                  value={this.state.protocol}
                  onChange={this.handleProtocol.bind(this)}
                  SelectProps={{
                    MenuProps: {
                      className: classes.menu,
                    },
                  }}
                  margin="normal"
                >
                  {Protocol.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  required
                  label="Hostname"
                  onChange={this.handleHostname.bind(this)}
                  defaultValue={this.state.hostname}
                  className={classes.textField}
                  margin="normal"
                />

                <TextField
                  required
                  label="Port"
                  onChange={this.handlePort.bind(this)}
                  defaultValue={this.state.port}
                  className={classes.textField}
                  margin="normal"
                  />

              </form>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose.bind(this)} color="secondary">
              Cancel
            </Button>
            <Button onClick={this.connectSocket.bind(this)} color="primary" autoFocus>
              Connect
            </Button>
          </DialogActions>
        </Dialog>


        <Drawer
          anchor="bottom"
          open={this.state.chat}
          onClose={() => this.toggleChat(false)}
        >
          <div
            tabIndex={0}
            role="button"
          >
           <Paper style={{
             padding: 20,
             minHeight: 500,
             maxHeight: 500,
             overflowY: 'scroll'
           }}>

           {
            (this.messages)
              ?
              this.messages
              .map((data, index) => {
                return (
                  <List component='nav' key={index}>
                    <ListItem button divider>
                      <ListItemIcon style={{backgroundColor: 'blue', padding: 10, color: '#fff'}}>
                        <ChatIcon />
                      </ListItemIcon>
                      <ListItemText primary={`${data.message.text}`} secondary={`${data.message.name}`} />
                  </ListItem>
                  </List>
                );
              })
              : <Paper style={{padding: 10}}><h1>No data available</h1></Paper>
            }

           </Paper>
          </div>
          <form onSubmit={this.onMessageSubmit} style={{padding: 10}}>
            <TextField
              fullWidth
              onChange={this.handleMessage.bind(this)}
              className={classes.message_input}
              placeholder='Write message ...'
              margin="normal"
            />
          </form>
        </Drawer>

      </Grid>
    );
  }

}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
