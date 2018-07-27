/**
 * Listingslab
 *
 * @package     react-tech-test
 * @author      Chris Dorward <listingslab@gmail.com>
 * @repo        https://github.com/listingslab/react-tech-test
 *
 */

import React from 'react';
import { withRouter } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import logo from '../assets/svg/logo.svg';

const styles = {
  top: {
  },
  appBar: {
    flexGrow: 1,
    // background: 'none',
    // background: 'rgba(255, 255, 255, 0.1)',
  },
  siteInfo: {
  },
  flex: {
    flex: 1,
    // textAlign: 'center',
    color: 'rgba(255,255,255,0.7)',
    fontSize: 11
  },
  logoBtn: {
    // marginLeft: -12,
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
          <IconButton 
            className={ classnames(classes.white, classes.logoBtn) } 
            color="default" 
            aria-label="Home">
            <Avatar
              title={ `Listingslab PWA` }
              src={ logo }
            />
          </IconButton>

          <div className={ classnames(classes.flex) }>
            
            {/* 
              <Typography 
                className={ classnames( classes.white ) }
                variant={ `body2` }>
                { props.name }
              </Typography>
             */}

            <Typography 
              className={ classnames( classes.white ) }
              variant={ `body1` }>
              { props.description }
            </Typography>
          </div>

        </Toolbar>
      </AppBar>
  </div>
  );
}

export default withRouter(withStyles( styles )( Top ));
