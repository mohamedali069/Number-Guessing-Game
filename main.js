
const guessNumber = document.getElementById("guessNumber");
const submitBtn = document.getElementById("submit");
let guessText = document.getElementById("guessText");

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum; // Generate random number
let running = true;
let attempts = 0; 


submitBtn.addEventListener("click", () => {
    if (!running) return; // Prevent any action if the game is over

    const guess = Number(guessNumber.value); // Convert input to number

    if (isNaN(guess) || guess < minNum || guess > maxNum) {
        guessText.innerText = 'Please enter a valid number';
    } else {
        attempts++;

        if (guess < answer) {
            guessText.innerText = 'Please enter a higher number';
        } else if (guess > answer) {
            guessText.innerText = 'Please enter a lower number';
        } else {
            guessText.innerText = `Well done! The answer was ${answer} and you took ${attempts} attempts.`;
            guessText.style.background = "red";
            guessText.style.transform = "scale(1.5)";
            running = false; 
        }
    }
});









    /*
     const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random()* (maxNum - minNum + 1)) + minNum; //because min not 1
console.log(answer);

let attampts = 0 ;
let guess;
let running = true;

while (running){
    guess = window.prompt(`guess a number between ${minNum} - ${maxNum}`)
    guess= Number(guess);
    if(isNaN(guess)){
        window.alert('please enter a valid number')
    }else if(guess < minNum || guess > maxNum){
        window.alert('please enter a valid number')
    }
    else{
        attampts++;
        if(guess < answer){
            window.alert('low try again')
        }
        else if(guess > answer){
            window.alert('high try again')
        }
        else if( guess == answer){
            window.alert(`well done the ansewr was ${answer} you got it in  ${attampts} attamps`);
            running = false;

        }
        }
    }
     */