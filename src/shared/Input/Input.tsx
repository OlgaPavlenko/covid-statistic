import { ChangeEvent, DOMAttributes, FunctionComponent } from "react";
import { useStyle } from "./styles";

interface IInputProps extends DOMAttributes<HTMLElement> {
  type?: string;
  value?: string | number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const Input: FunctionComponent<IInputProps> = ({ onChange, value }) => {
  const classes = useStyle();

  const search = require("assets/icons/icon.svg").default as string;

  return (
    <div className={classes.wrap}>
      <input
        placeholder="Search..."
        onChange={onChange}
        value={value}
        className={classes.searchInput}
      ></input>
      <img src={search} alt="search-icon" className={classes.search} />
    </div>
  );
};
