import { Char } from "../types/customTypes";

const createCharacter = (charName: string, pictureUrl: string): Char => {
  return {
    name: charName,
    picture: pictureUrl,
  };
};

export default createCharacter;
