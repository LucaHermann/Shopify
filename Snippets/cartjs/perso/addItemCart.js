CartJS.addItem(37054043455675, 1, {}, {
	// Define a success callback to display a success message.
	"success": function (data, textStatus, jqXHR) {
		console.log('success');
	},
	// Define an error callback to display an error message.
	"error": function (jqXHR, textStatus, errorThrown) {
		console.log('error');
	}
});