import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { TETROMINOS } from '../tetrominos';

const Cell = ({ type }) => (
    <StyledCell className={type} type={type} color={TETROMINOS[type].color}>{console.log(type)}</StyledCell>
)

export default React.memo(Cell);