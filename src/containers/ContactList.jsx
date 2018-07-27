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
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

const styles = theme => ({
  contactList: {
    margin: theme.spacing.unit,
  },
});

class ContactList extends React.Component {

  render() {
    const { classes } = this.props;
    const { contactsList } = this.props.store.contacts.contacts;
    return (
      <div className={ classnames( classes.contactList ) }>
        <Card className={classes.card}>
          <List>
            { contactsList.map( contact => (
              <ListItem 
                key={ `${ contact.id }` }
                button
                onClick={() => {
                  this.props.setSelectedContact( contact );
                }}>
                <ListItemAvatar>
                  <Avatar src={ `${ contact.avatar || `/png/avatar/anon.png` }` } />
                </ListItemAvatar>
                <ListItemText
                  primary={ `${ contact.firstName } ${ contact.lastName }` }
                  secondary={ `${ contact.phone }` }
                />
                <ListItemSecondaryAction>
                  <IconButton 
                    aria-label="Edit"
                    color={ `secondary` }
                    onClick={() => {
                      console.log ('Edit', contact);
                      // this.props.setSelectedContact( contact );
                    }}>
                    <EditIcon />
                  </IconButton>
                  <IconButton 
                    aria-label="Delete"
                    color={ `primary` }
                    onClick={() => {
                      console.log ('Delete', contact);
                      // this.props.setSelectedContact( contact )
                    }}>
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Card>
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
