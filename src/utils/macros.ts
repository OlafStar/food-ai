import {MacroElements} from '~types/user';

export const macros = (weight: number, kcals: number): MacroElements => {
    const protein = Math.floor(weight * 1.7);
    const fats = Math.floor((kcals * 0.25) / 9);
    const carbs = Math.floor((kcals - protein * 4 - fats * 9) / 4);
    return {
        protein,
        carbs,
        fats,
    };
};
