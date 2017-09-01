import React, { Component } from 'react'
import Titles from './store/Titles'
import {Link} from 'react-router-dom'

class TitlesIndex extends Component {
  componentWillMount(){
    this.setState({titles: Titles})
  }
  render(){
      let titles = this.state.titles.map(function(title){
        return(
          <li key={title.id}>
            <Link to={`/titles/${title.id}`} >
              {title.title}
            </Link>
          </li>
        )
      })
    return(
      <ul>
        {titles}
      </ul>
    )
  }
}

export default TitlesIndex
