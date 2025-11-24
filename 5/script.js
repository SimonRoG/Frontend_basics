function checkFormat() {
    const form = document.querySelector("form");
    const inputs = form.querySelectorAll("input[type=\"text\"]");

    const patterns = {
        name: /^[А-ЯІЇЄҐ][а-яіїєґ]+\s[А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/,
        group: /^[А-ЯІЇЄҐ]{2}-[з]?[п]?\d{2}[ф]?(онп)?(опп)?(мн)?(мп)?$/,
        number: /^0\d{5,11}$/,
        faculty: /^[А-ЯІЇЄҐ]{2,5}|[а-яіїєґ]{2,5}$/,
        city: /^[А-ЯІЇЄҐ][а-яіїєґ]+$/
    };

    inputs.forEach(input => {
        const fieldName = input.getAttribute('name');
        const value = input.value.trim();

        if (!value) {
            input.style.border = '2px solid red';
        } else if (patterns[fieldName] && !patterns[fieldName].test(value)) {
            input.style.border = '2px solid red';
        } else {
            input.style.border = '2px solid green';
        }
    });

    return false
}

document.addEventListener("DOMContentLoaded", function () {
    const table = document.querySelector("table");
    const td = table.querySelectorAll("td");
    const colorInput = document.querySelector("input[type=\"color\"]")

    td.forEach((cell) => {
        cell.addEventListener("mouseover", function () {
            const randomColor = '#' + Math.floor(Math.random() * 255 * 255 * 255).toString(16);
            this.style.backgroundColor = randomColor;
        });

        // cell.addEventListener("mouseout", function () {
        //     this.style.backgroundColor = "";
        // });

        cell.addEventListener("click", function () {
            this.style.backgroundColor = colorInput.value;
        });

        cell.addEventListener("dblclick", function () {
            for (let i = 0; i < table.rows.length; i++)
                table.rows[i].cells[i].style.backgroundColor = colorInput.value;
        });
    });
});