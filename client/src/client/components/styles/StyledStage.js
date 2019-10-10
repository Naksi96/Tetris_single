import styled from 'styled-components';

export const StyledStage = styled.div`
    display: grid;
    grid-template-rows: repeat(
        20,
        30px
    );
    grid-template-columns: repeat(
        12,
        30px
    );
    grid-gap: 1px;
    border: 2px solid #333;
    border-top: none;
    width: 375px;
    max-width: 375px;
    background: #111;
`