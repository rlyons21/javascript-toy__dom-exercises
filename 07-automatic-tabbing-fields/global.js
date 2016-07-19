window.addEventListener("load",function(){

	var first = document.getElementById("first");
	var second = document.getElementById("second");
	var third = document.getElementById("third");

	first.addEventListener("keyup", function(){
		typed = first.value.length;
		max = parseInt(first.getAttribute("maxlength"));

		if(typed === max){
			second.focus();
		}
	});

	second.addEventListener("keyup", function(){
		typed = second.value.length;
		max = parseInt(second.getAttribute("maxlength"));

		if(typed === max){
			third.focus();
		}
	});
});