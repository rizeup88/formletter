$(document).ready(function() {
  $('form#registration').submit(function(event) {
	var firstnameInput = $('input#firstname').val();

  	$('.firstname').text(firstnameInput);

    $('#letter').show();

    console.log("xxx");

    event.preventDefault();
  });
});