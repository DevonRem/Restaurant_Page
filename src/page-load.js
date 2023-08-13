
export default function pageLoad() {

    const textContainer = document.querySelector('.textContainer');

    const contentContainer = document.createElement('div');
    contentContainer.classList.add('contentContainer');
    textContainer.appendChild(contentContainer);

    const header = document.createElement('h1');
    header.innerText = 'Webpack created restaurant page!';
    header.classList.add('header');
    contentContainer.appendChild(header);
    const underText = document.createElement('p');
    underText.classList.add('underText');
    underText.innerText = 'This place is great! Stop by!';
    contentContainer.appendChild(underText);
}

