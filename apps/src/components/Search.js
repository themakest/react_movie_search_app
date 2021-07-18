//-----------------------------------------------------------------------------
// Search.js
// inputと検索ボタンを含むフォーム周りの表示
// 親コンポーネントから渡される検索キーワードをpropsで受け取り、検索処理を実行
//-----------------------------------------------------------------------------


import React, { useState } from "react";

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
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
        placeholder={props.placeholder}
      />
      <input onClick={callSearchFunction} type="submit" value="SEARCH" />
    </form>
  );
}

export default Search;