import pageLoad from "./page-load";
import './style.css';
import menuLoad from "./menuLoad"

/*Put the contents of each ‘tab’ inside of its own module. 
Each module will export a function that creates a div element, 
adds the appropriate content and styles to that element and then 
appends it to the DOM. 
so far pageLoad does the home page
ALSO REMOVE FORM BEFORE LOADING NEW ONE*/
//keep track of whch file

const content = document.querySelector('#content');
const background = document.createElement('img');
background.src = '../src/pizza-oven.jpg';
background.classList.add('background')
content.appendChild(background);

const textContainer = document.createElement('div');
textContainer.classList.add('textContainer');
content.appendChild(textContainer);

const tabcontent = document.createElement('div');
tabcontent.classList.add('tabcontent');
textContainer.appendChild(tabcontent);

const homeBtn = document.createElement('button');
homeBtn.classList.add('Btn');
homeBtn.innerText = 'Home';
homeBtn.style.backgroundColor = 'grey';
homeBtn.setAttribute('id','homeBtn');
tabcontent.appendChild(homeBtn);

const menuBtn = document.createElement('button');
menuBtn.classList.add('Btn');
menuBtn.innerText = 'Menu';
menuBtn.setAttribute('id','menuBtn');
tabcontent.appendChild(menuBtn);

const contactBtn = document.createElement('button');
contactBtn.classList.add('Btn');
contactBtn.innerText = 'Contact';
contactBtn.setAttribute('id','contactBtn');
tabcontent.appendChild(contactBtn);



let tracker = 1;
pageLoad();

let contentContainer = document.querySelector('.contentContainer');
let menucontent = document.querySelector('.menucontent');

menuBtn.addEventListener('click', function(e) {
    if(tracker !== 2) {
        contentContainer.remove();
        menuLoad();
        homeBtn.style.backgroundColor = 'white';
        menuBtn.style.backgroundColor = 'grey';
        tracker = 2;
        menucontent = document.querySelector('.menucontent');

    }
});

homeBtn.addEventListener('click', function(e) {
    if(tracker !== 1) {
        menucontent.remove();
        pageLoad();
        homeBtn.style.backgroundColor = 'grey';
        menuBtn.style.backgroundColor = 'white';
        tracker = 1;
        contentContainer = document.querySelector('.contentContainer');
    }

});
