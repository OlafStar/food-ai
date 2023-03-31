import {ButtonsContainer, NavigationBarContainer, StyledButton} from './styles';

const NavigationBar = () => {
    return (
        <NavigationBarContainer>
            <div>{'FoodAI'}</div>
            <ButtonsContainer>
                <StyledButton>{'Login'}</StyledButton>
                <StyledButton>{'Register'}</StyledButton>
            </ButtonsContainer>
        </NavigationBarContainer>
    );
};

export default NavigationBar;
