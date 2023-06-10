import React, {FC} from 'react';



type ButtonProps = {
  onClick?: () => void;
  text?: string | number;
  isActive: boolean
};

const Button: FC<ButtonProps> = ({ onClick, text, isActive}) => {
  return <button className={`button ${isActive ? 'active' : ''} `} onClick={onClick}>
    {text}
  </button>;
};


export default Button;