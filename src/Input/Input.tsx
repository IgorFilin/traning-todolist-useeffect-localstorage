import React, {ClassAttributes, DetailedHTMLProps, InputHTMLAttributes} from 'react';
import s from './Button.module.css'
type InputDefaulType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type InputType = InputDefaulType & {
    error?:string | undefined
}


export const Input: React.FC<InputType> = ({error, ...rest}) => {
    return <><input  {...rest}/>
        {error && <div>{error}</div>}
    </>
};

