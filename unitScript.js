/* =====================================================
   SCIENCE LAB ADVENTURE
   UNIT INDEX JAVASCRIPT
===================================================== */


/* =====================================================
   FILTER UNITS
===================================================== */

function filterUnits(unitNumber, button) {

    const cards = document.querySelectorAll(".unit-card");
    const buttons = document.querySelectorAll(".filter-button");


    /* ---------------------------------------------
       Tukar button yang aktif
    --------------------------------------------- */

    buttons.forEach(function(btn) {

        btn.classList.remove("active");

    });

    button.classList.add("active");


    /* ---------------------------------------------
       Paparkan semua unit
    --------------------------------------------- */

    if (unitNumber === "all") {

        cards.forEach(function(card) {

            card.style.display = "block";

            setTimeout(function() {

                card.classList.add("show");

            }, 30);

        });

        return;
    }


    /* ---------------------------------------------
       Paparkan unit yang dipilih sahaja
    --------------------------------------------- */

    cards.forEach(function(card) {

        const cardUnit =
            Number(card.getAttribute("data-unit"));


        if (cardUnit === Number(unitNumber)) {

            card.style.display = "block";

            setTimeout(function() {

                card.classList.add("show");

            }, 30);

        } else {

            card.classList.remove("show");

            card.style.display = "none";

        }

    });

}



/* =====================================================
   OPEN UNIT
===================================================== */

function openUnit(unitNumber) {

    /*
       Buat masa sekarang kita belum bina
       halaman game untuk setiap unit.

       Jadi bila user tekan PLAY NOW,
       kita boleh simpan unit yang dipilih
       terlebih dahulu.
    */


    localStorage.setItem(
        "selectedUnit",
        unitNumber
    );


    /*
       Nama unit
    */

    const unitNames = {

        1: "Kemahiran Saintifik",

        2: "Peraturan Bilik Sains",

        3: "Benda Hidup dan Benda Bukan Hidup",

        4: "Manusia",

        5: "Haiwan",

        6: "Tumbuhan",

        7: "Magnet",

        8: "Penyerapan",

        9: "Bumi",

        10: "Asas Binaan"

    };


    /*
       Jika halaman unit sudah dibuat,
       buka halaman tersebut.
    */

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


    /*
       Untuk sementara waktu,
       semak dahulu sama ada halaman
       unit sudah tersedia.
    */

    if (unitPages[unitNumber]) {

        window.location.href =
            unitPages[unitNumber];

    }

}



/* =====================================================
   FOLDER HOVER EFFECT
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {


        const cards =
            document.querySelectorAll(".unit-card");


        cards.forEach(function(card) {


            /* -----------------------------------------
               Mouse masuk
            ----------------------------------------- */

            card.addEventListener(
                "mouseenter",
                function() {

                    card.classList.add("folder-hover");

                }
            );


            /* -----------------------------------------
               Mouse keluar
            ----------------------------------------- */

            card.addEventListener(
                "mouseleave",
                function() {

                    card.classList.remove("folder-hover");

                }
            );


        });


    }
);



/* =====================================================
   CARD CLICK EFFECT
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {


        const cards =
            document.querySelectorAll(".unit-card");


        cards.forEach(function(card) {


            card.addEventListener(
                "click",
                function(event) {


                    /*
                       Jangan trigger apabila
                       user tekan PLAY NOW.
                    */

                    if (
                        event.target.closest(
                            ".play-button"
                        )
                    ) {

                        return;

                    }


                    /*
                       Dapatkan nombor unit
                    */

                    const unitNumber =
                        card.getAttribute(
                            "data-unit"
                        );


                    /*
                       Simpan unit yang dipilih
                    */

                    localStorage.setItem(
                        "selectedUnit",
                        unitNumber
                    );


                }
            );


        });


    }
);



/* =====================================================
   SMOOTH SCROLL
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {


        const unitLink =
            document.querySelector(
                'a[href="#units"]'
            );


        if (unitLink) {

            unitLink.addEventListener(
                "click",
                function(event) {

                    event.preventDefault();

                    const section =
                        document.getElementById(
                            "units"
                        );


                    if (section) {

                        section.scrollIntoView({

                            behavior: "smooth",

                            block: "start"

                        });

                    }

                }
            );

        }


    }
);
