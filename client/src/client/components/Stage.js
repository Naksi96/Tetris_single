import React from 'react';
import { StyledStage } from './styles/StyledStage';

import Cell from './Cell';
import PlayerInfo from './PlayerInfo';

const Stage = ({ stage }) => {
    return (
        <div>
        <PlayerInfo />
        <StyledStage width={stage[0].length} height={stage.length}>
            {stage.map(row => row.map((cell,x) => <Cell key={x} type={cell[0]} />))}
        </StyledStage>
        </div>
    )

}
export default Stage;