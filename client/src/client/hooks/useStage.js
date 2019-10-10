import { useState, useEffect } from 'react';
import { createStage } from '../../gameHelpers';
import { randomTetromino } from '../../tetrominos';
import { STAGE_WIDTH } from '../../gameHelpers';

export const useStage = (player, resetPlayer) => {
    const [stage, setStage] = useState(createStage());
    const [rowsCleared, setRowsCleared] = useState(0);

    useEffect(() => {
        setRowsCleared(0);

        const sweepRows = newStage =>
            newStage.reduce((ack, row) => {
                if (row.findIndex(cell => cell[0] === 0) === -1) {
                    setRowsCleared(prev => prev + 1);
                    ack.unshift(new Array(newStage[0].length).fill([0, 'clear']));
                    return ack;
                }
                ack.push(row);
                return ack;
            }, [])

        const updateStage = prevStage => {
            // First fluch the stage
            const newStage = prevStage.map(row => 
                row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell))
            );

            // Then draw the tetromino
            player.tetromino.forEach((row, y) => {
                row.forEach((value, x) => {
                    if (value !== 0) {
                        newStage[y + player.pos.y][x + player.pos.x] = [
                            value,
                            `${player.collided ? 'merged' : 'clear'}`
                        ];
                    }
                });
            });
            if (!player.gameOver) {
                // Then check if we collided
                if (player.collided) {
                    let randTet = randomTetromino();
                    let continuable = true;
                    for (let i = 0; i < randTet.initialHeight; i++) {
                        for (let j = 0; j < randTet.initialWidth; j++) {
                            if (newStage[i][STAGE_WIDTH / 2 - 2 + j][1] === 'merged') {
                                continuable = false;
                                break ;
                            }
                        }
                    }
                    if (continuable) {
                        resetPlayer(randTet);
                        return sweepRows(newStage);
                    } else {
                        randTet = {
                            ...randTet,
                            gameOver: true
                        }
                        resetPlayer(randTet);
                        return sweepRows(newStage);
                    }
                }
            }
            return newStage;
        };
        setStage(prev => updateStage(prev));
    }, [player, resetPlayer]);

    return [stage, setStage, rowsCleared];
}