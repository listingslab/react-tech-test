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
import New from './New';
import Edit from './Edit';
import Delete from './Delete';
import Contact from './Contact';
import Grid from '@material-ui/core/Grid';
import packageJSON from '../../package.json';

const styles = theme => ({
  app: {
    maxWidth: 800,
    margin: 'auto'
  },
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={ classnames( classes.app ) }>
        <New />
        <Edit />
        <Delete />
        <Top 
          name={ `${packageJSON.name}` }
          description={ `${packageJSON.description}` } />
          <Grid container>
            <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
              <Contact />
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
              <ContactList />
            </Grid>
          </Grid>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App));
