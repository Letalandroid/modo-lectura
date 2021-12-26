const cambioModo = document.getElementById("modo");

cambioModo.addEventListener("click", () => {

    if (cambioModo.checked) {

        document.body.style.background = "#000";
        document.body.style.color = "#fff";

    } else if (!cambioModo.checked) {

        document.body.style.background = "#fff";
        document.body.style.color = "#000";

    }

});