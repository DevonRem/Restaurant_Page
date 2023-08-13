export default function menuLoad() {

    const textContainer = document.querySelector('.textContainer');

    const menucontent = document.createElement('div');
    menucontent.classList.add('menucontent');
    menucontent.style.backgroundColor = '#FAEBD7';
    textContainer.appendChild(menucontent);

    const header = document.createElement('h1');
    header.innerText = 'Item1';
    header.classList.add('header');
    menucontent.appendChild(header);
    const underText = document.createElement('p');
    underText.classList.add('underText');
    underText.innerText = 'Menu item description';
    menucontent.appendChild(underText);

    const header2 = document.createElement('h1');
    header2.innerText = 'Item2';
    header2.classList.add('header');
    menucontent.appendChild(header2);
    const underText2 = document.createElement('p');
    underText2.classList.add('underText');
    underText2.innerText = 'Menu item2 description';
    menucontent.appendChild(underText2);




}