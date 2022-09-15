# Rock, paper, sissors, lizard, spock

## UX - User Experience

### User stories
I want the user to:
- Play an entertaining game
- Be able to choose how many points are needed to win a round
- See the rules at all times
- See scores and choices each round

### Colour
I chose a dark blue colour and black for backgrounds. The instruction page has a black background and the page where you play the game has a dark blue one. The "game-window" has a black background with a lightblue border to make it look like a screen inspired by Star Trek TOS (the original series). The buttons are either blue or red. Red is for the different choices and blue is for the rest of the buttons. All text is white.
![Colours main](assets/media/Spock_main_colours.png)
![Colours buttons](assets/media/Spock_buttons_colours.png)

### Structure and typography
I wanted the game to look a bit like an older game, and be inspired by Star Trek TOS. To accive that I chose a font that looked very retro and tryled the game window like one of the screens in Star Trek. 

#### Structure
For the layout of the page i chose to create a game window with a border around it. This is how a lot of remakes of older games looks. The window is also shaped with round borders, just like the screens in Star Trek. I chose to have the rules accessable at all times due to this version/extention of the classic "Rock, paper, sissors" game. The only ones who really knows how it works are viewers of The Big Bang Theory. In order to avoid confusion about the result I chose to have the rules easily accessable at all times. On desktop, they are placed to the right of the game window, and on mobile and smaller screens, they are placed below the game window. The starting page was inspired by the starting pages of old 8-, and 16-bit games.
![Inspiration picture game window](assets/media/inspo_image.jpg)
![Inspiration picture information page - galaga](assets/media/galaga_starting_page.png)
![Inspiration picture information page - mario](assets/media/mario_starting_page.jpg)

#### Typography
The font i chose is called Orbitron (the san serif version, since it is easier to read on a screen). The letters are shaped the same way they were in older games, but less pixelated. This gives the game a retro feel while not looking too old and pixelated. I found the font on [Google fonts](https://fonts.google.com/specimen/Orbitron?query=orbitron).

## Features
The game is simple with one starting page and one game page with 3 windows. One window for choosing how many points is needed to win a game, one for the game itself, and one for the result of the game. 

### Starting/instruction page
This page was made to give the user instructions on how to play the game. In some games, especially older ones, you are not given all instructions on how to play the game. It is a lot of trial and error. Even if i want to give this game a retro feel, this is one of the things i dont want to replicate. An instruction page also keeps the user from getting frustrated and/or annoyed.

### Point choosing window
I have chosen to have this game work like when kids play rock, paper, sissors. You play until on of you gets 3 points. But instead of just making the user play to 3, they can choose to play to 3, 5 and 10. This is chosen on this window. If non of the options gets chosen, the game defaults to 3 points to win the game. When you click the blue button you get sent to the game window.

### Game window
When the user has chosen the points needed to win, they play the game itself. This is done on this window. When you choose aone of the options you get to know who won the round and the winner gets one point. Then you click continue to play another round. this continues until you or the computer have enough points to win. When that happens the continue button sends you to the result window.

### Result window
This window shows who won and also gives the user the option to start a new game.

### Rules
The rules are displayed as long as you are on the game.html page. Depending on which device you are on the placement might be a bit different, but the rules are always accessible. This is to avoid confusion, since this game is from a tv-show that not everyone has seen. By always showing the rules I can avoid the user getting confused about why for example spock wins against rock. The information is right there and the user can understand the logic. 

### Features left to implement
I would like to add some more choices that the user can make, and I would like to make it possible for the user to play against a friend IRL.

## Testing

### User stories
The user was able to:
- Play an entertaining game
  - Assuming the user finds a game of rock, paper, sissors, lizard, spock entertaining, they will be entertained by this.
- Be able to choose how many points are needed to win a round
  - This is one of the features of the game. You can choose between 3, 5, and 10 points.
- See the rules at all times
  - The rules are always there when you play the game.
- See scores and choices each round
 - The game shows how many points each player has and what choice each player made each round. It also shows who got the point.

### Device testing

### Browser testing

### Peer review

### Validator testing

#### Code

#### Contrast and more
I checked all colours in the [accessibility checker](https://www.accessibilitychecker.org/color-contrast-checker/). Their colour contrast checker tells you if the background and forground (the text) has a large enough contrast. If it does not have enough contrast, it will be very hard for people with bad eyesight to read.
- Validation for the dark blue background.
![dark blue background validation](assets/media/dark_blue_contrast.PNG)
- Validation for the black background.
![black background validation](assets/media/black_contrast.PNG)
- Validation for the blue buttons.
![blue button validation](assets/media/blue_contrast.PNG)
- Validation for the red buttons.
![red button validation](assets/media/red_contrast.PNG)

### Credits
The rules for the game are copied from [The Big Bang Theory Wiki](https://bigbangtheory.fandom.com/wiki/Rock,_Paper,_Scissors,_Lizard,_Spock), and the font (Orbitron, san serif) is from [Google fonts](https://fonts.google.com/specimen/Orbitron?query=orbitron). The layout is inspired by Star Trek TOS by Gene Roddenberry. 
