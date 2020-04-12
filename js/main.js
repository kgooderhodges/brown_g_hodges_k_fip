(() => {

//? Global variables====================================================================

let homeArrows = document.querySelectorAll(".slider .arrow"),
	dots = document.querySelectorAll(".slider .dot"),
	sliderImg = document.querySelector(".sliderImg"),
    hamburger = document.querySelector(".hamburger"),
	targets = document.querySelectorAll(".target"),
	smPick = document.querySelectorAll(".smPick"),
	popUps = document.querySelectorAll(".popUp"),
	beerArrows = document.querySelectorAll(".beerContent .arrow"),
	largeBeer = document.querySelector(".mainContent"),
	playOption = document.querySelector(".promoVideo img"),
	mobilePopUps = document.querySelectorAll(".pum"),
	mobilePopUpTitle = document.querySelector(".popUpMobileDesc h3"),
	mobilePopUpText = document.querySelector(".popUpMobileDesc p"),
	inqueryType = document.querySelectorAll(".inqueryType ul li");


//! Beer Page Pop Up array
const beerText = [
    [
        [
            "Who The Tuck?",
            "A refreshing witch hazel lager that will cool you down from the inside out"
        ],
     [
            "Why Stubby?",
            "Better question is, why NOT a stubby. It gives a vintage vibe and it got you thinking about us"
        ],
        [
            "How Cool is it?",
            "Have an uncomfortable hot feeling medically or self-induced, Tucks is going to cool you down"
        ]
    ],
    [
        [
            "Light Beer?",
            "A light bodied twist on our original lager, giving you a bright crisp flavour"
        ],
        [
            "What is it Good For?",
            "Giving you a cooling sensation when you have that burning feeling from too much hot sauce or the beauty of motherhood. Also great for the average Joe looking for low carb"
        ],
        [
            "Cool and Crisp?",
            "Doesn’t sacrifice flavour and what combination is better than this? None!"
        ]
    ],
    [
        [
            "Wait No Alcohol?",
            "Our refreshing lager giving you that crisp flavour you love without the alcohol, that sounds great! You don’t need to be at 11 all the time, often times Zero is awesome"
        ],
        [
            "Why No Alcohol?",
            "Lots of reasons, and no judgment. No one dislikes the person that enjoys a cool refreshing drink and being responsible"
        ],
        [
            "A Helping Hand.",
            "At Tucks we are there for you from tip to tail; wanting you to feel great and be refreshed"
        ],
    ]
];


//? Functions=============================================================================

//* Hamburger Menu
function menuToggle() {
    let menu = document.querySelector('.mainNav');
    menu.classList.toggle("slideToggle");
}
//* dropdown menu in Contact
function toggleInquery() {
    let inqueryChoice = document.querySelector('.inqueryType p');
    inqueryChoice.textContent = this.textContent;
}

//* WHEN YOU CLICK ON THE ARROW
function nextSlide() {
    let currentDot = parseInt(document.querySelector(".dotOn").dataset.offset);
    let dotIndex = parseInt(this.dataset.index);
    let nextDot = dotIndex + currentDot;
    
    dots.forEach((dot) => dot.classList.remove("dotOn"));
    console.log(nextDot);
    
    if (nextDot > 2) {
        dots[0].classList.add("dotOn");
    } else if (nextDot < 0) {
        dots[2].classList.add("dotOn");
    } else{
        dots[`${nextDot}`].classList.add("dotOn");
    }
    slider();
}
//* WHEN YOU CLICK ON THE DOT
function dotColor() {
    dots.forEach(dot => dot.classList.remove('dotOn'));
    this.classList.add("dotOn");
    slider();
}
//* SLIDER TRANSITION
function slider() {
    let movement = document.querySelector('.dotOn').dataset.offset * 94;
    sliderImg.style.left = `-${movement}vw`;
}


//! BEER PAGE HOTSPOT CLICK ------------------------------------------------------

//* FOR WEBCHANGES BG IMAGE AND TEXT IN POP UPS
function showBeer() {  
    //* copy the bg class from the option clicked and put it in the display area
    let newBeer = this.classList[1]; 
    largeBeer.classList.remove("lagerBG","lightBG","zeroBG");
    largeBeer.classList.add(newBeer);
    popUps.forEach(popUp => popUp.classList.add("hide"));  
    
    let popUpTitle = document.querySelectorAll('.popUp h3');
    let popUpText = document.querySelectorAll(".popUp p");
    
    //* change first layer of array to match beer selection
    let beerType = beerText[this.dataset.index]; 

    //* use dataset to match up text to pop up
    //* change the h3 and p to the correct text
    popUpTitle.forEach(title => title.textContent = beerType[title.parentNode.dataset.place][0]);    
    popUpText.forEach(text => text.textContent = beerType[text.parentNode.dataset.place][1]);    
}

  //*  FOR MOBILE - CHANGES BG IMAGE AND TEXT IN POP UPS        
beerArrows.forEach(arrow => arrow.addEventListener("click", function(){        
    
    //* Cycle through BGs to add the right one and changes text to match
    if (this.classList[1] === 'arrowR') {
        if (largeBeer.classList[1] === "lagerBG") {
            largeBeer.classList.replace('lagerBG','lightBG');
            beerType = beerText[1]
        }
        else if (largeBeer.classList[1] === "lightBG") {
            largeBeer.classList.replace('lightBG','zeroBG');
            beerType = beerText[2]
        }
        else if (largeBeer.classList[1] === "zeroBG") {
            largeBeer.classList.replace('zeroBG','lagerBG');
            beerType = beerText[0] 
        }    
    }

    //* Cycle through BGs to add the 'left' one and changes text to match
    else if (this.classList[1] === 'arrowL') {
        if (largeBeer.classList[1] === "lagerBG") {
            largeBeer.classList.replace('lagerBG', 'zeroBG');
            beerType = beerText[2]
        }
        else if (largeBeer.classList[1] === "lightBG") {
            largeBeer.classList.replace('lightBG', 'lagerBG');
            beerType = beerText[0]
        }
        else if (largeBeer.classList[1] === "zeroBG") {
            largeBeer.classList.replace('zeroBG', 'lightBG');
            beerType = beerText[1]
        }
    }
    //* change h3 and p ing displayed text
    mobilePopUpTitle.textContent = beerType[0][0]
    mobilePopUpText.textContent = beerType[0][1]

    //* change h3 and p ing displayed text
    mobilePopUps.forEach(pum => pum.classList.add('hide'));
    mobilePopUps[0].classList.remove('hide');
    }
));

//* shows and hides PopUp
function togglePopUp() {
    //* can show multiple in web
    let popUp = this.querySelector('.popUp');   
    if (popUp.classList.length === 1){
        popUp.classList.add("hide");
        console.log("Pop Up Hidden");
    } else {
        popUp.classList.remove('hide');
        console.log("Pop Up Shown");
    }

    //* can show only one in web
    mobilePopUps.forEach(pum => pum.classList.add('hide'));
    mobilePopUps[this.dataset.index].classList.remove('hide');
    
    //* change h3 and p in displayed text
    mobilePopUpTitle.textContent = beerType[this.dataset.index][0]
    mobilePopUpText.textContent = beerType[this.dataset.index][1]
}
//! end of Beer Hot spot ----------------------------------------------------


//? Event Handlers ==================================================     
    hamburger.addEventListener('click', menuToggle);
    
    homeArrows.forEach(arrow => arrow.addEventListener("click", nextSlide));
    dots.forEach(dot => dot.addEventListener("click", dotColor));
    targets.forEach(target => target.addEventListener('click', togglePopUp));
    smPick.forEach(pick => pick.addEventListener("click", showBeer));
    inqueryType.forEach(type => type.addEventListener("click", toggleInquery));


//* Video Function - at bottom because of jamming 
playOption.addEventListener('click', playVideo);
let video = document.querySelector('.promoVideo video');
video.currentTime = 15
function playVideo() {
    video.currentTime = 0;
    video.play()
    playOption.classList.add('hide');

    video.addEventListener('ended', function() {
        playOption.classList.remove('hide');    
    });
}
    
})();
