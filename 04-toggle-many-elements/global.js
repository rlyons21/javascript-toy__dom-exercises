window.addEventListener("load", function(){

	var button = document.getElementById("button");

	button.addEventListener("click", function(){
		var toggleMe = document.getElementsByClassName("toggle_me");
			if(toggleMe[0].style.display == "none"){
				for(var i=0; i<toggleMe.length; i++){
					toggleMe[i].style.display = "block";}
				}
			else {for(var i=0; i<toggleMe.length; i++){
					toggleMe[i].style.display = "none";}

			}
	});

});