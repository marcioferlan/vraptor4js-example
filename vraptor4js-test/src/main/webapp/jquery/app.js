$(function(){
	// This is your JS controller
	IndexController.index(function(resp){
		$('#serverMessage').html(resp.string);
	});	
});