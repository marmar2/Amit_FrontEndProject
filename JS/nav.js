

window.addEventListener("resize", (e) => {
	
  const windowWidth = window.innerWidth;
  
  if (windowWidth > 760) {
	  document.querySelector(".toggle").style.cssText= "display:none";
	  document.querySelector(".nav-links").style.cssText= "display:block";
	  }
  if (windowWidth < 760) {
	  
	  document.querySelector(".toggle").style.cssText= "display:block; float=right; height:40px;";
	  document.querySelector(".nav-links").style.cssText= "display:none";
	  
	  }
});


  document.querySelector(".small").addEventListener("click", function(){
	  
	   let toggleList = document.getElementById("tog");
	   let display = document.querySelector(".toggle");
	   let displayV = window.getComputedStyle(display);
	   let displayValue = displayV.display;
	   
	if (displayValue !== "none" ){   
	   console.log("hoiiii");
	  if (toggleList.classList.contains("toggle-list")){
		  
		  toggleList.classList.add("toggle-list-responsive");
		  toggleList.classList.remove("toggle-list");
		  
		  toggleList.style.cssText= "display:block";
		  
	  } else if (toggleList.classList.contains("toggle-list-responsive")){
		  
		  toggleList.classList.add("toggle-list");
		  toggleList.classList.remove("toggle-list-responsive");
		  
		  toggleList.style.cssText= "display:none";

	  } 
	}  
	  
  })
  
  
  
  
  var navContainer = document.querySelector(".nav-links");
  
  let navList = navContainer.querySelectorAll('a');
   
  
  for (var z = 0; z < navList.length; z++) {
	  
	  
    navList[z].addEventListener('click', function() {
      
	  for (var s=0; s < navList.length; s++){
		  
		  navList[s].classList.remove('active');
	  }
	  
	  navList[z].classList.add(' active');
  });
}