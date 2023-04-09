export const bmr = (
    gender: 'Woman' | 'Man',
    weight: number,
    height: number,
    age: number,
    pal: number,
): number => {
    return gender === 'Woman'
        ? 655 + 9.6 * weight + 1.8 * height - 4.7 * age 
        : 66 + 13.7 * weight + 5 * height - 6.8 * age ;
};
