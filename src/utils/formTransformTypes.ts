import {FormData} from '~types/form';

export const formTransformTypes = (data: Record<string, unknown>): FormData => {
    const obj = {
        gender: data.gender as 'Man' | 'Woman',
        weight: Number(data.weight),
        height: Number(data.height),
        age: Number(data.age),
        activity: Number(data.activity),
        wtd: Number(data.wtd),
    };

    return obj;
};
