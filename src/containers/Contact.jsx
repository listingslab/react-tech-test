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
import { updateNewContact } from '../redux/actions/contacts';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
// import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  contact: {
    margin: theme.spacing.unit,
  },
});

class Contact extends React.Component {

  onFirstNameChange = event => {
    this.props.updateNewContact ({
      firstName: `${event.target.value}`
    });
  }
  
  onLastNameChange = event => {
    this.props.updateNewContact ({
      lastName: `${event.target.value}`
    });
  }
  
  onPhoneChange = event => {
    this.props.updateNewContact ({
      phone: `${event.target.value}`
    });
  }

  createContact = contact => {
    const { classes } = this.props;
    return (
      <div className={ classnames( classes.addNew ) }>
        <Button 
          variant={ `raised` }
          color="primary"
          onClick={() => {
            console.log ('Add New');
          }}>Add Contact</Button>
      </div>
    );
  }

  createEdit = firstName => {
    // const { classes } = this.props;
    return (
      <Button 
        key={`edit_btn`}
        variant={ `raised` }
        color="secondary"
        onClick={() => {
          console.log ('Edit');
        }}>EDIT { firstName }</Button>
    );
  }

  createNew = () => {
    // const { classes } = this.props;
    return (
      <Button 
        key={`new_btn`}
        variant={ `raised` }
        color="primary"
        onClick={() => {
          console.log ('NEW');
        }}>NEW CONTACT</Button>
    );

  }

  createCancelSave = payload => {
    const { classes } = this.props;
    return (
      <div className={ classnames( classes.cancelSave ) }>
        <Button
          variant={ `raised` }
          color="default"
          onClick={() => {
            console.log ('Cancel');
          }}>Cancel</Button>
        <Button 
          variant={ `raised` }
          color="primary"
          onClick={() => {
            console.log ('Save');
          }}>Save</Button>
      </div>
    );
  }

  render() {
    const { classes } = this.props;
    const { contacts } = this.props.store.contacts;
    const { selectedContact } = this.props.store.contacts.contacts;
    let cardContent = null;
    let cardActions = [];
    let avatar = `/png/avatar/avatar.png`;
    let title = ``;
    let subheader = ``;
    // console.log ('contacts.selectedContact', contacts.selectedContact);
    if ( !contacts.selectedContact ){
      title = `Select a contact or create a new one`;
      // cardActions = this.addNew ();
    } else {
      title = `${ selectedContact.firstName } ${ selectedContact.lastName }`;
      subheader = `${ selectedContact.phone }`;
      avatar = `${ selectedContact.avatar }`;
      cardActions.push ( this.createEdit( selectedContact.firstName ) );
      cardActions.push ( this.createNew() );
    }
    return (
      <div className={ classnames( classes.contact ) }>
        <CardActions>
          { cardActions }
        </CardActions>
        <CardHeader 
          avatar={ <Avatar src={ avatar } /> }
          title={ `${ title }` } 
          subheader={ `${ subheader }` } />
        <CardContent>
          { cardContent }
        </CardContent>

      </div>
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
    updateNewContact: ( payload ) => dispatch(updateNewContact ( payload )),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Contact));

/*
<CardContent>
  <TextField
      required
      fullWidth
      onChange={ this.onFirstNameChange }
      id={ `firstName` }
      label={ `First name` }
      defaultValue={ `${ newContact.firstName.value }` }
      margin="normal"
    />
    <TextField
      required
      fullWidth
      onChange={ this.onLastNameChange }
      id={ `lastName` }
      label={ `Last name` }
      defaultValue={ `${ newContact.lastName.value }` }
      margin="normal"
    />
    <TextField
      required
      fullWidth
      onChange={ this.onPhoneChange }
      type={ `number` }
      id={ `phone` }
      label={ `Phone` }
      defaultValue={ `${ newContact.phone.value }` }
      margin="normal"
    />
</CardContent>
*/