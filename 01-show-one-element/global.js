window.addEventListener("load", function(){

  // Here is some pseudo-code to help you get started:

  // 1. Get the DOM element which will be clicked.
  		var moreLink = document.getElementById("more_text_link");
  // 2. Add a listener for the 'click' event onto that element.
  		moreLink.addEventListener("click", function(){
  // 3. The block for the listener should get the DOM
  //    element containing the text to reveal.
  		var moreText = document.getElementById("more_text_content"); 
  // 4. Modify that DOM element's style to change it's 'display'
  //    from a hidden value to a shown value.
  		moreText.style.display = "inline";
  // 5. Also modify the DOM to hide the "More info..." link.
  		moreLink.style.display = "none";

  	});
});