const image = document.getElementById('image');  // WILL SELECT SPECIFIC ELEMENTS THAT SHARE THE ID
const allImages = document.getElementsByTagName('img');  // WILL SELECT ALL ELEMENTS WITH SPECIFIED TAG AND PLACE IN ARRAY STYLE CONTAINER
const squareImages = document.getElementsByClassName('square'); // WILL SELECT ALL ELEMENTS WITHIN SPECIFIED CLASS

// querySelector - ALL IN ONE TO SELECT A SINGLE ELEMENT BY ANY SELECTOR
document.querySelector('p'); // SELECTS ONLY THE FIRST MATCH FOR PARAGRAPH TAG
document.querySelector('.square:nth-of-type(2)'); // SELECTS THE 2ND ELEMENT WITHIN SQUARE CLASS
document.querySelector('a[title="Java"]');

// querySelectorAll - RETURNS EVERY ITEM THAT SHARES SEARCH CRITERIA
document.querySelectorAll('p a'); // ALL ANCHOR TAGS WITHIN PARAGRAPHS

const links = document.querySelectorAll('p a');

for (let link of allLinks) {
    link.innerText = 'I AM A LINK!!!!'
}


for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}