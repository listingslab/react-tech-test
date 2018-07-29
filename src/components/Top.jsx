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
import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import logo from '../logo.svg';

const styles = {
  top: {
  },
  appBar: {
    flexGrow: 1,
  },
  siteInfo: {
  },
  flex: {
    flex: 1,
    color: 'rgba(255,255,255,0.7)',
    fontSize: 11
  },
  right: {
    textAlign: 'right',
  },
  logoBtn: {
    marginRight: 20,
  },
  white:{
    color: 'white',
  }
};

function Top (props) {

  const { classes } = props;

  return (
  	<div className={classes.appBar}>
      <AppBar
        className={ classnames( classes.appBar ) } 
        position="static">
        <Toolbar>
          


          <div className={ classnames(classes.flex) }>
            <Typography 
              className={ classnames( classes.white ) }
              variant={ `body1` }>
              { props.description }
            </Typography>
          </div>
          <div className={ classnames(classes.flex, classes.right) }>
            <IconButton 
              onClick={ () => {
                window.open ("https://listingslab.com",
                  "listingslab.com",
                  "menubar=0, top=0, left=0, width=400, height=750"
                );
              }}
              className={ classnames(classes.white, classes.logoBtn) } 
              aria-label="Listingslab">
              <Avatar
                title={ `Listingslab PWA` }
                src={ logo }
              />
            </IconButton>
          </div>


        </Toolbar>
      </AppBar>
  </div>
  );
}

const mapStateToProps = (store) => {
  return { 
    store
  };
};

const mapDispatchToProps = (dispatch) => {
  return { 
    openNewContact: () => dispatch(openNewContact ()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Top));


