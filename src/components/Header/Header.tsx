import { FunctionComponent } from "react";

import { Search } from "../../shared/Search";

import { useStyle } from "./styles";

export const Header: FunctionComponent = () => {
  const logo = require("assets/icons/logo.svg").default as string;

  const classes = useStyle();

  return (
    <header className={classes.header}>
      <div className={classes.logoWrap}>
        <img src={logo} alt="" />
        <p className={classes.name}>statistic</p>
      </div>
      <Search />
    </header>
  );
};
