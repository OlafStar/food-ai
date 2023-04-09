import {InputHTMLAttributes} from 'react';
import {RegisterOptions, useFormContext} from 'react-hook-form';

type InputProps = {
    label: string;
    name: string;
    registerOptions?: RegisterOptions;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({label, name, registerOptions, ...rest}: InputProps) => {
    const {register} = useFormContext();

    return (
        <label>
            <span>{label}</span>
            <input {...rest} {...register(`${name}`, registerOptions)} />
        </label>
    );
};

export default Input;
