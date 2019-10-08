import React from 'react';
import { StyledStartButton } from './styles/StyledStartButton';



const StartButton = ({ callback }) => {
    
    return (
        <StyledStartButton onMouseDown={(e) => {
            if (e) {
                e.preventDefault();
                callback();
            }}} onKeyUp={(e) => {
            if (e.keyCode === 13 || e.keyCode === 32) {
                e.preventDefault();
                callback();
            }}}>
            Start Game
        </StyledStartButton>
)}

export default StartButton;