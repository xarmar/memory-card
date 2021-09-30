import Card from "./Card";
import { Char } from "../types/customTypes";
import createCharacter from "../factoryFunctions/characterFactory";
import React, { useEffect, useState } from 'react'

// Import Character Images
import aelswithJpg from '../assets/aelswith_crop.jpg'
import alfredJpg from '../assets/alfred_crop.jpg'
import beoccaJpg from '../assets/beocca_crop.jpg'
import bridaJpg from '../assets/brida_crop.jpg'
import iseultJpg from '../assets/iseult_crop.jpg'
import leofricJpg from '../assets/leofric_crop.jpg'
import mildrithJpg from '../assets/mildrith_crop.jpg'
import ragnarJpg from '../assets/ragnar_crop.jpg'
import uhtredJpg from '../assets/uhtred_crop.jpg'


const Gameboard = () => {

    // Initiate arrayOfCharacters
    let arrayOfCharacters: Char[] = [];

    // Keeps track of which cards to display on the screen
    const [cardsToDisplay, setCardsToDisplay] = useState<JSX.Element[]>([]);

    // Keeps track of which characters the user has clicked
    const [clickedCharacters, setClickedCharacters] = useState([]);

    // Shuffles array of Characters
    const shuffleArrayOfCharacters = (arrayOfCharacters: Char[]) => {
        let randomizedArray = arrayOfCharacters.sort(() => Math.random() - 0.5);
        return randomizedArray
    }

    // Tells GameBoard Component which cards to display on the screen
    const updateScreen = () => {
        // Shuffle Array of Characters
        shuffleArrayOfCharacters(arrayOfCharacters);

        // Create List Of Cards To Display on The Screen
        let tempCards:JSX.Element[] = arrayOfCharacters.map(character => {
            return (
                <div key={arrayOfCharacters.indexOf(character)}>
                    <Card character={character} />
                </div>
            )
        });

        // Inform component of which cards to display on the render method
        setCardsToDisplay(tempCards);
    }

    // On Component Mount - add Characters To array and display cards
    useEffect(() => {
        // Create Characters
        let uhtred: Char = createCharacter('Uhtred Ragnarson', uhtredJpg);
        let beocca: Char = createCharacter('Father Beocca',  beoccaJpg)
        let leofric: Char = createCharacter('Leofric', leofricJpg);
        let alfred: Char = createCharacter('Alfred The Great', alfredJpg);
        let brida: Char = createCharacter('Brida', bridaJpg);
        let mildrith: Char = createCharacter('Mildrith', mildrithJpg);
        let iseult: Char = createCharacter('Iseult', iseultJpg);
        let aelswith: Char = createCharacter('Aelswith', aelswithJpg);
        let ragnar: Char = createCharacter('Ragnar', ragnarJpg);

        // Add Characters to Array
        arrayOfCharacters.push(uhtred, beocca, leofric, alfred, brida, mildrith, iseult, aelswith, ragnar);

        // Update Screen with Cards
        updateScreen();
    }, []);

    
    return(
        <div>
            <div className="cards-container">
                {[cardsToDisplay]}
            </div>
        </div>
    )
}

export default Gameboard