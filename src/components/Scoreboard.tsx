import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";
import mediaBreakPoint from "../cssUtils/mediaBreakpoints";

const ScoreboardContainer = styled(Grid)`
  background-color: pink;
`;
const CenteredGridMobile = styled(Grid)`
	justify-content: end;
  ${mediaBreakPoint.mobile} {
		justify-content: center !important;
    margin: 0 auto;
  }
`;

interface ScoreboardProps {
  currentScore: number;
  bestScore: number;
}

const Scoreboard = (props: ScoreboardProps) => {
  return (
    <ScoreboardContainer
      container
      item
      direction="row"
      boxShadow={10}
      p={1}
      mx="auto"
      mb={4}
    >
      <Grid container item direction="row" m={1}>
        <CenteredGridMobile item m={1} mb={0} sm={2}>
          <Typography variant="h5">CatMemory!</Typography>
        </CenteredGridMobile>
        <CenteredGridMobile
          container
          item
          m={1}
          mb={0}
          sm={9}
        >
          <Grid item>
            <Typography variant="h5" textAlign="center">
              Score: {props.currentScore}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5" textAlign="center" mx={2}>
              |
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5" textAlign="center">
              Best: {props.bestScore}/15
            </Typography>
          </Grid>
        </CenteredGridMobile>
      </Grid>
    </ScoreboardContainer>
  );
};

export default Scoreboard;
