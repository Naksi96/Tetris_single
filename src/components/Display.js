import React from 'react';
import { StyledDisplay } from './styles/StyledDisplay';

const Display = ({ gameover, text }) => (
    <StyledDisplay gameOver={gameover}>{text}</StyledDisplay>
)

export default Display;