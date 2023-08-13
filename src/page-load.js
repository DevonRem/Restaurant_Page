
export default function pageLoad() {
    const content = document.querySelector('#content');
    const background = document.createElement('img');
    background.src = '../src/pizza-oven.jpg';
    background.classList.add('background')
    content.appendChild(background);
    const textContainer = document.createElement('div');
    textContainer.classList.add('textContainer');
    content.appendChild(textContainer);
    const header = document.createElement('h1');
    header.innerText = 'Webpack created restaurant page!';
    textContainer.appendChild(header);
    const underText = document.createElement('p');
    underText.innerText = 'This place is great! Stop by!';
    textContainer.appendChild(underText);
}

