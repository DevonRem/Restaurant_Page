
export default function contactLoad() {

    const textContainer = document.querySelector('.textContainer');

    const contentContainer = document.createElement('div');
    contentContainer.classList.add('contentContainer');
    textContainer.appendChild(contentContainer);

    const header = document.createElement('h1');
    header.innerText = 'Contact info:';
    header.classList.add('header');
    contentContainer.appendChild(header);
    const underText = document.createElement('p');
    underText.classList.add('underText');
    underText.innerText = 'Info would go here!';
    contentContainer.appendChild(underText);
}