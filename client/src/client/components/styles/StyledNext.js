import styled from 'styled-components';

export const StyledNext = styled.div`
    display: grid;
    grid-template-rows: repeat(
        4,
        30px
    );
    grid-template-columns: repeat(
        4,
        30px
    );
    grid-gap: 1px;
    border: 2px solid #333;
    width: 120px;
    max-width: 120px;
    background: #111;
`