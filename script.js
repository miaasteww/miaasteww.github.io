function showP(){
	let twoP=document.getElementById("two");
	let clickA=document.getElementById("click");
	
	if (twoP.classList.contains("hidden")){
		twoP.classList.remove("hidden");
		clickA.innerHTML="See Less...";
	}else{
		twoP.classList.add("hidden");
		clickA.innerHTML="See More...";
	}
	
}

function showResult(){
	let questionOne=document.getElementById("question-one").value;
	let questionTwo=document.getElementById("question-two").value;
	let questionThree=document.getElementById("question-three").value;
	let questionFour=document.getElementById("question-four").value;
	let resultP=document.getElementById("result");
	let score = 0;
	
	resultP.innerHTML="<h2>Quiz Results</h2>";
	
	if(questionOne=="Gamecock"){
		resultP.innerHTML+="<p>Question 1- Correct</p>";
		score++;
	}else{
		resultP.innerHTML+="<p>Question 1- Incorrect</p>";
	}
	
	if(questionTwo=="Columbia"){
		resultP.innerHTML+="<p>Question 2- Correct</p>";
		score++;
	}else{
		resultP.innerHTML+="<p>Question 2- Incorrect</p>";
	}
	
	if(questionThree=="Cocky"){
		resultP.innerHTML+="<p>Question 3- Correct</p>";
		score++;
	}else{
		resultP.innerHTML+="<p>Question 3- Incorrect</p>";
	}
	
	if(questionFour=="Williams-Brice"){
		resultP.innerHTML+="<p>Question 4- Correct</p>";
		score++;
	}else{
		resultP.innerHTML+="<p>Question 4- Incorrect</p>";
	}
	
	resultP.innerHTML+="<p>Score:" + score+"/4</p>";
}

setInterval(changeSlide, 10000);
var slideIndex = 0;
changeSlide();
function changeSlide(){
	let nakoma=document.getElementById("nakoma");
	let kendyl=document.getElementById("kendyl");
	let pattys=document.getElementById("pattys");
	let gianna=document.getElementById("gianna");
	
	var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
	
}