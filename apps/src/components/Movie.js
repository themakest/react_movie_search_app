import React from "react";

const DEFAULT_PLACEHOLDER_IMAGE = "http://placehold.jp/dbdbdb/707070/200x296.png?text=NO%20IMAGE";

const Movie = ({movie}) => {
  const poster = movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

  return (
    <div>
      <h2>{movie.Title}</h2>
      <div>
        <img 
          width='200'
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        />
      </div>
      <p>({movie.Year})</p>
    </div>
  );
};

export default Movie;