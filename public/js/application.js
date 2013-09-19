$(document).ready(function () {
	$('form'). on('submit', function(event) {
		event.preventDefault();
		var roll = Math.floor(Math.random()*6)+1
		$.post('/rolls',function(data){
			$("#die").html(data);
			console.log(data);
		});
	})

  // PSEUDO-CODE:
  //   5- when the AJAX post is done, replace the contents of the "#die" DIV in the DOM using jQuery

});
