import {useFormContext} from 'react-hook-form';

type InputLabel = {
    label: string;
};

const Input = ({label}: InputLabel) => {
    const {register} = useFormContext();

    return (
        <label>
            <span>{label}</span>
            <input {...register(`${label}`)} />
        </label>
    );
};

export default Input;
