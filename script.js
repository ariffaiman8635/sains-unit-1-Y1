/* =========================================================
   SCIENCE LAB ADVENTURE
   MAIN JAVASCRIPT
========================================================= */


/* =========================================================
   SOUND
========================================================= */

let soundEnabled = true;

function toggleSound() {

    const button =
        document.getElementById("soundButton");

    soundEnabled = !soundEnabled;

    if (soundEnabled) {

        button.textContent = "🔊";

        button.setAttribute(
            "aria-label",
            "Sound enabled"
        );

    } else {

        button.textContent = "🔇";

        button.setAttribute(
            "aria-label",
            "Sound disabled"
        );

    }
}



/* =========================================================
   HOW TO PLAY MODAL
========================================================= */

function showHowToPlay() {

    const modal =
        document.getElementById("howToModal");

    modal.classList.add("show");

    document.body.style.overflow =
        "hidden";
}


function closeHowToPlay() {

    const modal =
        document.getElementById("howToModal");

    modal.classList.remove("show");

    document.body.style.overflow =
        "";
}


/* =========================================================
   CLOSE MODAL WHEN CLICKING OUTSIDE
========================================================= */

function closeModal(event) {

    if (
        event.target.id ===
        "howToModal"
    ) {

        closeHowToPlay();

    }

}


/* =========================================================
   ESC KEY
========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeHowToPlay();

        }

    }
);


/* =========================================================
   NAV ACTIVE STATE
========================================================= */

const navLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


navLinks.forEach(function(link) {

    link.addEventListener(
        "click",
        function() {

            navLinks.forEach(
                function(item) {

                    item.classList.remove(
                        "active"
                    );

                }
            );

            link.classList.add(
                "active"
            );

        }
    );

});



/* =========================================================
   PAGE LOAD
========================================================= */

window.addEventListener(
    "load",
    function() {

        document.body.classList.add(
            "page-loaded"
        );

    }
);
