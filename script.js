/* =================================
   SCIENCE LAB ADVENTURE
   UNIT NAVIGATION
================================= */

function openUnit(unitNumber) {

    /*
        Buat masa ini setiap unit akan cuba
        membuka fail unit1.html, unit2.html
        dan seterusnya.

        Contoh:
        Unit 1 → unit1.html
        Unit 2 → unit2.html
        Unit 3 → unit3.html
    */

    window.location.href = "unit" + unitNumber + ".html";
}


/* =================================
   PAGE LOADING
================================= */

document.addEventListener("DOMContentLoaded", function () {

    const folders = document.querySelectorAll(".folder-card");

    folders.forEach(function (folder, index) {

        folder.style.opacity = "0";
        folder.style.transform = "translateY(20px)";

        setTimeout(function () {

            folder.style.transition =
                "opacity .5s ease, transform .5s ease";

            folder.style.opacity = "1";
            folder.style.transform = "translateY(0)";

        }, 80 * index);

    });

});
