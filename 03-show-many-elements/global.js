window.addEventListener("load", function(){

	var button = document.getElementById("button");

	button.addEventListener("click", function(){
		var show = document.getElementsByClassName("show_me");

			for(var i=0; i<show.length; i++){
				show[i].style.display = "block";
			}
	});

});