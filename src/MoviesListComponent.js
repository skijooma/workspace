import React, { Component } from 'react'

class MoviesListComponent extends Component {

  	render(){
    	console.log('Props: ', this.props);
    	return (
        	
          <ol>
          {
          	this.props.movies.map((movie) => (
        		<h2>{ movie }</h2>
        	));
          }
          </ol>
        );
    }
}

export default MoviesListComponent;