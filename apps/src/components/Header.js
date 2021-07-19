//-----------------------------------------------------------------------------
// Header.js
// ヘッダーをレンダリングするコンポーネント
//-----------------------------------------------------------------------------


import React from "react";
import classes from './Header.module.css'

const Header = (props) => {
  return (
    <header className={classes.AppHeader}>
      <h1 className={classes.AppHeaderTitle}>{props.text}</h1>
    </header>
  );
};

export default Header;