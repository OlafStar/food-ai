import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    @media (max-width: 1266px) {
        --h-padding: 70px;
    }
    @media (max-width: 546px) {
        --h-padding: 35px;
    }
    --h-padding: calc((100vw - 1440px) / 2 + 156px);
`;
