document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("education").addEventListener("click", function () {
        this.classList.toggle("changed1");
    });

    document.getElementById("education2").addEventListener("click", function () {
        this.classList.toggle("changed2");
    });
});


kyivfoto = document.getElementById(kyivfoto);

function addFoto() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                kyivfoto.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    };
    input.click();
}

function biggerFoto() {
    kyivfoto.style.width = (kyivfoto.width * 1.2) + "px";
    kyivfoto.style.height = (kyivfoto.height * 1.2) + "px";
}

function smallerFoto() {
    kyivfoto.style.width = (kyivfoto.width * 0.8) + "px";
    kyivfoto.style.height = (kyivfoto.height * 0.8) + "px";
}

function removeFoto() {
    kyivfoto.src = "";
}