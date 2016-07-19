window.addEventListener("load", function(){

	var button = document.getElementById("toggle_button");

	button.addEventListener("click", function(){
		var toggleMe = document.querySelectorAll(".second_five li");
			if(toggleMe[0].style.display == "block"){
				for(var i=0; i<toggleMe.length; i++){
					toggleMe[i].style.display = "none";}
				}
			else {for(var i=0; i<toggleMe.length; i++){
					toggleMe[i].style.display = "block";}

			}
	});

});