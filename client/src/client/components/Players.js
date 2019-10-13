import React from "react";
import { useParams } from "react-router-dom";

const Players = () => {
	const { room } = useParams();
	const roomid = room.split('[')[0];
	const username = room.split('[').pop().split(']')[0];
	console.log(username);
	console.log(roomid);
	return (
	<div className="players col">
		<div className="row">
			<div className="col">
				<div className="board">

				</div>
			</div>
			<div className="col">
				<div className="board">

				</div>
			</div>
			<div className="col">
				<div className="board">

				</div>
			</div>
		</div>
		<div className="row">
			<div className="col">
				<div className="board">

				</div>
			</div>
			<div className="col">
				<div className="board">

				</div>
			</div>
			<div className="col">
				<div className="board">
				
				</div>
			</div>
		</div>
	</div>
)};

export default Players;
