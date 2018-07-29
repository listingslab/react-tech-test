/**
 * Listingslab
 *
 * @package     react-tech-test
 * @author      Chris Dorward <listingslab@gmail.com>
 * @repo        https://github.com/listingslab/react-tech-test
 *
 */

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import { withRouter } from "react-router-dom";

const styles = theme => ({
  footer: {
    color: theme.palette.secondary['300'],
    marginTop: theme.spacing.unit * 2,
    textAlign: 'center',
    fontSize: 12
  },
  link: {
    color: theme.palette.primary['300'],
    textDecoration: 'none',
  },
});

function Footer (props) {
  const { classes } = props;
  return (
  	<div className={classnames( classes.footer )}>

      <a  href="https://github.com/listingslab/react-tech-test"
          className={classnames( classes.link )}
          rel="noopener noreferrer"
          target="_blank"
          title={`github`}
          >Github</a>&nbsp;|&nbsp;

      <a  href="https://www.linkedin.com/in/listingslab"
          className={classnames( classes.link )}
          rel="noopener noreferrer"
          target="_blank"
          title={`linkedin`}
          >linkedin</a>

    </div>
  );
}

export default withRouter(withStyles( styles )( Footer ));
