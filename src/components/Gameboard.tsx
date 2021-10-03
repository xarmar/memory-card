import Card from "./Card";
import { Char } from "../types/customTypes";
import createCharacter from "../factoryFunctions/characterFactory";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import Scoreboard from "./Scoreboard";

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
import catEleven from "../assets/catEleven.jpeg";
import catTwelve from "../assets/catTwelve.jpeg";
import catThirteen from "../assets/catThirteen.jpeg";
import catFourteen from "../assets/catFourteen.jpeg";
import catFifteen from "../assets/catFifteen.jpeg";

const Gameboard = () => {
  // Initiate arrayOfCharacters
  const [arrayOfCharacters, setArrayOfCharacters] = useState<Char[]>([]);
  // Keeps track of which cards to display on the screen
  const [cardsToDisplay, setCardsToDisplay] = useState<JSX.Element[]>([]);

  // Keeps track of what characters the user has clicked before
  const [clickedCharacters, setClickedCharacters] = useState<Char[]>([]);
  // Keeps track of the user's latest click
  const [latestClickedChar, setLastestClickedChar] = useState<Char>();

  // Keeps track of user's current score
  const [currentScore, setCurrentScore] = useState<number>(0);
  // Keeps track of user's best score
  const [bestScore, setBestScore] = useState<number>(0);

  // Shuffles array of Characters
  const shuffleArrayOfCharacters = (arrayOfCharacters: Char[]): Char[] => {
    /*
    let possibleIndexes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    let pickedIndexes = [];

    let desiredCharacters = 9;
    while (desiredCharacters > 0) {
      // Pick random index push it to pickedIndexes Array
      let pickRandomIndex = Math.floor(Math.random() * possibleIndexes.length);
      pickedIndexes.push(possibleIndexes[pickRandomIndex]);

      // Remove the picked index from the possible Indexes array
      let indexToRemove = possibleIndexes.indexOf(
        possibleIndexes[pickRandomIndex]
      );
      possibleIndexes.splice(indexToRemove, 1);

      desiredCharacters--;
    }

    let desiredCats: Char[] = [];

    pickedIndexes.forEach((index) => {
      desiredCats.push(arrayOfCharacters[index]);
    });
  */
    let randomizedArray = arrayOfCharacters.sort(() => Math.random() - 0.5);
    return randomizedArray;
  };

  // Updates latestClickedChar
  const handleCharacterClick = (character: Char) => {
    setLastestClickedChar((char) => character);
  };

  // Resets game
  const resetRound = () => {
    setClickedCharacters([]);
    setLastestClickedChar(undefined);
    setCurrentScore((currentScore) => 0);
  };

  // On Component Mount - add Characters to arrayOfCharacters
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
    let ubba: Char = createCharacter("Ubba", catTen);
    let hild: Char = createCharacter("Hild", catEleven);
    let Sihtric: Char = createCharacter("Sihtric", catTwelve);
    let Osferth: Char = createCharacter("Osferth", catThirteen);
    let Eadith: Char = createCharacter("Eadith", catFourteen);
    let Aldhelm: Char = createCharacter("Aldhelm", catFifteen);

    let tempArray: Char[] = [];

    tempArray.push(
      uhtred,
      beocca,
      leofric,
      alfred,
      brida,
      mildrith,
      iseult,
      aelswith,
      ragnar,
      ubba,
      hild,
      Sihtric,
      Osferth,
      Eadith,
      Aldhelm
    );

    setArrayOfCharacters((arrayOfCharacters) => tempArray);
  }, []);

  // When arrayOfCharacters or clickedCharacters are updated, update the screen
  useEffect(() => {
    // Tells GameBoard Component which cards to display on the screen
    const updateScreen = () => {
      // Shuffle Array of Characters
      let tempArray = arrayOfCharacters;
      let shuffledArray = shuffleArrayOfCharacters(tempArray);

      // Create List Of Cards To Display on The Screen
      let tempCards: JSX.Element[] = shuffledArray.map((character) => {
        return (
          <Grid item xs={3} sm={2} m={1} key={shuffledArray.indexOf(character)}>
            <Card
              handleCharacterClick={handleCharacterClick}
              character={character}
            />
          </Grid>
        );
      });

      // Inform component of which cards to display on the render method
      setCardsToDisplay(tempCards);
    };

    updateScreen();
  }, [arrayOfCharacters, clickedCharacters]);

  // Update bestScore if currentScore > bestScore
  useEffect(() => {
    // Update Best Score if applicable
    if (currentScore > bestScore) {
      setBestScore(currentScore);
    }
  }, [currentScore, bestScore]);

  // Decide if user gets points or if game resets
  useEffect(() => {
    if (latestClickedChar !== undefined) {
      // If user clicks the same character twice - reset Round
      if (
        clickedCharacters.some((char) => char.name === latestClickedChar.name)
      ) {
        resetRound();
      } else {
        // Add character to clickedCharacters array
        setClickedCharacters((clickedCharacters) =>
          clickedCharacters.concat(latestClickedChar)
        );
        // Increment user score
        setCurrentScore((currentScore) => currentScore + 1);
        /* Set state to undefined to allow state to change if user clicks the same character twice in a row 
        (otherwise, state would be the same and it would not trigger this useEffect since the array dependency would not change).*/
        setLastestClickedChar((char) => undefined);
      }
    }
  }, [latestClickedChar, clickedCharacters]);

  return (
    <Box>
      <Grid container direction="row">
        <Scoreboard currentScore={currentScore} bestScore={bestScore} />
        <Grid container item direction="row" justifyContent="center">
          {[cardsToDisplay]}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Gameboard;
