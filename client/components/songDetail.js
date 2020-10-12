import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

//queries
import findSong from '../queries/findSong';

//components
import LyricCreate from './lyricCreate';
import LyricList from './lyricList';

class SongDetail extends Component {
  
  render() {
    const { song } = this.props.data;

    if(!song) { return <div></div>; }

    return(
      <div>
        <Link to="/">Back</Link>
        <h3>{song.title}</h3>
        <LyricList lyrics={song.lyrics} />
        <LyricCreate songId={this.props.params.id} />
      </div>
    );
  }
}

export default graphql(findSong, {
  options: (props) => { return { variables: {id: props.params.id } } }
})(SongDetail);