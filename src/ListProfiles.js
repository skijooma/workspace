import React, { Component } from 'react'

class ListProfiles extends Component {
  
  render() {
  	console.log('Props', this.props);
  	return (
    	
    	<ol>
      		{
            	this.props.profiles.map((profile) => (
                  	<li key = { profile.id }>
    					<p> { `${ this.props.users[profile.userID].name }'s favorite movie is ${ this.props.movies[profile.favoriteMovieID].name }.` }</p>
                  	</li>
    			))
            }
      	</ol>
    );
  }
}

export default ListProfiles;
