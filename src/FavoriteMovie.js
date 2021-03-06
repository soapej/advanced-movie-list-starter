import React from 'react';
import MoviePoster from './MoviePoster';

const FavoriteMovie = props => {
  return (
    <li className="favorite-movie col-xs-4">
      <MoviePoster
        posterPath={props.posterPath}
      />
      <h4>{props.title}</h4>
      <button onClick={() => props.onClickRemove(props.id)}>
        Remove
      </button>
    </li>
  );
};

export default FavoriteMovie;

FavoriteMovie.propTypes = {
  posterPath: React.PropTypes.string,
  title: React.PropTypes.string,
  onClickRemove: React.PropTypes.func.isRequired,
  id: React.PropTypes.number
};
