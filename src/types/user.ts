export type MacroElements = {protein: number; carbs: number; fats: number};

export type UserValues = {
    bmi: number | undefined;
    lbm: number | undefined;
    bmr: number | undefined;
    kcals: number | undefined;
    macros: MacroElements | undefined;
};
