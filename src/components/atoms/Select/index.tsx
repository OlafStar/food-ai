import {useEffect, useState} from 'react';
import {useFormContext} from 'react-hook-form';

type SelectProps = {
    label: string;
    values: string[];
};

const Select = ({label, values}: SelectProps) => {
    const {register, setValue} = useFormContext();
    const selectRegister = register(`${label}`);
    const [selectedOption, setSelectedOption] = useState<string | undefined>(
        undefined,
    );

    useEffect(() => {
        if (selectedOption) {
            setValue(label, selectedOption);
        }
    }, [selectedOption]);
    return (
        <select>
            {values.map((item) => (
                <option key={item}>{item}</option>
            ))}
        </select>
    );
};

export default Select;
