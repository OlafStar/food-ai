import {RegisterOptions, useFormContext} from 'react-hook-form';

export type SelectValue = {title: string; value: string | number};

type ButtonSelectProps = {
    values: SelectValue[];
    name: string;
    registerOptions?: RegisterOptions;
};

const ButtonSelect = ({values, name, registerOptions}: ButtonSelectProps) => {
    const {register, setValue, getValues} = useFormContext();
    const selectRegister = register(`${name}`, registerOptions);

    return (
        <div>
            {values.map((item) => (
                <button
                    key={item.title}
                    onClick={(e) => {
                        e.preventDefault();
                        setValue(name, item.value);
                    }}
                >
                    {item.title}
                </button>
            ))}
            <select
                {...selectRegister}
                value={getValues(name)}
                style={{display: 'none'}}
            ></select>
        </div>
    );
};

export default ButtonSelect;
