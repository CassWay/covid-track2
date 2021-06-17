import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";

function InfoBox({ title, isRed, isGrey, active, cases, total, ...props }) {
	return (
		<Card
			onClick={props.onClick}
			className={`infoBox ${active && "infoBox--selected"} ${
				isRed && "infoBox--red"
			} ${isGrey && "infoBox--grey"} `}
		>
			<CardContent>
				{/* Title -- Coronavirus cases */}
				<Typography className="infoBox__title" color="black">
					{title}
				</Typography>
				{/* Number of cases */}
				<h2
					className={`infoBox__cases ${!isRed && "infoBox__cases--green"} ${
						isGrey && "infoBox__cases--grey"
					}`}
				>
					{props.isloading ? <i className="fa fa-cog fa-spin fa-fw" /> : cases}
				</h2>
				{/* Total  */}
				<Typography className="infoBox__total" color="black">
					{total} Total
				</Typography>
			</CardContent>
		</Card>
	);
}

export default InfoBox;
