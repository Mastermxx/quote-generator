/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Script by Mark Reijgwart

I am aiming for a "Exceeds Expectations" grade.
If I don't get this grade I would like to redo it.
******************************************/

// Generate a random number with "upper" as the max.
function randomNumber(upper) {
    const randomNumber = Math.floor( Math.random() * upper );
    return randomNumber;
}

function getRandomQuote() {
    // Get the total amount of quotes out of the array
    let totalQuotes = quotes.length
    return quotes[randomNumber(totalQuotes)]
}


// `printQuote` function - Gets a random quote and prints the quote into the DOM
function printQuote() {

    // Store a random Quote in randomQuote
    randomQuote = getRandomQuote()

    // Create a message with a quote and source
    let message = `
    <p class="quote"> ${randomQuote.quote} </p>
    <p class="source"> ${randomQuote.source}`;

    // If there is a tag for this quote add it to the message
    if (randomQuote.actor) {
        message += `<span class="tag">, actor: ${randomQuote.actor}</span>`;
    }

    // If there is a citation for this quote add it to the message
    if (randomQuote.citation) {
        message += `<span class="citation"> ${randomQuote.citation}</span>`;
    }

    // If there is a year for this quote add it to the message
    if (randomQuote.year) {
        message += `<span class="year"> ${randomQuote.year} </span>`;
    }

    // Close paragraph of the message
    message += `</p>`


    // Create a random rgb color and change the background-color of the body with it
    let color = `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)})`;
    document.body.style.backgroundColor = color;

    // Output the message into the DOM
    return document.getElementById('quote-box').innerHTML = message;

}

// After 4sec run the function "printQuote"
setInterval( function() { printQuote(); }, 4000 );

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
