## PROJECT: MEMORY CARD - GAMEPLAN

The objective of this project is to really get used to using functional components and hooks. I will not use class Components or lifecycle Methods.

### Strategy:
Before I start to code I need to understand what the end goal is and what the UX will look like. otherwise I'm going in blind.

<br>

**UI/UX OF THE GAME**
- The game starts with, cards layed out on the screen in a random order.
    - Each card display a **character**. Each character has a:
        - Name
        - Picture
        - Catchphrase.

- The player's goal is to pick as many different characters as possible in succession. This will give the player points. For example, picking 5 different characters in sucession, means a score of 5.

- Each time the player clicks an image, the cards are shuffled and displayed on the screen once again.

- If the player clicks a character for a 2nd time, the game resets. Before it resets, it checks if the current score is higher than the player's highest score. If so, the app saves the current score as the player's highest score.

- The app will keep track of the player's current score and the player's highest score and it will display those scores on the screen.

<br>

**COMPONENTS THE APP WILL NEED**
- Gameboard:
    - Initiates the game by setting score to 0 and displaying cards on the screen in a random order. **[useEffect]** with empty dependency [].
    - Keeps track of what cards have been clicked before (Array) **[useState]**;
    - If user clicks a character that hasn't been clicked before, add to array and shuffle cards. **[useEffect]** with array dependency.
    - If user clicks a character for a 2nd time, restart the game. Save the score if score > player's highest score **[useEffect]**
- Scoreboard:
    - Keeps track of user current points and user highest points **[useState]**;
- Card:
    - Displays a character's information
- Character:
    - Has a name
    - Has a picture

