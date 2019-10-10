import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { createStage, checkCollision } from '../../gameHelpers';


// Custom Hooks
import { useInterval } from '../hooks/useInterval';
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';
import { useGameStatus } from '../hooks/useGameStatus';

// Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';
import Next from './Next';
import { STAGE_HEIGHT } from '../../gameHelpers';
import UserContainer from '../containers/UserContainer'

const Tetris = () => {
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
    const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
    const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared);

    const { username } = useSelector(state => state.username, "");

    console.log(username)

    const movePlayer = dir => {
        if (!checkCollision(player, stage, { x: dir, y: 0 })) {
            updatePlayerPos({ x: dir, y: 0 });
        }
    }

    const startGame = () => {
        // Reset everything
        setStage(createStage());
        setDropTime(1000);
        resetPlayer();
        setGameOver(false);
        setScore(0);
        setRows(0);
        setLevel(0);
    }

    const drop = () => {
        // Increase level when player has cleared 10 rows
        if (rows > (level + 1) * 10) {
            setLevel(prev => prev + 1);
            // Also increase speed
            setDropTime(1000 / (level + 1) + 200);
        }
        if (!checkCollision(player, stage, { x: 0, y: 1 })) {
            updatePlayerPos({ x: 0, y: 1, collided: false });
        } else {
            // Game Over
            if (player.pos.y < 1) {
                console.log("GAME OVER!!!");
                setGameOver(true);
                setDropTime(null);
            }
            updatePlayerPos({ x: 0, y: 0, collided: true });
        }
    }

    const keyUp = ({ keyCode }) => {
        if (!gameOver) {
            if (keyCode === 40) {
                console.log("interval on");
                setDropTime(1000 / (level + 1) + 200);
            }
        }
    }

    const dropPlayer = () => {
        console.log("interval off");
        setDropTime(null);
        drop();
    }

    const hardDropPlayer = () => {
        let i = 0;
        for(; i < STAGE_HEIGHT; i++) {
            if (checkCollision(player, stage, { x: 0, y: i })) {
                break;
            }
        }
        console.log(player);
        console.log(player.initialHeight);
        console.log(i);
        if (i - 1 === 0) {
            console.log(player);
            console.log("GAME OVER!!!");
            setGameOver(true);
            setDropTime(null);
        }
        updatePlayerPos({ x: 0, y: (i - 1), collided: true });
    }

    const move = e => {
        e.preventDefault();
        if (!gameOver) {
            if (e.keyCode === 37) { //left arrow
                movePlayer(-1);
            } else if (e.keyCode === 39) { //right arrow
                movePlayer(1);
            } else if (e.keyCode === 40) { //down arrow
                dropPlayer();
            } else if (e.keyCode === 38) { //up arrow
                playerRotate(stage, 1);
            } else if (e.keyCode === 90) {
                playerRotate(stage, -1);
            } else if (e.keyCode === 32) { //space bar
                hardDropPlayer();
            }
        }
    }

    useInterval(() => {
        drop();
    }, dropTime)

    return (
        <div className="styledTetris" role="button" tabIndex="0" onKeyDown={e => move(e)} onKeyUp={keyUp}>
                <aside>
                    {gameOver ? (
                        <Display gameOver={gameOver} text="Game Over" />
                    ) : (
                        <div>
                            <Display text={`Score: ${score}`} />
                            <Display text={`Rows: ${rows}`} />
                            <Display text={`Level: ${level}`} />
                        </div>
                    )}
                    <StartButton callback={startGame} />
                </aside>
                {username ? (<UserContainer/>) : 
                <Stage  stage={stage} />}
                <aside>
                    <div>
                    <Next stage={stage} />
                    </div>
                    
                </aside>
                
        </div>
    )
}

export default Tetris;