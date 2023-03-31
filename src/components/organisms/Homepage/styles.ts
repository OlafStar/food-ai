import styled from 'styled-components';

export const HomepageContainer = styled.div`
    width: 100%;
    padding: 0px var(--h-padding);
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

export const LeftColumn = styled.div`
    background-color: lightgray;
`;

export const RightColumn = styled.div`
    background-color: lightcoral;
`;
