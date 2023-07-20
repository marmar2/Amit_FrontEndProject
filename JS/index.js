

let firstCardImg = ["images/IMG_4617.webp","images/25929.jpg"];
let secondCardImg = ["images/IMG_5050.webp","images/73467.jpg"];
let thirdCardImg = ["images/IMG_6084.webp","images/78899.jpg"];

var firstCard = document.querySelector(".C1");
var secondCard = document.querySelector(".C2");
var thirdCard = document.querySelector(".C3");

var i =0 ;
var j =0 ;
var k =0 ;
 
 setInterval(function(){
	 
	 if(i >= 2){
		 i = 0;
	 }
	 
	 firstCard.src = firstCardImg[i++];   
	 
 }, 2000);
 
 setInterval(function(){
	 
	 if(j >= 2){
		 j = 0;
	 }
	   
	 secondCard.src = secondCardImg[j++];     
	 
 }, 2000);
 
 setInterval(function(){
	 
	 if(k >= 2){
		 k = 0;
	 }
	   
	 thirdCard.src = thirdCardImg[k++];     
	 
 }, 2000);