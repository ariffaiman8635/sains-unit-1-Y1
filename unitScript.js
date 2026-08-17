/* =========================================================
   SCROLL TO UNITS
========================================================= */

function scrollToUnits() {

    const units =
        document.getElementById("units");

    if (units) {

        units.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }
}


/* =========================================================
   OPEN UNIT
========================================================= */

function openUnit(unitNumber) {

    /*
        Unit 1  → unit1.html
        Unit 2  → unit2.html
        Unit 3  → unit3.html
        ...
        Unit 10 → unit10.html
    */

    window.location.href =
        "unit" + unitNumber + ".html";
}


/* =========================================================
   FILTER UNIT
========================================================= */

function filterUnits(unitNumber, clickedButton) {

    const cards =
        document.querySelectorAll(".unit-card");

    const buttons =
        document.querySelectorAll(".filter-button");


    /* Remove active from all buttons */

    buttons.forEach(function(button) {

        button.classList.remove("active");

    });


    /* Add active to clicked button */

    clickedButton.classList.add("active");


    /* Show / hide cards */

    cards.forEach(function(card) {

        const cardUnit =
            card.getAttribute("data-unit");


        if (
            unitNumber === "all" ||
            cardUnit === String(unitNumber)
        ) {

            card.style.display = "";

            setTimeout(function() {

                card.style.opacity = "1";
                card.style.transform =
                    "translateY(0)";

            }, 10);

        } else {

            card.style.opacity = "0";

            card.style.transform =
                "translateY(15px)";

            setTimeout(function() {

                card.style.display = "none";

            }, 200);

        }

    });

}



/* =========================================================
   FOLDER HOVER SOUND PREPARATION
========================================================= */

const folderCards =
    document.querySelectorAll(
        ".unit-card"
    );


folderCards.forEach(function(card) {

    card.addEventListener(
        "mouseenter",
        function() {

            /*
                Sound boleh ditambah kemudian.
                Buat masa ini hanya animasi CSS.
            */

            if (soundEnabled) {
                // Ready for hover sound
            }

        }
    );

});


