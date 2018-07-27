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
    padding: theme.spacing.unit,
    color: theme.palette.secondary[300],
    marginTop: theme.spacing.unit,
  },
  whiteLink: {
    color: theme.palette.primary[300],
    textDecoration: 'none',
  },
});

function Footer (props) {
  const { classes } = props;
  return (
  	<div className={classnames( classes.footer )}>

      <a  href="https://github.com/listingslab/react-tech-test"
          className={classnames( classes.whiteLink )}
          rel="noopener noreferrer"
          target="_blank"
          title={`github`}
          >Github</a>&nbsp;|&nbsp;

      <a  href="https://www.linkedin.com/in/listingslab"
          className={classnames( classes.whiteLink )}
          rel="noopener noreferrer"
          target="_blank"
          title={`linkedin`}
          >linkedin</a>&nbsp;|&nbsp;

      <a  href="https://listingslab.com"
          className={classnames( classes.whiteLink )}
          rel="noopener noreferrer"
          target="_blank"
          title={`PWA by listingslab`}
          >PWA by listingslab</a> 
    </div>
  );
}

export default withRouter(withStyles( styles )( Footer ));
