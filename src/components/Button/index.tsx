import React from "react";
import './Button.scss';

interface IButton {
  children?: string;
  className?: string
  onClick?: () => void | boolean
}

export const Button = (props: IButton) => {
  const { onClick, className, children } = props;

  return (<button onClick={onClick} className={`button ${className}`}>{children}</button>);
};
;

