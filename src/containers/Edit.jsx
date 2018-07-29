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
import { 
  closeEditContact,
  updateContact 
} from '../redux/actions/contacts';
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
  testAvatars:{
    marginTop: theme.spacing.unit,
    fontSize: 12
  },
  link:{
    color: theme.palette.primary['300'],
    textDecoration: 'none'
  },
  avatar: {
    width: 125,
    height: 125
  }
});

function Transition (props) {
  return <Slide direction="right" {...props} />;
}

class Edit extends React.Component {

  componentWillMount ( nextProps ) {
    this.reset ();
  }

  componentWillReceiveProps ( nextProps ) {
    this.reset ();
  }
 
  handleUpdate = () => {
    const { selectedContact } = this.props.store.contacts.contacts;
    let contactObj = {
      id: selectedContact.id,
      created: selectedContact.created,
      updated: Date.now(),
      firstName: this.state.firstName.value,
      lastName: this.state.lastName.value,
      phone: this.state.phone.value,
      avatar: this.state.avatar.value
    }
    this.props.updateContact( contactObj );
  };

  reset = () => {
    const { selectedContact } = this.props.store.contacts.contacts;
    let firstName = ``;
    let lastName = ``;
    let phone = ``;
    let avatar = ``;
    if (selectedContact) {
      firstName = selectedContact.firstName || ``;
      lastName = selectedContact.lastName || ``;
      phone = selectedContact.phone || ``;
      avatar = selectedContact.avatar || ``;
    }
    this.setState ({
      valid: true,
      firstName:{
        pristine: true,
        valid: true,
        error: false,
        value: firstName
      },
      lastName:{
        pristine: true,
        valid: true,
        error: false,
        value: lastName
      },
      phone:{
        pristine: true,
        valid: true,
        error: false,
        value: phone
      },
      avatar:{
        pristine: true,
        valid: true,
        error: false,
        value: avatar
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
    setTimeout (this.validate, 250);
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
    setTimeout (this.validate, 250);
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
    setTimeout (this.validate, 250);
  }

  handleClose = () => {
    this.props.closeEditContact();
  };

  render() {
    const { classes } = this.props;
    const { open } = this.props.store.contacts.contacts.editContact;
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
                EDIT
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
            <div className={ classnames( classes.testAvatars ) }>
              <a 
                className={ classnames( classes.link ) }
                href="https://raw.githubusercontent.com/listingslab/react-tech-test/master/public/test_avatars.txt"
                target={ `_blank` }
              >
                Want some avatar urls to test?
              </a>        
            </div>
          </DialogContent>
          <DialogActions>
            <Button 
              onClick={ this.handleUpdate } 
              variant={ `raised` }
              disabled={ !this.state.valid }
              color="primary">
              UPDATE
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
    closeEditContact: () => dispatch(closeEditContact ()),
    updateContact: ( contactObj ) => dispatch(updateContact ( contactObj )),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Edit));


