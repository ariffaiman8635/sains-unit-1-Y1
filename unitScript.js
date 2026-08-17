/* =========================================================
   SCIENCE LAB ADVENTURE
   UNIT PAGE JAVASCRIPT
========================================================= */


/* =========================================================
   FILTER UNITS
========================================================= */

function filterUnits(unit, button) {

    const cards = document.querySelectorAll(".unit-card");
    const buttons = document.querySelectorAll(".filter-button");

    /* Remove active daripada semua button */

    buttons.forEach(function(btn) {

        btn.classList.remove("active");

    });


    /* Set button yang ditekan sebagai active */

    if (button) {

        button.classList.add("active");

    }


    /* Paparkan / sembunyikan unit */

    cards.forEach(function(card) {

        const cardUnit = card.dataset.unit;

        if (unit === "all" || String(unit) === cardUnit) {

            card.classList.remove("hidden");

        } else {

            card.classList.add("hidden");

        }

    });

}


/* =========================================================
   OPEN UNIT
========================================================= */

function openUnit(unitNumber) {

    const unitPages = {

        1: "unit1.html",
        2: "unit2.html",
        3: "unit3.html",
        4: "unit4.html",
        5: "unit5.html",
        6: "unit6.html",
        7: "unit7.html",
        8: "unit8.html",
        9: "unit9.html",
        10: "unit10.html"

    };


    const page = unitPages[unitNumber];


    if (page) {

        window.location.href = page;

    } else {

        alert("Unit ini belum tersedia.");

    }

}


/* =========================================================
   PAGE LOAD
========================================================= */

document.addEventListener("DOMContentLoaded", function() {

    const cards = document.querySelectorAll(".unit-card");


    /* Animasi kad ikut turutan */

    cards.forEach(function(card, index) {

        card.style.animationDelay =
            (index * 0.06) + "s";

    });


    /* Pastikan semua unit dipaparkan */

    cards.forEach(function(card) {

        card.classList.remove("hidden");

    });

});
