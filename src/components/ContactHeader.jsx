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
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  contactHeader: {
  },
  avatar:{
    height: 125,
    width: 125,
  }
};

function ContactHeader (props) {
  const { classes, contactObj } = props;
  let avatarSrc = `/png/avatar/anon.png`;
  if (contactObj.avatar !== undefined && contactObj.avatar !== ''){
    avatarSrc = contactObj.avatar;
  }
  return (
  	<div className={ classnames( classes.contactHeader ) }>
      <CardHeader
            title={ `${ contactObj.firstName || `` } ${ contactObj.lastName || `` }` }
            subheader={ `${ contactObj.phone || `no phone` }` }
            avatar={ <Avatar 
              src={ avatarSrc }
              className={ classnames( classes.avatar ) } />}
          />
    </div>
  );
}

export default withRouter(withStyles( styles )( ContactHeader ));
