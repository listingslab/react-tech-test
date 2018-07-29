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
import { closeDeleteContact, deleteContact } from '../redux/actions/contacts';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

function Transition(props) {
  return <Slide direction="right" {...props} />;
}

const styles = theme => ({
  deleteDialog: {
  },
});

class Delete extends React.Component {

  render() {

    const { open, message, title, contactObj } = this.props.store.contacts.contacts.deleteContact;
    return (
      <Dialog
        open={ open }
        TransitionComponent={ Transition }
        onClose={ () => this.props.closeDeleteContact() }
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          { title }
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            { message }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button 
            onClick={ () => this.props.closeDeleteContact() } 
            variant={ `raised` }
            color={ `default` }>
            No
          </Button>
          <Button 
            autoFocus
            onClick={ () => { 
              this.props.deleteContact( contactObj.id );
            }} 
            variant={ `raised` }
            color={ `primary` }>
            Yes
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
    closeDeleteContact: () => dispatch(closeDeleteContact ()),
    deleteContact: ( contactId ) => dispatch(deleteContact ( contactId )),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Delete));
