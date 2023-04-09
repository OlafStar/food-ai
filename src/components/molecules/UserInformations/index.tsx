import {useUser} from '~providers/UserProvider';

const UserInformations = () => {
    const {
        userValues: {bmi, bmr, lbm, kcals, macros},
    } = useUser();
    return (
        <div>
            <div>{`BMI: ${bmi?.toFixed(2)}`}</div>
            <div>{`BMR: ${bmr?.toFixed(2)}`}</div>
            <div>{`LBM: ${lbm?.toFixed(2)}`}</div>
            <div>{`KCALS: ${kcals?.toFixed(2)}`}</div>
            <div>{`Bialko: ${macros?.protein}g Wegle: ${macros?.carbs}g Tluszcze: ${macros?.fats}g`}</div>
        </div>
    );
};

export default UserInformations;
