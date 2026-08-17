JS GAME PAGE

/* ==========================================
   SCIENCE GAME HUB
   MAIN JAVASCRIPT
========================================== */


/* ==========================================
   FILTER GAME
========================================== */

const filterButtons =
    document.querySelectorAll(
        ".filter-button"
    );

const gameCards =
    document.querySelectorAll(
        ".game-card"
    );


filterButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            /*
                Remove active state
                from all buttons.
            */

            filterButtons.forEach(
                item =>
                    item.classList.remove("active")
            );


            /*
                Activate clicked button
            */

            button.classList.add("active");


            /*
                Get selected category
            */

            const filter =
                button.dataset.filter;


            /*
                Show / hide games
            */

            gameCards.forEach(card => {

                const level =
                    card.dataset.level;


                if (
                    filter === "all" ||
                    level === filter
                ) {

                    card.classList.remove(
                        "hidden-card"
                    );

                }

                else {

                    card.classList.add(
                        "hidden-card"
                    );

                }

            });

        }
    );

});


/* ==========================================
   SCROLL TO GAMES
========================================== */

function scrollToGames() {

    const gamesSection =
        document.getElementById(
            "gamesSection"
        );

    gamesSection.scrollIntoView({
        behavior: "smooth"
    });

}


/* ==========================================
   ABOUT MODAL
========================================== */

const aboutModal =
    document.getElementById(
        "aboutModal"
    );


function showAbout() {

    aboutModal.classList.add(
        "show"
    );

}


function closeAbout() {

    aboutModal.classList.remove(
        "show"
    );

}


/* ==========================================
   COMING SOON
========================================== */

function comingSoon() {

    aboutModal.classList.add(
        "show"
    );

}


/* ==========================================
   CLOSE MODAL WHEN CLICK OUTSIDE
========================================== */

aboutModal.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            aboutModal
        ) {

            closeAbout();

        }

    }
);


/* ==========================================
   KEYBOARD ESC
========================================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeAbout();

        }

    }
);
