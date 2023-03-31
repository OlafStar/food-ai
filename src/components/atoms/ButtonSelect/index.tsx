import {useState} from 'react';

type ButtonSelectProps = {
    values: string[];
};

const ButtonSelect = ({values}: ButtonSelectProps) => {
    const [currentValue, setCurrentValue] = useState<string | undefined>(undefined);
    return (
        <div>
            {values.map((item) => (
                <button>{item}</button>
            ))}
            <select value={currentValue} style={{display: 'none'}}></select>
        </div>
    );
};

export default ButtonSelect;
