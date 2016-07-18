window.addEventListener("load", function(){

	var button = document.getElementById("button");

	button.addEventListener("click", function(){
		var hide = document.getElementsByClassName("hide_me");

			for(var i=0; i<hide.length; i++){
				hide[i].style.display = "none";
			}
	});

});