import {createContext, useContext, useState} from 'react';
import {UserValues} from '~types/user';

type UserState = {
    userValues: UserValues;
    setUserValues: (values: UserValues) => void;
};

const UserContext = createContext<UserState>({
    userValues: {
        bmi: undefined,
        bmr: undefined,
        lbm: undefined,
        kcals: undefined,
        macros: undefined,
    },
    setUserValues: (values: UserValues) => {},
});

export const UserProvider = ({children}: {children: React.ReactNode}) => {
    const [userValues, setUserValues] = useState<UserValues>({
        bmi: undefined,
        bmr: undefined,
        lbm: undefined,
        kcals: undefined,
        macros: undefined
    });
    return (
        <UserContext.Provider value={{userValues, setUserValues}}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    return useContext(UserContext);
};
