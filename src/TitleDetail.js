import React, { Component } from 'react'
import Titles from './store/Titles'
import {Link} from 'react-router-dom'

class TitleDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
     titles: Titles
    }
  }
  componentWillMount(){
    const id = this.props.match.params.id
    this.setState({titleId: id})
    let title = this.state.titles.find(function(listing){
      return listing.id === parseInt(id)
    })
    if(title){
      this.setState({title: title})
    }
  }
  render() {
    return (
      <div>
        <Link to='/'>Home</Link>
        <h2>{this.state.title.title}</h2>
      </div>
    );
  }
}

export default TitleDetail
