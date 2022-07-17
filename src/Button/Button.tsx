import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import s from './Button.module.css'

type ButtonTypePrope = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {

}

export const Button:React.FC<ButtonTypePrope> = ({...rest}) => {
    return <button {...rest} />
};

