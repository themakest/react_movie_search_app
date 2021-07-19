//-----------------------------------------------------------------------------
// Movie.js
// APIから取得した映画情報を表示するコンポーネント
//-----------------------------------------------------------------------------


import React from "react";
import classes from './Movie.module.css'

const DEFAULT_PLACEHOLDER_IMAGE = "http://placehold.jp/dbdbdb/707070/200x296.png?text=NO%20IMAGE";

const Movie = ({movie}) => {
  const poster = movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

  return (
    <div className={classes.items}>
      <img 
        alt={`The movie titled: ${movie.Title}`}
        src={poster}
        className={classes.thumb}
      />
      <div className={classes.info}>
        <div className={classes.title}>{movie.Title}</div>
        <div className={classes.year}>({movie.Year})</div>
      </div>
    </div>
  );
};

export default Movie;