window.addEventListener("load", function(){
	var name = document.getElementById("full_name");

	name.addEventListener("keyup", function(){
		var greeting = document.getElementById("greeting");
		greeting.innerHTML = ("Hello, " + name.value + "!");
	});

});