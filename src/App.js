import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import TitlesIndex from './TitlesIndex'
import TitleDetail from './TitleDetail'
import Titles from './store/Titles'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header title="Not Recipes Part Deux"/>
          <Route exact path="/" component={TitlesIndex} />
          <Route path='/titles/:id' component={TitleDetail} />
          <div>
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
