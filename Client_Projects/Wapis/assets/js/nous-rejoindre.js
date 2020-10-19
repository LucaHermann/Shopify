$(document).ready(function () {
	$('[to-step]').on('click', function () {
		var to_step = $(this).attr("to-step");
		var current_step = $(this).closest('[stepform]').attr("stepform");
		var form_error = false;
		if (!($(this).hasClass("previous-btn"))) {
			$('[stepform="' + current_step + '"] .form__form--input').each(function () {
				if ($(this).val().length == 0) {
					$(this).addClass("input--error");
					form_error = true;
				} else {
					$(this).removeClass("input--error");
				}
			});
		}
		if (!form_error) {
			if (current_step < 4 || $(this).hasClass("previous-btn")) {
				$('[stepform').hide();
				$('[stepform="' + to_step + '"]').fadeIn();
			}
		}
	});
	$("#submitButton").on("click", function (event) {
		event.preventDefault();
		if ($("#form__form--radioRgpd:checked").length == 1) {
			$("#contact_form").submit();
		} else {
			$(".form__form--radioRgpdLabel").addClass("label--error");
		}
	});
});