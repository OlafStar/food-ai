import {useForm, useFormContext} from 'react-hook-form';
import ButtonSelect from '~components/atoms/ButtonSelect';
import Input from '~components/atoms/Input';
import Select from '~components/atoms/Select';
import {StyledForm} from './styles';

const MainForm = () => {
    const {
        handleSubmit,
        register,
        formState: {errors},
        reset,
        formState,
        setValue,
    } = useForm();

    return (
        <StyledForm id="mainForm">
            <ButtonSelect values={['Man', 'Woman']} />
            <Input label="Weight" />
            <Input label="Height" />
            <Input label="Age" />
            <Select
                label="Activity"
                values={['Choose your activity type', 'Low', 'Average', 'High']}
            />
            <Select
                label="What to do"
                values={[
                    'Choose what you want to do',
                    'Lose weight',
                    'Stay on weight',
                    'Gain weight',
                ]}
            />
        </StyledForm>
    );
};

export default MainForm;
