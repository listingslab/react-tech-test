/**
 * Listingslab
 *
 * @package     react-tech-test
 * @author      Chris Dorward <listingslab@gmail.com>
 * @repo        https://github.com/listingslab/react-tech-test
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import { openNewContact, closeNewContact, saveContact } from '../redux/actions/contacts';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import uniqid from 'uniqid';

const styles = theme => ({
  appBar: {
    position: 'relative',
    marginBottom: theme.spacing.unit,
  },
  flex: {
    flex: 1,
  },
  white:{
    color: 'white',
  },
  avatarSection:{
    marginTop: theme.spacing.unit,
  },
  avatar: {
    width: 125,
    height: 125
  }
});

function Transition (props) {
  return <Slide direction="right" {...props} />;
}

class New extends React.Component {

  componentWillMount () {
    this.reset ();
  }

  handleSave = () => {
    let contactObj = {
      id: uniqid(),
      firstName: this.state.firstName.value,
      lastName: this.state.lastName.value,
      phone: this.state.phone.value,
      avatar: this.state.avatar.value,
      created: Date.now(),
      updated: Date.now()
    }
    this.props.saveContact( contactObj );
    this.reset ();
    this.props.closeNewContact();
  };

  reset = () => {
    this.setState ({
      valid: false,
      firstName:{
        pristine: true,
        valid: false,
        error: false,
        value: ``
      },
      lastName:{
        pristine: true,
        valid: false,
        error: false,
        value: ``
      },
      phone:{
        pristine: true,
        valid: true,
        error: false,
        value: ``
      },
      avatar:{
        pristine: true,
        valid: true,
        error: false,
        value: `https://image.ibb.co/koOPTo/anon.png`
      }
    });
  };

  validate = () => {
    if ( this.state.firstName.valid && this.state.lastName.valid && this.state.phone.valid && this.state.avatar.valid ){
      this.setState ( { valid: true } );
    } else {
      this.setState ( { valid: false } );
    }
  }

  onFirstNameChange = event => {
    let valid = false;
    let error = false;
    let pristine = false;
    if ( event.target.value.length > 0 ){
      valid = true;
    } else {
      if ( !this.state.firstName.pristine ){
        error = true;
      }
    }
    this.setState ({
      firstName:{
        value: event.target.value,
        pristine,
        valid,
        error
      }
    });
    this.validate ();
  }
  
  onLastNameChange = event => {
    let valid = false;
    let error = false;
    let pristine = false;
    if ( event.target.value.length > 0 ){
      valid = true;
    } else {
      if ( !this.state.lastName.pristine ){
        error = true;
      }
    }
    this.setState ({
      lastName:{
        value: event.target.value,
        pristine,
        valid,
        error
      }
    });
    this.validate ();
  }
  
  onPhoneChange = event => {
    let valid = true;
    let error = false;
    let pristine = false;
    this.setState ({
      phone:{
        value: event.target.value,
        pristine,
        valid,
        error
      }
    });
    this.validate ();
  }

  onAvatarChange = event => {
    let valid = true;
    let error = false;
    let pristine = false;
    this.setState ({
      avatar:{
        value: event.target.value,
        pristine,
        valid,
        error
      }
    });
    this.validate ();
  }

  handleClose = () => {
    this.props.closeNewContact();
  };

  render() {
    const { classes } = this.props;
    const { open } = this.props.store.contacts.contacts.newContact;
    return (
        <Dialog
          fullScreen={ false }
          open={ open }
          onClose={ this.handleClose }
          TransitionComponent={ Transition }
        >

          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="title" color="inherit" className={classes.flex}>
                NEW
              </Typography>
              <Button color="inherit" onClick={this.reset}>
                Reset
              </Button>
            </Toolbar>
          </AppBar>

          <DialogContent>
            <TextField
              required
              autoFocus
              error={ this.state.firstName.error }
              fullWidth
              onChange={ this.onFirstNameChange }
              id={ `firstName` }
              label={ `First name` }
              value={ `${ this.state.firstName.value }` }
              margin="normal"
            />
            <TextField
              required
              error={ this.state.lastName.error }
              fullWidth
              onChange={ this.onLastNameChange }
              id={ `lastName` }
              label={ `Last name` }
              value={ `${ this.state.lastName.value }` }
              margin="normal"
            />
            <TextField
              fullWidth
              error={ this.state.phone.error }
              onChange={ this.onPhoneChange }
              id={ `phone` }
              label={ `Phone` }
              value={ `${ this.state.phone.value }` }
              margin="normal"
            />
            <TextField
              fullWidth
              error={ this.state.avatar.error }
              onChange={ this.onAvatarChange }
              id={ `avatar` }
              label={ `Avatar URL` }
              value={ `${ this.state.avatar.value }` }
              margin="normal"
            />
            <div className={ classnames( classes.avatarSection ) }>
              <Avatar 
                className={ classnames( classes.avatar ) }
                src={ this.state.avatar.value } />
            </div>
          </DialogContent>
          <DialogActions>
            <Button 
              onClick={ this.handleSave } 
              variant={ `raised` }
              disabled={ !this.state.valid }
              color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
    );
  }
}

const mapStateToProps = (store) => {
  return { 
    store
  };
};

const mapDispatchToProps = (dispatch) => {
  return { 
    openNewContact: () => dispatch(openNewContact ()),
    closeNewContact: () => dispatch(closeNewContact ()),
    saveContact: ( contactObj ) => dispatch(saveContact ( contactObj )),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(New));


