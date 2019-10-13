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
import { randomTetromino } from '../../tetrominos';
import UserContainer from '../containers/UserContainer'

const Tetris = () => {
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
    const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
    const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared);

    const { username } = useSelector(state => state.username, "");

    const movePlayer = dir => {
        if (!checkCollision(player, stage, { x: dir, y: 0 })) {
            updatePlayerPos({ x: dir, y: 0 });
        }
    }

    const startGame = () => {
        // Reset everything
        const randTet = randomTetromino();
        setStage(createStage());
        setDropTime(1000);
        resetPlayer(randTet);
        setGameOver(false);
        setScore(0);
        setRows(0);
        setLevel(0);
    }

    const drop = () => {
        if (player.gameOver) {
            setGameOver(true);
            setDropTime(null);
            updatePlayerPos({ x: 0, y: 0, collided: true });
        } else {
            // Increase level when player has cleared 10 rows
            if (rows > (level + 1) * 10) {
                setLevel(prev => prev + 1);
                // Also increase speed
                setDropTime(1000 / (level + 1) + 200);
            }
            if (!checkCollision(player, stage, { x: 0, y: 1 })) {
                updatePlayerPos({ x: 0, y: 1, collided: false });
            } else {
                updatePlayerPos({ x: 0, y: 0, collided: true });
            }
        }
    }

    const keyUp = ({ keyCode }) => {
        if (!gameOver) {
            if (keyCode === 40) {
                setDropTime(1000 / (level + 1) + 200);
            }
        }
    }

    const dropPlayer = () => {
        setDropTime(null);
        drop();
    }

    const hardDropPlayer = () => {
        if (player.gameOver) {
            setGameOver(true);
            setDropTime(null);
            updatePlayerPos({ x: 0, y: 0, collided: true });
        } else {
            let i = 0;
            for(; i < STAGE_HEIGHT; i++) {
                if (checkCollision(player, stage, { x: 0, y: i })) {
                    break;
                }
            }
            updatePlayerPos({ x: 0, y: (i - 1), collided: true });
        }
    }

    const move = e => {
        if (username) {
            e.preventDefault();
            if (!gameOver && !player.gameOver) {
                if (e.keyCode === 37) { //left arrow
                    movePlayer(-1);
                } else if (e.keyCode === 39) { //right arrow
                    movePlayer(1);
                } else if (e.keyCode === 40) { //down arrow
                    dropPlayer();
                } else if (e.keyCode === 38) { //up arrow
                    playerRotate(stage, 1);
                } else if (e.keyCode === 90) { //z key
                    playerRotate(stage, -1);
                } else if (e.keyCode === 32) { //space bar
                    hardDropPlayer();
                }
            }
        }
    }

    useInterval(() => {
        drop();
    }, dropTime)

    return (
        <div className="styledTetris col" role="button" tabIndex="0" onKeyDown={e => move(e)} onKeyUp={keyUp}>
                <aside>
                    {player.gameOver ? (
                        <Display gameOver={player.gameOver} text="Game Over" />
                    ) : (
                        <div>
                            <Display text={`Score: ${score}`} />
                            <Display text={`Rows: ${rows}`} />
                            <Display text={`Level: ${level}`} />
                        </div>
                    )}
                    <StartButton callback={startGame} />
                </aside>
                {username ? <Stage  stage={stage} username={username}/> : (<UserContainer/>)
                }
                <aside>
                    <div>
                    <Next stage={stage} />
                    </div>
                    
                </aside>
                
        </div>
    )
}

export default Tetris;