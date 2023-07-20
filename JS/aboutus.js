let whoButton = document.querySelector(".button-1");
let whereButton = document.querySelector(".button-2");
let howButton = document.querySelector(".button-3");



 document.addEventListener('click',function(e){
	 

	 if (e.target.className === "button-1"){
		 
		 document.querySelector('.who').style.display="flex";
		 document.querySelector('.where').style.display="none";
		 document.querySelector('.how').style.display="none";

	 } else if (e.target.className === "button-2"){
		 
		 document.querySelector('.who').style.display="none";
		 document.querySelector('.where').style.display="flex";
		 document.querySelector('.how').style.display="none";
		 
	 } else if (e.target.className === "button-3"){
		 
		 document.querySelector('.who').style.display="none";
		 document.querySelector('.where').style.display="none";
		 document.querySelector('.how').style.display="flex";
	 }
 })
 
