import { DOMAttributes, FunctionComponent } from "react";
import { useStyle } from "./styles";

interface IRowProps extends DOMAttributes<HTMLElement> {
  number?: number | string;
  country?: string;
  total?: number | string;
  className?: string;
  modalOpen: (country: string | undefined) => void;
}

export const Row: FunctionComponent<IRowProps> = ({
  number,
  country,
  total,
  className,
  modalOpen,
}) => {
  const classes = useStyle();

  return (
    <tr onClick={() => modalOpen(country)} className={className}>
      <td className={classes.number}>{number}</td>
      <td className={classes.country}>{country}</td>
      <td className={classes.total}>{total}</td>
    </tr>
  );
};
