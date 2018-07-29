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
import { openNewContact } from '../redux/actions/contacts';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Button from '@material-ui/core/Button';

const styles = {
  noSelection: {
    textAlign: 'center',
    marginTop: 75,
  },
};

function NoSelection (props) {
  const { classes } = props;
  return (
  	<div className={ classnames( classes.noSelection ) }>
      <Button 
        onClick={ () => {
          props.openNewContact ();
        }} 
        variant={ `raised` }
        color="primary">
        New Contact
      </Button>
    </div>
  );
}


const mapStateToProps = (store) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return { 
    openNewContact: () => dispatch(openNewContact ()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(NoSelection));
