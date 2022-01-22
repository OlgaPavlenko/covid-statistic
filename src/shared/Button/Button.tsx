import { ButtonHTMLAttributes, DOMAttributes, FunctionComponent } from "react";

interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    DOMAttributes<HTMLButtonElement> {
  name?: string;
  badgeSrc?: string;
  className?: string;
  alt?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button: FunctionComponent<IButtonProps> = ({
  name,
  badgeSrc,
  className,
  alt,
  onClick,
}) => {
  return (
    <button onClick={onClick} className={className} name={name}>
      {<img src={badgeSrc} alt={alt} />}
    </button>
  );
};
