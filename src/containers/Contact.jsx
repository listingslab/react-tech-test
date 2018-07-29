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
import { 
  openNewContact, 
  openDeleteContact, 
  closeDeleteContact,
  openEditContact,
  closeEditContact
} from '../redux/actions/contacts';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import ContactHeader from '../components/ContactHeader';
import NoSelection from '../components/NoSelection';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import NewIcon from '@material-ui/icons/AddCircle';
import moment from 'moment';

const styles = theme => ({
  contact: {
    minHeight: 100,
  },
  content: {
    color: theme.palette.primary['300'],
    fontSize: 12
  }
});

class Contact extends React.Component {

  render() {
    const { classes } = this.props;
    const { contacts } = this.props.store.contacts;
    let header = [];
    let content = [];
    let actions = [];
    if ( !contacts.selectedContact ){
      header.push ( 
        <NoSelection key={ `no_selection` } />);
    } else {
      header.push ( 
        <ContactHeader 
          key={ `contact_header` }
          contactObj={ contacts.selectedContact } 
        />);
      content.push ( 
        <CardContent 
          key={ `contact_content` }
          className={ classnames( classes.content ) }>
          Created { moment.unix( contacts.selectedContact.created/1000 ).fromNow() }
          , updated { moment.unix( contacts.selectedContact.updated/1000 ).fromNow() }
        </CardContent>);
      actions.push (
        <CardActions key={ `contact_actions` }>
          <IconButton 
            aria-label="New"
            color={ `primary` }
            onClick={() => {
              this.props.openNewContact();
            }}>
            <NewIcon />
          </IconButton>
          <IconButton 
            aria-label="Edit"
            color={ `primary` }
            onClick={() => {
              this.props.openEditContact( contacts.selectedContact );
            }}>
            <EditIcon />
          </IconButton>
          <IconButton 
            aria-label="Delete"
            color={ `primary` }
            onClick={() => {
              this.props.openDeleteContact( contacts.selectedContact );
            }}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      );
    }
    return (
      <div className={ classnames( classes.contact ) }>
        { actions }
        { header }     
        { content }
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
    openNewContact: () => dispatch(openNewContact ()),
    openDeleteContact: ( contactObj ) => dispatch(openDeleteContact ( contactObj )),
    openEditContact: ( contactObj ) => dispatch(openEditContact ( contactObj )),
    closeEditContact: () => dispatch(closeEditContact ()),
    closeDeleteContact: () => dispatch(closeDeleteContact ()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Contact));
