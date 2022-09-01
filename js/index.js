// Hamburger
const hamburger = document.querySelector('.hamburger');
const cross = document.querySelector('.cross');
const dropdown1 = document.querySelector('.drop-down-1');
const dropdown2 = document.querySelector('.drop-down-3');

let open = () => {
    dropdown1.style.display = 'flex';
    dropdown2.style.display = 'flex';
    hamburger.style.display = "none";
    cross.style.display = "flex";
}

let close = () => {
    dropdown1.style.display = 'none';
    dropdown2.style.display = 'none';
    hamburger.style.display = "block";
    cross.style.display = "none";
}

hamburger.addEventListener('click', open);
cross.addEventListener('click', close);

//Dynamic text
const arrays = ['Heading', 'Trading', 'Checking'];
const dynamicTxt = document.getElementById('dynamic-txt');
let index = 0;
let letterIndex = 0;
let currentText = '';
let letter = '';

let dynamicData = () => {
    if (index === arrays.length) {
        index = 0;
    }

    currentText = arrays[index];
    letter = currentText.slice(0, ++letterIndex);
    dynamicTxt.textContent = letter;
    if (letter.length === currentText.length) {
        index++;
        letterIndex = 0;
    }
    setTimeout(dynamicData, 500);
}
window.addEventListener('load', dynamicData);

// Email validation
const regex = /^([a-z0-9_.])+\@([a-z])+\.([a-z])+$/g;
const email = document.getElementsByName('email')[0];
const email1 = document.getElementsByName('email')[1];
const fname = document.getElementsByName('name')[0];
const smallTxt = document.getElementsByClassName('email-err')[0];
const smallTxt1 = document.getElementsByClassName('email-err')[1];
const person = document.getElementsByClassName('person')[0];
const modal = document.getElementById("myModal");
const closeModel = document.getElementsByClassName("close")[0];
var count = 0;

let validate = (e) => {
    e.preventDefault();
    emailValidation();
}

let emailValidation = () => {
    if (fname.value == "") {
        smallTxt.textContent = "Please enter your name";
    } else {
        if (email.value === "") {
            smallTxt.textContent = "Please enter your email!"
        }
        else if (!regex.test(email.value)) {
            smallTxt.textContent = "Use only correct email format!"
        }
        else {
            smallTxt.textContent = "ok";
            modal.style.display = "block";
            person.textContent = " " + email.value;
        }
    }

    if(email1.value == ""){
        smallTxt1.textContent = "Please enter your email!";
    }
    else if (!regex.test(email1.value)) {
        smallTxt1.textContent = "Use only correct email format!";
    }
    else {
        smallTxt1.textContent = "ok";
        modal.style.display = "block";
        person.textContent = " " + email1.value;
    }

    closeModel.addEventListener('click', () => {
        modal.style.display = "none";
    })
}

// carousel
const carousel = document.getElementsByClassName('carousel-content');
const carouselLeftBtn = document.getElementsByClassName('left-btn')[0];
const carouselRightBtn = document.getElementsByClassName('right-btn')[0];
const pointers = document.getElementsByClassName('dot');
let position = 0;
let carouselLength = carousel.length;
let pointerLength = pointers.length;

let moveNextPara = () => {
    if (position === carouselLength - 1) {
        position = 0;
    }
    else {
        position++;
    }
    updatePosition();
}

let updatePosition = () => {
    for (let change of carousel) {
        change.classList.remove('carousel-content-active');
        change.classList.add('carousel-content-hide');
    }
    for (let dots of pointers) {
        dots.classList.remove('remove-dot');
        dots.classList.add('active-dot');
    }

    carousel[position].classList.add('carousel-content-active');
    pointers[position].classList.add('remove-dot');
}

let movePrevPara = () => {
    if (position === 0) {
        position = carouselLength - 1;
    } else {
        position--;
    }

    updatePosition();
}

setInterval(moveNextPara, 1500);
carouselRightBtn.addEventListener('click', moveNextPara);
carouselLeftBtn.addEventListener('click', movePrevPara);

// dynamic progress percentage

const sec2 = document.getElementsByClassName('progress-percentage');

let array = [
    {percent: "28%", txt: "Downloads"},
    {percent: "22%", txt: "Users"},
    {percent: "37%", txt: "Subscribers"},
    {percent: "13%", txt: "Products"}
];

let newDiv = '';

for(let i=0; i<array.length; i++){
    newDiv += '<div class="sub-percents">';
    newDiv += '<div class="sub-percents-1"></div>';
    newDiv += '<div class="sub-percents-2">';
    newDiv += '<div class="bold-no">' + array[i].percent + '</div>'
    newDiv += '<div class="light-no">'+ array[i].txt + '</div>';
    newDiv += '</div>';
    newDiv += '</div>';
}

sec2[0].innerHTML = newDiv;










