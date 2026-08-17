/* =====================================================
   SCIENCE LAB ADVENTURE
===================================================== */


/* =====================================================
   BUKA UNIT
===================================================== */

function openUnit(unitNumber) {

    // Contoh:
    // Unit 1 → unit1.html
    // Unit 2 → unit2.html
    // Unit 10 → unit10.html

    window.location.href =
        "unit" + unitNumber + ".html";
}


/* =====================================================
   SCROLL KE UNIT
===================================================== */

function scrollToUnits() {

    document.getElementById("units").scrollIntoView({
        behavior: "smooth"
    });

}


/* =====================================================
   SOUND BUTTON
===================================================== */

let soundOn = true;

function toggleSound() {

    const button =
        document.getElementById("soundButton");

    soundOn = !soundOn;

    if (soundOn) {

        button.innerHTML = "🔊";

    } else {

        button.innerHTML = "🔇";

    }

}


/* =====================================================
   FOLDER CLICK EFFECT
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const folders =
            document.querySelectorAll(
                ".folder-card"
            );

        folders.forEach(
            function (folder) {

                folder.addEventListener(
                    "click",
                    function () {

                        /*
                         * Sedikit efek visual
                         * sebelum berpindah halaman.
                         */

                        folder.style.transform =
                            "translateY(-5px) scale(.97)";

                    }
                );

            }
        );

    }
);
