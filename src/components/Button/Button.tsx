import React, {FC} from 'react';
import classes from './Button.module.css';

type ButtonProps = {
    onClick?: () => void
    type?: 'solid' | 'hollow'
    [key: string]: any
}
const Button: FC<ButtonProps> = ({type = 'hollow',onClick , style, children}) => {
    return (
        <button className={[classes.Button, classes[`${type}Type`]].join(' ')} type={"button"} style={style} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
