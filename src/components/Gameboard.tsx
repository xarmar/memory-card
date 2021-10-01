import Card from "./Card";
import { Char } from "../types/customTypes";
import createCharacter from "../factoryFunctions/characterFactory";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";

// Import Character Images
import catOne from "../assets/catOne.jpeg";
import catTwo from "../assets/catTwo.jpeg";
import catThree from "../assets/catThree.jpeg";
import catFour from "../assets/catFour.jpeg";
import catFive from "../assets/catFive.jpeg";
import catSix from "../assets/catSix.jpeg";
import CatSeven from "../assets/catSeven.jpeg";
import catEight from "../assets/catEight.jpeg";
import catNine from "../assets/catNine.jpeg";
import catTen from "../assets/catTen.jpeg";


const Gameboard = () => {
  // Initiate arrayOfCharacters
  let arrayOfCharacters: Char[] = [];

  // Keeps track of which cards to display on the screen
  const [cardsToDisplay, setCardsToDisplay] = useState<JSX.Element[]>([]);

  // Keeps track of which characters the user has clicked
  const [clickedCharacters, setClickedCharacters] = useState([]);

  // Shuffles array of Characters
  const shuffleArrayOfCharacters = (arrayOfCharacters: Char[]): Char[] => {
    let randomizedArray = arrayOfCharacters.sort(() => Math.random() - 0.5);
    return randomizedArray;
  };

  // Tells GameBoard Component which cards to display on the screen
  const updateScreen = () => {
    // Shuffle Array of Characters
    shuffleArrayOfCharacters(arrayOfCharacters);

    // Create List Of Cards To Display on The Screen
    let tempCards: JSX.Element[] = arrayOfCharacters.map((character) => {
      return (
        <Grid item xs={3} sm={2} m={1} key={arrayOfCharacters.indexOf(character)}>
          <Card character={character} />
        </Grid>
      );
    });

    // Inform component of which cards to display on the render method
    setCardsToDisplay(tempCards);
  };

  // On Component Mount - add Characters To array and display cards
  useEffect(() => {
    // Create Characters
    let uhtred: Char = createCharacter("Uhtred", catOne);
    let beocca: Char = createCharacter("Beocca", catTwo);
    let leofric: Char = createCharacter("Leofric", catThree);
    let alfred: Char = createCharacter("Alfred", catFour);
    let brida: Char = createCharacter("Brida", catFive);
    let mildrith: Char = createCharacter("Mildrith", catSix);
    let iseult: Char = createCharacter("Iseult", CatSeven);
    let aelswith: Char = createCharacter("Aelswith", catEight);
    let ragnar: Char = createCharacter("Ragnar", catNine);
    let ubba: Char = createCharacter('Ubba', catTen);

    // Add Characters to Array
    arrayOfCharacters.push(
      uhtred,
      beocca,
      leofric,
      alfred,
      brida,
      mildrith,
      iseult,
      aelswith,
      ragnar,
      ubba
    );

    // Update Screen with Cards
    updateScreen();
  }, []);

  return (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Grid container direction="row" justifyContent="center">
          {[cardsToDisplay]}
        </Grid>
      </Box>
    </div>
  );
};

export default Gameboard;
