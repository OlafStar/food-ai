export const bmi = (weight: number, height: number): number => {
    return (weight / (height * height)) * 10000;
};
