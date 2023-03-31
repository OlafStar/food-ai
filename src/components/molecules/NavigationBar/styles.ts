import styled from 'styled-components';

export const NavigationBarContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px var(--h-padding);
`;

export const ButtonsContainer = styled.div`
    display: flex;
    gap: 24px;
`;

export const StyledButton = styled.button`
    padding: 12px 24px;
    color: white;
    background-color: black;
    border-radius: 24px;
    cursor: pointer;
`;
