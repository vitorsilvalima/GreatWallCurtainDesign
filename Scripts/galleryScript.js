var webImages=[];
webImages.push("./Images/post-image1.png");
webImages.push("https://www.facebook.com/");
webImages.push("./Images/post-image2.png");
webImages.push("https://www.facebook2.com/");
webImages.push("./Images/post-image3.png");
webImages.push("https://www.facebook1.com/");
var track = 0;
function drawImage()
{
	document.getElementById("webAddress").href=webImages[track+1];
	//document.getElementById("canvasMenu").src =  webImages[track]; //the source of the image is given
	document.getElementById("webAddress").style.backgroundImage="url("+webImages[track]+")";
	document.getElementById("webAddress").style.backgroundsize="100% 100%";
	track+=2;
	if(track==webImages.length)
	{
		track=0;
	}
}
window.onload=function()
{
	//document.getElementById("canvasMenu").src =  webImages[track]; //the source of the image is given
	document.getElementById("webAddress").style.backgroundImage="url("+webImages[track]+")";
	document.getElementById("webAddress").href=webImages[track+1];
	document.getElementById("postGallery1").addEventListener("click",function(){changeImage(0)});
	document.getElementById("postGallery2").addEventListener("click",function(){changeImage(2)});
	document.getElementById("postGallery3").addEventListener("click",function(){changeImage(4)});
};

function changeImage(number)
{
	document.getElementById("webAddress").style.backgroundImage="url("+webImages[number]+")";
	document.getElementById("webAddress").href=webImages[(number)+1];
	document.getElementById("webAddress").style.backgroundsize="100% 100%";
	track = number;
}

var myVar=setInterval(drawImage, 1700);