/* =====================================================
   SCIENCE ADVENTURE HUB
   MAIN SCRIPT
===================================================== */


/* =====================================================
   SELECT ELEMENTS
===================================================== */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const gameCards =
    document.querySelectorAll(".game-card");

const soundButton =
    document.getElementById("soundButton");

const aboutModal =
    document.getElementById("aboutModal");



/* =====================================================
   GAME FILTER
===================================================== */

filterButtons.forEach(button => {

    button.addEventListener("click", function () {

        /* Remove active from all buttons */

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        /* Add active to selected button */

        this.classList.add("active");


        /* Get selected category */

        const selectedFilter =
            this.dataset.filter;


        /* Filter cards */

        gameCards.forEach(card => {

            const cardLevel =
                card.dataset.level;


            if (
                selectedFilter === "all" ||
                cardLevel === selectedFilter
            ) {

                card.classList.remove("hidden");

            } else {

                card.classList.add("hidden");

            }

        });

    });

});



/* =====================================================
   SCROLL TO GAMES
===================================================== */

function goToGames() {

    const gamesSection =
        document.getElementById("games");


    if (gamesSection) {

        gamesSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}



/* =====================================================
   ABOUT MODAL
===================================================== */

function openAbout() {

    if (aboutModal) {

        aboutModal.classList.add("show");

        document.body.style.overflow = "hidden";

    }

}


function closeAbout() {

    if (aboutModal) {

        aboutModal.classList.remove("show");

        document.body.style.overflow = "";

    }

}



/* =====================================================
   CLOSE MODAL WHEN CLICKING OUTSIDE
===================================================== */

if (aboutModal) {

    aboutModal.addEventListener(
        "click",
        function (event) {

            if (
                event.target === aboutModal
            ) {

                closeAbout();

            }

        }
    );

}



/* =====================================================
   ESCAPE KEY
===================================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeAbout();

        }

    }
);



/* =====================================================
   SOUND BUTTON
===================================================== */

let soundOn = true;


if (soundButton) {

    soundButton.addEventListener(
        "click",
        function () {

            soundOn = !soundOn;


            if (soundOn) {

                soundButton.textContent = "🔊";

                soundButton.setAttribute(
                    "aria-label",
                    "Sound On"
                );

            } else {

                soundButton.textContent = "🔇";

                soundButton.setAttribute(
                    "aria-label",
                    "Sound Off"
                );

            }

        }
    );

}



/* =====================================================
   COMING SOON
===================================================== */

function comingSoon() {

    alert(
        "🚀 Misi ini sedang dibina!\n\n" +
        "Game baharu akan datang tidak lama lagi, " +
        "Junior Scientist! 🔬"
    );

}



/* =====================================================
   GAME CARD HOVER EFFECT
===================================================== */

gameCards.forEach(card => {

    card.addEventListener(
        "mouseenter",
        function () {

            this.style.zIndex = "5";

        }
    );


    card.addEventListener(
        "mouseleave",
        function () {

            this.style.zIndex = "1";

        }
    );

});



/* =====================================================
   PAGE LOAD ANIMATION
===================================================== */

window.addEventListener(
    "load",
    function () {

        document.body.classList.add(
            "page-loaded"
        );

    }
);



/* =====================================================
   CONSOLE MESSAGE
===================================================== */

console.log(
    "🔬 Science Adventure Hub loaded successfully!"
);

console.log(
    "🚀 Welcome, Junior Scientist!"
);
