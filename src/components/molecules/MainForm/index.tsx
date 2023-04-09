import {FormProvider, useForm} from 'react-hook-form';
import ButtonSelect from '~components/atoms/ButtonSelect';
import Input from '~components/atoms/Input';
import Select from '~components/atoms/Select';
import {useUser} from '~providers/UserProvider';
import {FormData} from '~types/form';
import {bmi} from '~utils/bmi';
import {bmr} from '~utils/bmr';
import {formTransformTypes} from '~utils/formTransformTypes';
import {lbm} from '~utils/lbm';
import {macros} from '~utils/macros';
import {StyledForm} from './styles';

const MainForm = () => {
    const methods = useForm<FormData>();
    const {userValues, setUserValues} = useUser();

    const onSubmit = (data: FormData) => {
        const {gender, weight, age, height, activity, wtd} =
            formTransformTypes(data);

        setUserValues({
            bmi: bmi(weight, height),
            bmr: bmr(gender, weight, height, age, activity),
            lbm: lbm(weight, height),
            kcals: bmr(gender, weight, height, age, activity) * wtd,
            macros: macros(weight, bmr(gender, weight, height, age, activity) * wtd),
        });
    };

    console.log(userValues);

    return (
        <FormProvider {...methods}>
            <StyledForm id="mainForm" onSubmit={methods.handleSubmit(onSubmit)}>
                <ButtonSelect
                    name="gender"
                    values={[
                        {title: 'Man', value: 'Man'},
                        {title: 'Woman', value: 'Woman'},
                    ]}
                />
                <Input
                    label="Weight"
                    name="weight"
                    type="number"
                    registerOptions={{required: true, min: 0, max: 200}}
                />
                <Input
                    label="Height"
                    name="height"
                    type="number"
                    registerOptions={{required: true, min: 0, max: 200}}
                />
                <Input
                    label="Age"
                    name="age"
                    type="number"
                    registerOptions={{required: true, min: 0, max: 100}}
                />
                <Select
                    name="activity"
                    values={[
                        {title: 'Choose your activity type', value: 0},
                        {
                            title: 'Siedzący tryb życia (mało lub wcale nie ćwiczy)',
                            value: 1.3,
                        },
                        {
                            title: 'Lekko aktywny (lekkie ćwiczenia lub sport 1-3 dni w tygodniu)',
                            value: 1.5,
                        },
                        {
                            title: 'Umiarkowanie aktywny (umiarkowane ćwiczenia lub sporty 3-5 dni w tygodniu)',
                            value: 1.75,
                        },
                        {
                            title: 'Bardzo aktywny (ciężkie ćwiczenia lub sporty 6-7 dni w tygodniu)',
                            value: 2.2,
                        },
                        {
                            title: 'Niezwykle aktywny (bardzo ciężkie ćwiczenia lub sport, praca fizyczna lub trening dwa razy dziennie)',
                            value: 2.6,
                        },
                    ]}
                    registerOptions={{required: true}}
                />
                <Select
                    name="wtd"
                    values={[
                        {title: 'Choose what you want to do', value: ''},
                        {title: 'Lose weight', value: 1.12},
                        {title: 'Stay on weight', value: 1.27},
                        {title: 'Gain weight', value: 1.42},
                    ]}
                    registerOptions={{required: true}}
                />
                <input type="submit" value="Submit" />
            </StyledForm>
        </FormProvider>
    );
};

export default MainForm;
