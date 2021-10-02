import { Typography } from "@mui/material";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import styled from '@emotion/styled'

const ScoreboardContainer = styled(Grid)`
background-color: pink;
`

interface ScoreboardProps {
	currentScore: number;
	bestScore: number;
}

const Scoreboard = (props: ScoreboardProps) => {

  return (
    <ScoreboardContainer container item direction="row" boxShadow={10} p={1} mx="auto" mb={4}>
			<Grid container item direction="row" m={1}>
				<Grid item m={1} mb={0} xs={2}>
					<Typography variant="h5" textAlign="left">CatMemory!</Typography>
				</Grid>
				<Grid container item m={1} mb={0} xs={9} justifyContent="right">
					<Grid item>
						<Typography variant="h5" textAlign="center">Score: {props.currentScore}</Typography>
					</Grid>
					<Grid item>
						<Typography variant="h5" textAlign="center" mx={2}>|</Typography>
					</Grid>
					<Grid item>
						<Typography variant="h5" textAlign="center">Best: {props.bestScore}</Typography>
					</Grid>
				</Grid>
      </Grid>
    </ScoreboardContainer>
  );
};

export default Scoreboard;
