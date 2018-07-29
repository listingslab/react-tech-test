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
import { setSelectedContact } from '../redux/actions/contacts';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  contactList: {
  },
});

class ContactList extends React.Component {

  render() {
    const { classes } = this.props;
    const { contactsList } = this.props.store.contacts.contacts;
    return (
      <div className={ classnames( classes.contactList ) }>
        <Divider />
        <List>
          { contactsList.map( contact => (
            <div key={ `${ contact.id }` } >
              <ListItem 
                button
                onClick={() => {
                  this.props.setSelectedContact( contact );
                }}>
                <ListItemAvatar>
                  <Avatar src={ `${ contact.avatar || `/png/avatar/anon.png` }` } />
                </ListItemAvatar>
                <ListItemText
                  primary={ `${ contact.firstName || `` } ${ contact.lastName || `` }` }
                  secondary={ `${ contact.phone || `` }` }
                />
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
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
    setSelectedContact: ( contact ) => dispatch(setSelectedContact ( contact )),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ContactList));
