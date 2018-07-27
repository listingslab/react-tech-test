/**
 * Listingslab
 *
 * @package     react-tech-test
 * @author      Chris Dorward <listingslab@gmail.com>
 * @repo        https://github.com/listingslab/react-tech-test
 *
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Top from '../components/Top';
import Footer from '../components/Footer';
import ContactList from './ContactList';
import Contact from './Contact';
import Grid from '@material-ui/core/Grid';
import packageJSON from '../../package.json';

const styles = theme => ({
  app: {
    margin: theme.spacing.unit,
  },
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={ classnames( classes.contact ) }>
        <Top 
          name={ `${packageJSON.name}` }
          description={ `${packageJSON.description}` } />
          
          <Grid container>

            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <ContactList />
            </Grid>

            <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
              <Contact />
            </Grid>

          </Grid>
        <Footer />
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
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App));
