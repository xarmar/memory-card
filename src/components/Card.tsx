import { Char } from "../types/customTypes";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";

type bgImageProps = {
  picture: any
}

const CardContainer = styled(Grid)`
  background-color: whitesmoke;
`;

const BackgroundImageDiv = styled.div<bgImageProps>`
  background-image: url(${props => props.picture});
  background-size: cover;
  min-height: 200px;
`;

interface CardProps {
  character: Char
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
    >
      <Grid item>
        <Typography variant="h6" mb={2}>
          {props.character.name}
        </Typography>
      </Grid>
      <BackgroundImageDiv picture={props.character.picture}>
      </BackgroundImageDiv>
    </CardContainer>
  );
};

export default Card;
