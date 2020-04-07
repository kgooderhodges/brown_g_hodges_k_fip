(() => {
    let members = document.querySelectorAll(".designDiv .effect"),
        extension = document.querySelector(".extension");

    //array for members description
    const memberDesc = [
        "When it comes to design it's not only about making things pretty but also making things functional. Katie takes on the challenges that comes with design and enjoys learning new things to make a project work, while also making things more visually pleasing.",
        "Retired from racing, Starbuck spends most of the work day tackling nap time, watching Battlestar Galatica, inspecting Katie's design's and making sure the design team gets out for afternoon walks.",
        "As the main workhorse of the Dev Team, Gavin tackles all those pesky 'parameter 1 is undefined' errors. When click and things do stuff, thats his handywork. Remember to hug your Dev friends when you get the chance because they are probably very frustrated at any given time.",
        "The Development Supervisor keeps a very watchful eye on the workers. Caya makes sure they pay attention to their work, or her; whichever the situation calls for. She doesnt hestitate to take over at the keyboard and type her own version of code. "
    ];

    function highlightMember() {
        if (extension.children.length > 0) {
            extension.innerHTML = "";
        }
        //get elements for altering
        let memberPick = this.cloneNode(true);
        let memberInfo = memberPick.querySelector(".frost");
        let memberText = memberInfo.querySelector("p");

        console.log(memberPick.id);

        //change the css styling on them
        memberPick.classList.remove("effect-view", "effect");
        memberPick.classList.add("currentMember");
        memberInfo.classList.add("currentInfo");

        // Image Change to color
        let newImage = memberPick.querySelector("img");
        let imageSource = `images/${this.id}Color.jpg`;
        newImage.src = imageSource;

        console.log(newImage);

        //move cloned nodes into place
        extension.appendChild(memberPick);
        extension.appendChild(memberInfo);

        console.log(memberText);

        memberText.textContent = `${memberDesc[this.dataset.index]}`;
    }

    // listen for clicks on each member picture
    members.forEach(member => member.addEventListener("click", highlightMember));
})();
