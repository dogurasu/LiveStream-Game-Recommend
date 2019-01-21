
// arrays of genres & their respective games
var action = ['Sea of Thieves', 'Dead By Deadlight', 'Grand Theft Auto V', 'Diablo III'];
var irl = ['Just Chatting', 'Music & Performing Arts', 'Talk Shows & Podcasts'];
var fighting = ['Super Smash Bros. Ultimate', 'Street Fighter V', 'Dragon Ball Fighterz'];
var fps = ['Counter-Strike: Global Offensive', 'PLAYERUNKNOWN\'S BATTLEGROUNDS', 'Overwatch'];
var horror = ['Dead by Daylight', 'Dark Souls III', 'Gears of War 4'];
var sports = ['Fifa 19', 'NBA 2k19', 'Madden NFL 19'];
var mmorpg = ['World of Warcraft', 'Path of Exile', 'Black Desert Online'];
var card_board_game = ['Hearthstone', 'Magic: The Gathering', 'Poker'];
var rhythm_music = ['Music & Performing Arts', 'osu!', 'Guitar Hero'];
var rpg = ['Monster Hunter World', 'Path of Exile', 'Final Fantasy VII'];
var survival = ['Dead By Deadlight', 'Subnautica', 'Outlast'];
var shooter = ['Fortnite', 'Counter-Strike: Global Offensive', 'Call of Duty: Black Ops 4'];
var creative = ['Music & Performing Arts', 'Art', 'Science and Technology', 'Food and Drink'];
var strategy = ['Starcraft II', 'Chess', 'Yu-Gi-Oh! Forbidden Memories'];
var open_world = ['Grand Theft Auto V', 'Minecraft', 'Legend of Zelda: Breath of the Wild'];
var driving_racing_game = ['Rocket League', 'Need for Speed: Most Wanted', 'iRacing.com'];
var puzzle = ['Portal', 'Games + Demos', 'Catherine'];
var roguelike = ['Diablo II: Lord of Destruction', 'The Binding of Isaac: Afterbirth', 'Slay the Spire'];
var simulation = ['Escape from Tarkov', 'Domina', 'VRchat'];
var platformer = ['Donkey Kong 64', 'The Messenger', 'Super Mario World'];
// var creative = ['Art', 'Music & Performing Arts', 'Science & Technology', 'Food & Drink']



// var puzzle = ['Portal 2', ]



function SubmissionClicked () {
    
    // set the genre to the option selected
    let selection = document.getElementById("genre");
    let genre = selection.value.toString();
    
    //document.write(genre.value);
    //document.write(genre.value.toUpperCase());
    
    // generate a Random number for random index
    let randIndex = generateRandomNum();
    
    // call game recommend function...
    let game = GameRecommend(genre, randIndex);

    // write out some text...
    document.getElementById("demo").innerHTML = "Something you might be interested in is: " + game + ".\
    \nFeel free to select another genre and try again!";
    

    // document.write("<h1>Feel free to try another option.</h1>");

    // document.close();
}


// document.getElementById("demo").innerHTML = genre.options[genre.selectedIndex].text;

function GameRecommend (genre, randIndex) {
    var action = ['Sea of Thieves', 'Dead By Deadlight', 'Grand Theft Auto V', 'Diablo III'];
    var irl = ['Just Chatting', 'Music & Performing Arts', 'Talk Shows & Podcasts'];
    var fighting = ['Super Smash Bros. Ultimate', 'Street Fighter V', 'Dragon Ball Fighterz'];
    var fps = ['Counter-Strike: Global Offensive', 'PLAYERUNKNOWN\'S BATTLEGROUNDS', 'Overwatch'];
    var horror = ['Dead by Daylight', 'Dark Souls III', 'Gears of War 4'];
    var sports = ['Fifa 19', 'NBA 2k19', 'Madden NFL 19'];
    var mmorpg = ['World of Warcraft', 'Path of Exile', 'Black Desert Online'];
    var card_board_game = ['Hearthstone', 'Magic: The Gathering', 'Poker'];
    var rhythm_music = ['Music & Performing Arts', 'osu!', 'Guitar Hero'];
    var rpg = ['Monster Hunter World', 'Path of Exile', 'Final Fantasy VII'];
    var survival = ['Dead By Deadlight', 'Subnautica', 'Outlast'];
    var shooter = ['Fortnite', 'Counter-Strike: Global Offensive', 'Call of Duty: Black Ops 4'];
    var creative = ['Music & Performing Arts', 'Art', 'Science and Technology', 'Food and Drink'];
    var strategy = ['Starcraft II', 'Chess', 'Yu-Gi-Oh! Forbidden Memories'];
    var open_world = ['Grand Theft Auto V', 'Minecraft', 'Legend of Zelda: Breath of the Wild'];
    var driving_racing_game = ['Rocket League', 'Need for Speed: Most Wanted', 'iRacing.com'];
    var puzzle = ['Portal', 'Games + Demos', 'Catherine'];
    var roguelike = ['Diablo II: Lord of Destruction', 'The Binding of Isaac: Afterbirth', 'Slay the Spire'];
    var simulation = ['Escape from Tarkov', 'Domina', 'VRchat'];
    var platformer = ['Donkey Kong 64', 'The Messenger', 'Super Mario World'];
    

    if (genre === 'action') {
        return action[randIndex];
    }
    else if (genre === 'irl') {
        return irl[randIndex];
    }
    else if (genre === 'fighting') {
        return fighting[randIndex];
    }
    else if (genre === 'fps') {
        return fps[randIndex];
    }
    else if (genre === 'horror') {
        return horror[randIndex];
    }
    else if (genre === 'sports') {
        return sports[randIndex];
    }
    else if (genre === 'mmorpg') {
        return mmorpg[randIndex];
    }
    else if (genre === 'card_board_game') {
        return card_board_game[randIndex];
    }
    else if (genre === 'rhythm_music') {
        return rhythm_music[randIndex];
    }
    else if (genre === 'rpg') {
        return rpg[randIndex];
    }
    else if (genre === 'survival') {
        return survival[randIndex];
    }
    else if (genre === 'shooter') {
        return shooter[randIndex];
    }
    else if (genre === 'creative') {
        return creative[randIndex];
    }
    else if (genre === 'strategy') {
        return strategy[randIndex];
    }
    else if (genre === 'open_world') {
        return open_world[randIndex];
    }
    else if (genre === 'driving_racing_game') {
        return driving_racing_game[randIndex];
    }
    else if (genre === 'puzzle') {
        return puzzle[randIndex];
    }
    else if (genre === 'roguelike') {
        return roguelike[randIndex];
    }
    else if (genre === 'simulation') {
        return simulation[randIndex];
    }
    else if (genre === 'platformer') {
        return platformer[randIndex];
    }
}

function generateRandomNum () {
    var min = 0;
    var max = 2;
    var random = Math.floor(Math.random() * 3);
    return random;
}

function SubmitResults () {
    
}