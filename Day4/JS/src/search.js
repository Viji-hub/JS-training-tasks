// const numbers = [10, 17, 3, 5, 377, 55, 99, 197, 1000];

// Array.prototype.findSecondLargest = function() {
    
//     // console.log(numbers);

//     // numbers.sort((a,b) => b-a);    
//     // console.log(`Second Largest number is -> ${sortedArr[1]}`);

//     const max = Math.max(...numbers);
//     numbers.sort((a,b) => a-b);
    
//     const maxIndex = numbers.indexOf(max);
//     console.log(`Second Largest number is -> ${numbers[maxIndex-1]}`);
    
//     const secondMax = numbers.slice(maxIndex-1, maxIndex);
//     console.log(`Second Largest number is -> ${secondMax}`);
// }

// numbers.findSecondLargest();

// -----------------------------------------------------------

function Fruit(name, price = 10) {
    this.name = name;
    this.price = price;
}

Fruit.prototype.increasePrice = function(rate = 50) {
    this.price = this.price + rate;
}

Fruit.prototype.showFruit = function() {
    console.log(`${this.name}'s price is -> ${this.price}`);
}

const bananaObj = new Fruit('banana');
const mangoObj = new Fruit('mango', 30);


bananaObj.showFruit();
mangoObj.showFruit();

bananaObj.increasePrice(100);
mangoObj.increasePrice();
bananaObj.showFruit();
mangoObj.showFruit();


// -------------------------------------------------------------------

const quotes = [
    "Success is not final; failure is not fatal: It is the courage to continue that counts.",
    "The first step toward success is taken when you refuse to be a captive of the environment in which you, first find yourself.", 
    "It’s not whether you get knocked down, it’s whether you get up.", 
    "The question isn’t who is going to let me, it’s who is going to stop me.", 
    "It is better to fail in originality than to succeed in imitation.", 
    "Success is the sum of small efforts, repeated day-in and day-out.", 
    "Don't be afraid to give up the good to go for the great.", 
    "I find that the harder I work, the more luck I seem to have.", 
    "Whether you think you can or think you can’t, you’re right.",
    "There are two types of people who will tell you that you cannot make a difference in this world: those, who are afraid to try and those who are afraid you will succeed.", 
    "You are never too old to set another goal or to dream a new dream.", 
    "Success is focusing the full power of all you are on what you have a burning desire to achieve.", 
    "Try not to become a person of success, but rather try to become a person of value.",
    "The road to success is always under construction.", 
    "Patience, persistence and perspiration make an unbeatable combination for success.",
    "Failure will never overtake me if my determination to succeed is strong enough.", 
    "Success usually comes to those who are too busy to be looking for it.", 
    "You don’t have to be great to start, but you have to start to be great.", 
    "Success does not consist in never making mistakes but in never making the same one a second time.", 
    "The only place where success comes before work is in the dictionary.", 
    "Today’s accomplishments were yesterday’s impossibilities.", 
    "Success is how high you bounce when you hit bottom.",
    "For every reason it’s not possible, there are hundreds of people who have faced the same circumstances and succeeded."
];

const searchQuotes = (e) => {
    const searchInput = document.querySelector('#search').value;
    const filteredQuotes = quotes.filter((quote) => quote.includes(searchInput));
    
    resultContainer.innerHTML = '';

    filteredQuotes.forEach((quote) => {
        const quoteTag = document.createElement('p');
        quoteTag.innerHTML = quote;
        quoteTag.classList.add('quoateTag');
        resultContainer.appendChild(quoteTag);
    });
}

const resultContainer = document.querySelector('.container .result');

quotes.forEach((quote) => {
    const quoteTag = document.createElement('p');
    quoteTag.innerHTML = quote;
    quoteTag.classList.add('quoateTag');
    resultContainer.appendChild(quoteTag);
});
