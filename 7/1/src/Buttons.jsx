import React from "react";

function ButtonAdd({ kyivfoto }) {
	function addFoto() {
		const input = document.createElement("input");
		input.type = "file";
		input.accept = "image/*";
		input.onchange = function (event) {
			const file = event.target.files[0];
			if (file) {
				const reader = new FileReader();
				reader.onload = function (e) {
					if (kyivfoto.current) {
						kyivfoto.current.src = e.target.result;
					}
				};
				reader.readAsDataURL(file);
			}
		};
		input.click();
	}

	return (
		<button onClick={addFoto}>Додати</button>
	);
}

function ButtonBigger({ kyivfoto }) {
	function biggerFoto() {
		if (kyivfoto.current) {
			kyivfoto.current.style.width = (kyivfoto.current.width * 1.2) + "px";
			kyivfoto.current.style.height = (kyivfoto.current.height * 1.2) + "px";
		}
	}

	return (
		<button onClick={biggerFoto}>Збільшити</button>
	);
}

function ButtonSmaller({ kyivfoto }) {
	function smallerFoto() {
		if (kyivfoto.current) {
			kyivfoto.current.style.width = (kyivfoto.current.width * 0.8) + "px";
			kyivfoto.current.style.height = (kyivfoto.current.height * 0.8) + "px";
		}
	}

	return (
		<button onClick={smallerFoto}>Зменшити</button>
	);
}

function ButtonRemove({ kyivfoto }) {
	function removeFoto() {
		if (kyivfoto.current) {
			kyivfoto.current.src = "";
		}
	}

	return (
		<button onClick={removeFoto}>Видалити</button>
	);
}

export { ButtonAdd, ButtonBigger, ButtonSmaller, ButtonRemove };	