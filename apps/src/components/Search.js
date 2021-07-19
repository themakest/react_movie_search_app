//-----------------------------------------------------------------------------
// Search.js
// inputと検索ボタンを含むフォーム周りの表示
// 親コンポーネントから渡される検索キーワードをpropsで受け取り、検索処理を実行
//-----------------------------------------------------------------------------


import React, { useState } from "react";
import classnames from 'classnames'
import globalStyles from '../assets/global-styles/bootstrap.min.module.css'
import classes from './Search.module.css'

const Search= (props) => {
  //stateの初期値を設定
  //検索入力フィールドの値を渡す
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }

  const resetInputField = () => {
    setSearchValue("")
  }

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  }

  return (
    <form className="search">
      <div className={classes.searchForm}>
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
        placeholder={props.placeholder}
        className={globalStyles['form-control']}
      />
      <input className={
        classnames(
          globalStyles.btn,
          globalStyles['btn-primary'],
          classes.searchBtn
        )}
        onClick={callSearchFunction} type="submit" value="SEARCH" />
      </div>
    </form>
  );
}

export default Search;