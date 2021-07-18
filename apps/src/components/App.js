//-----------------------------------------------------------------------------
// App.js
// 親コンポーネント
// コンポーネントの初期レンダリング中にAPIリクエストを処理する関数を設置
//-----------------------------------------------------------------------------


import React, { useState, useEffect } from "react";
import "../App.css";
import Header from "./Header";
import Movie from "./Movie";
import Search from "./Search";


const MOVIE_API_URL = "https://www.omdbapi.com/?apikey=1acc884d&s=potter";

const App = () => {
  //stateの初期値を設定
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [resetMessage, setResetMessage] = useState(null);

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        setMovies(jsonResponse.Search);
        setLoading(false);
        setResetMessage(null);
      });
  }, []);

  const search = searchValue => {
    setLoading(true);
    setResetMessage(null);

    fetch(`https://www.omdbapi.com/?apikey=1acc884d&s=${searchValue}`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          setMovies(jsonResponse.Search);
          setLoading(false);
          setResetMessage(null);
        }
        else {
          setErrorMessage(jsonResponse.Error);
          setLoading(false);
          setResetMessage(null);
        }
    });
  };

  const resetSearch = () => {
    setResetMessage('検索結果をリセットしました。検索キーワードを入力して検索してください');
  };

  return (
    <div className="App">
    <Header text="React Moive Search" />
    <Search
    search={search}
    placeholder="キーワードを入力"
    />
    <div className="movies">
      {
        loading && !errorMessage ? ( <span>loading...</span>) :
        errorMessage ? ( <div className="errorMessage">{errorMessage}</div>) :
        resetMessage ? ( <div className="errorMessage">{resetMessage}</div>) :
        (
          movies.map((movie, index) => (
          <Movie key={`${index}-${movie.Title}`} movie={movie} />
          ))
        )
      }
      </div>
      {
        resetMessage ? ('') :
        loading ? ('') :
        errorMessage ? ('') :
        (<input onClick={resetSearch} type="button" value="CLEAR" />)
      }
    </div>
  );
};

export default App;