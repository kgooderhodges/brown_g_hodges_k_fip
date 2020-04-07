(() => {

let targets = document.querySelectorAll('.target'),
homeArrows = document.querySelectorAll('.slider .arrow'),
dots = document.querySelectorAll(".slider .dot"),
sliderImg = document.querySelector('.sliderImg'),
smPick = document.querySelectorAll('.smPick'),
popUps = document.querySelectorAll('.popUp'),
beerArrows = document.querySelectorAll('.beerContent .arrow'),
largeBeer = document.querySelector('.mainContent');


const beerText = [
    [
        [
            "Who The Tuck?",
            `Tucks Is medicating Cooling pads`,
        ],
     [
         "Why Stubby?",
         `Classic Feel is stubby `,
        ],
        [
        "How Cool is it?",
         `It makes your butt pain go away`,
        ]
    ],
    [
        [
            "Light Beer?",
            `For those hot days in the Jamaican sun`,
        ],
        [
            "What is it Good For?",
            `While breast feeding you can consume high alcohol content`,
        ],
        [
            "Cool and Crisp?",
            ` Doesnt sacrifice flavour`,
        ]
    ],
    [
        [
            "Wait No Alcohol?",
            `Enjoy all the rich flavour and cooling benifits even if you cant consume alcohol`,
        ],
        [
            "Who would want this?",
            `Specifically Moms can reap all the benifits of butt cooling without harming your pregnancy`,
        ],
        [
            "A Helping Hand.",
            `At Tuck we are there for you from tip to tail; wanting you to feel great and be refreshed`,
        ],
    ]
];


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

function showBeer() {
    
    let newBeer = this.classList[1]; 
    largeBeer.classList.remove("lagerBG","lightBG","zeroBG");
    largeBeer.classList.add(newBeer);
    popUps.forEach(popUp => popUp.classList.add("hide"));  
    
    let beerType = beerText[this.dataset.index];
    let popUpTitle = document.querySelectorAll('.popUp h3');
    let popUpText = document.querySelectorAll(".popUp p");

    popUpTitle.forEach(title => 
        title.textContent = beerType[title.parentNode.dataset.place][0]
    );
    popUpText.forEach(title => 
        title.textContent = beerType[title.parentNode.dataset.place][1]
    );
}





beerArrows.forEach(arrow => arrow.addEventListener("click", nextBeer));
    function nextBeer(){     
        if (this.classList[1] === 'arrowR') {
            if (largeBeer.classList[1] === "lagerBG") {
                largeBeer.classList.replace('lagerBG','lightBG');
            }
            else if (largeBeer.classList[1] === "lightBG") {
                largeBeer.classList.replace('lightBG','zeroBG');
            }
            else if (largeBeer.classList[1] === "zeroBG") {
                largeBeer.classList.replace('zeroBG','lagerBG');
                
            }    
        }
        if (this.classList[1] === 'arrowL') {
            if (largeBeer.classList[1] === "lagerBG") {
                largeBeer.classList.replace('lagerBG', 'zeroBG');
            }
            else if (largeBeer.classList[1] === "lightBG") {
                largeBeer.classList.replace('lightBG', 'lagerBG');
            }
            else if (largeBeer.classList[1] === "zeroBG") {
                largeBeer.classList.replace('zeroBG', 'lightBG');
            }
        }
    }



    


function togglePopUp() {
    let popUp = this.querySelector('.popUp');   
    if (popUp.classList.length === 1){
        popUp.classList.add("hide");
        console.log("Pop Up Hidden");
    } else {
        popUp.classList.remove('hide');
        console.log("Pop Up Shown");
    }
}

homeArrows.forEach(arrow => arrow.addEventListener("click", nextSlide));

/* beerArrows[0].addEventListener("click", previousBeer);
beerArrows[1].addEventListener("click", nextBeer); */
dots.forEach(dot => dot.addEventListener("click", dotColor));
targets.forEach(target => target.addEventListener('click', togglePopUp));
smPick.forEach(pick => pick.addEventListener("click", showBeer));


})();
