import {RegisterOptions, useFormContext} from 'react-hook-form';

export type SelectValue = {title: string; value: string | number};

type SelectProps = {
    values: SelectValue[];
    name: string;
    registerOptions?: RegisterOptions;
};

const Select = ({values, name, registerOptions}: SelectProps) => {
    const {register, setValue} = useFormContext();
    const selectRegister = register(`${name}`, registerOptions);

    return (
        <select {...selectRegister} onChange={(e) => setValue(name, e.target.value)}>
            {values.map((item, index) => {
                return (
                    <option key={item.title} value={index === 0 ? '' : item.value}>
                        {item.title}
                    </option>
                );
            })}
        </select>
    );
};

export default Select;
