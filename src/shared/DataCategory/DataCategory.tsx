import { FunctionComponent } from "react";
import { useStyle } from "./styles";

interface IModalViewProps {
  icon: string;
  title: string;
  count: number;
}

export const DataCategory: FunctionComponent<IModalViewProps> = ({
  icon,
  title,
  count,
}) => {
  const classes = useStyle();

  return (
    <div className={classes.wrap}>
      <img src={icon} alt="icon" />
      <div className={classes.category}>{title}</div>
      <div>{count}</div>
    </div>
  );
};
