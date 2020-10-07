$(document).ready(function () {

	$("#submitButton, #btn0, #btn1, #btn2").click(function () {
		ValidateForm();
	});

	function stepformzeroS0() {
		var stepform = document.getElementById('form__form--stepForm-0');

		stepform.setAttribute('class', 'stepform--0None');
	}

	function stepformoneS0() {
		var stepform = document.getElementById('form__form--stepForm-1');

		stepform.setAttribute('class', 'stepform--1');
	}

	function stepformoneS1() {
		var stepform = document.getElementById('form__form--stepForm-1');

		stepform.setAttribute('class', 'stepform--1None');
	}

	function stepformtwoS1() {
		var stepform = document.getElementById('form__form--stepForm-2');

		stepform.setAttribute('class', 'stepform--2');
	}

	function stepformoneS1Rev() {
		var stepform = document.getElementById('form__form--stepForm-0');

		stepform.setAttribute('class', 'stepform--0');
	}

	function stepformtwoS1Rev() {
		var stepform = document.getElementById('form__form--stepForm-1');

		stepform.setAttribute('class', 'stepform--1None');
	}

	function stepformtwoS2() {
		var stepform = document.getElementById('form__form--stepForm-2');

		stepform.setAttribute('class', 'stepform--2None');
	}

	function stepformthreeS2() {
		var stepform = document.getElementById('form__form--stepForm-3');

		stepform.setAttribute('class', 'stepform--3');
	}

	function stepformtwoS2Rev() {
		var stepform = document.getElementById('form__form--stepForm-1');

		stepform.setAttribute('class', 'stepform--1');
	}

	function stepformthreeS2Rev() {
		var stepform = document.getElementById('form__form--stepForm-2');

		stepform.setAttribute('class', 'stepform--2None');
	}

	function stepformThreeS3Rev() {
		var stepform = document.getElementById('form__form--stepForm-3');

		stepform.setAttribute('class', 'stepform--3None');
	}

	function stepformTwoS3RevS0() {
		var stepform = document.getElementById('form__form--stepForm-2');

		stepform.setAttribute('class', 'stepform--2');
	}

	function ValidateForm() {
		var btn0 = document.getElementById("btn0");
		var btn1 = document.getElementById("btn1");
		var btn2 = document.getElementById("btn2");
		var btn1Rev = document.getElementById("btn1Rev");
		var btn2Rev = document.getElementById("btn2Rev");
		var btn3Rev = document.getElementById("btn3Rev");
		var invalidForm = false;
		var index = 0;
		var button = document.querySelector("#submitButton, #btn0, #btn1, #btn2");

		$("#form__form--stepForm-" + index + " input.form__form--input").each(function () {
			console.log("before the if", index);
			if ($(this).val() < 1) {
				invalidForm = true;
			} else if ($(this).val() >= 1) {
				index++;
				invalidForm = false;
			}
		});

		if (invalidForm === true) {
			console.log('invalidForm === true');
			$("#form__form--stepForm-" + index + " input.form__form--input").removeClass("form__form--validation").addClass("form__form--validationInvalid");

		} else if (invalidForm === false) {
			console.log('invalidForm === false');
			$("#form__form--stepForm-" + index + " input.form__form--input").removeClass("form__form--validation").addClass("form__form--validationValid");
			button.disabled = false;
			if (index === 0) {
				btn0.addEventListener("click", stepformzeroS0);
				btn0.addEventListener("click", stepformoneS0);
				stepformzeroS0();
				stepformoneS0();
				console.log("index === 0", index);
			} else if (index === 1) {
				btn1.addEventListener("click", stepformoneS1);
				btn1.addEventListener("click", stepformtwoS1);
				btn1Rev.addEventListener("click", stepformoneS1Rev);
				btn1Rev.addEventListener("click", stepformtwoS1Rev);
				stepformoneS1();
				stepformtwoS1();
				stepformoneS1Rev();
				stepformtwoS1Rev();
				console.log("index === 1", index);
			} else if (index === 2) {
				btn2.addEventListener("click", stepformtwoS2);
				btn2.addEventListener("click", stepformthreeS2);
				btn2Rev.addEventListener("click", stepformtwoS2Rev);
				btn2Rev.addEventListener("click", stepformthreeS2Rev);
				stepformtwoS2();
				stepformthreeS2();
				stepformtwoS2Rev();
				stepformthreeS2Rev();
				console.log("index === 2", index);
			} else if (index === 3) {
				btn3Rev.addEventListener("click", stepformThreeS3Rev);
				btn3Rev.addEventListener("click", stepformTwoS3RevS0);
				stepformTwoS3RevS0();
				stepformThreeS3Rev();
				console.log("index === 3", index);
			}
		}
	}
});
