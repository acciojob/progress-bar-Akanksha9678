//your JS code here. If required.
let nextBtn=document.getElementById("next");
let prevBtn=document.getElementById("prev");
let progress=document.getElementById("progress");
let circles=document.querySelectorAll(".circle");

let currentStep=1;


nextBtn.addEventListener("click",()=>{
	currentStep++;
	if (currentStep > circles.length) {
    currentStep = circles.length;
  }
	update();
})

prevBtn.addEventListener("click",()=>{
	currentStep--;
	if (currentStep < 1) {
    currentStep = 1;
  }
	update();
})

function update() {
	circles.forEach((circle,index)=>{
		if(index<currentStep){
			circle.classList.add('active');
		}
		else{
			circle.classList.remove('active');
		}
	});

	const progressPercent = ((currentStep - 1) / (circles.length - 1)) * 100;
	progress.style.width = progressPercent + '%';

	 if(currentStep === 1){
		prevBtn.disabled= true;
	}
	else{
		prevBtn.disabled=false;
	}
	if(currentStep === circles.length){
		nextBtn.disabled= true;
	}
	else{
		nextBtn.disabled=false;
	}
}

