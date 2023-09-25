// Random Message Generator Program

//make object arrays of messages
const messages = {
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    quotes: ['Be yourself', 'Live as if you were to die tomorrow', 'Learn as if you were to live forever', 'Peace begins with a smile'],
    emoji: ['😴', '😄', '👦🏾', '👦','👩🏻‍🦰', '👧'],   
    asciiArt: [                
                ['\n' +
                    [" /''''\\ "] + '\n' +                                         
                    ["/-o--o-\\"] + '\n' +
                    ["\\ _.._ /"]
                ],
              ],
};

//generate random numbers
const randMessageGenerator = randNum => {
    return Math.floor(Math.random() * randNum);
}

//format and output the messages
const messageOutputFormat = (arrObj) => console.log(arrObj.join('\n'));

//stor output message
let randMessage = [];
let randIdx;

//lop the output messages
for (let element in messages) {
    randIdx = randMessageGenerator(messages[element].length);
    switch (element) {
        case 'days':
            randMessage.push(`Your "${messages[element][randIdx]}'s" random inspirational quote and emoji is:`);
            break;
        case 'quotes':
            randMessage.push(`Your Quote: "${messages[element][randIdx]}".`);  
            break;
        case 'emoji':
            randMessage.push(`Your Emoji: "${messages[element][randIdx]}".`);
            break;
        case 'asciiArt':
            randMessage.push(`Your Ascii Art: ${messages[element][randIdx]}`);
            break;    
        default:
            randMessage.push(`No message.`);
            break;
    }    
}

//call the function
messageOutputFormat(randMessage);