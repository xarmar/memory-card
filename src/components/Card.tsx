import { Char } from "../types/customTypes";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";
import mediaBreakPoint from "../cssUtils/mediaBreakpoints"



type bgImageProps = {
  picture: any;
};

const CardContainer = styled(Grid)`
  background-color: whitesmoke;
  border: 5px solid transparent;
  &:hover {
    background-color: pink;
    border: 5px solid pink;
    cursor: pointer;
  }
`;

const BackgroundImageDiv = styled.div<bgImageProps>`
  background-image: url(${(props) => props.picture});
  background-position: center;
  background-size: cover;
  height: 180px;
  ${mediaBreakPoint.mobile} {
    height:100px;
  }
`;

interface CardProps {
  character: Char,
  handleCharacterClick: Function
}

const Card = (props: CardProps) => {

  return (
    <CardContainer
      container
      item
      textAlign="center"
      display="block"
      boxShadow={10}
      mb={2}
      onClick={() => props.handleCharacterClick(props.character)}
    >
      <Grid item>
        <Typography variant="h6" m={"auto"}>
          {props.character.name}
        </Typography>
      </Grid>
      <BackgroundImageDiv
        picture={props.character.picture}
      ></BackgroundImageDiv>
    </CardContainer>
  );
};

export default Card;
