var BedRoomImgArray=[];
BedRoomImgArray.push("./Images/BedRoom/BedRoomSmall1.png");
BedRoomImgArray.push("./Images/BedRoom/BedRoom1.png");
BedRoomImgArray.push("./Images/BedRoom/BedRoomSmall2.png");
BedRoomImgArray.push("./Images/BedRoom/BedRoom2.png");
BedRoomImgArray.push("./Images/BedRoom/BedRoomSmall3.png");
BedRoomImgArray.push("./Images/BedRoom/BedRoom3.png");
BedRoomImgArray.push("./Images/BedRoom/BedRoomSmall4.png");
BedRoomImgArray.push("./Images/BedRoom/BedRoom4.png");
BedRoomImgArray.push("./Images/BedRoom/BedRoomSmall5.png");
BedRoomImgArray.push("./Images/BedRoom/BedRoom5.png");
var livingRoomImgArray=[];
livingRoomImgArray.push("./Images/LivingRoom/livingRoom1.png");
livingRoomImgArray.push("./Images/LivingRoom/livingRoomSmall1.png");
livingRoomImgArray.push("./Images/LivingRoom/livingRoom2.png");
livingRoomImgArray.push("./Images/LivingRoom/livingRoomSmall2.png");
livingRoomImgArray.push("./Images/LivingRoom/livingRoom3.png");
livingRoomImgArray.push("./Images/LivingRoom/livingRoomSmall3.png");
livingRoomImgArray.push("./Images/LivingRoom/livingRoom4.png");
livingRoomImgArray.push("./Images/LivingRoom/livingRoomSmall4.png");

var track = 0;
var track2 = 0;
function drawImage()
{
	track+=2;
	if(track==BedRoomImgArray.length)
	{
		track=0;
	}
	track2+=2;
	if(track2==livingRoomImgArray.length)
	{
		track2=0;
	}
	document.getElementById("galleryCurtain2").src=BedRoomImgArray[track];
	document.getElementById("galleryCurtain1").src=livingRoomImgArray[track2+1];
}
window.onload=function(){
	var myVar=setInterval(drawImage, 3000);
	drawImage();
	document.getElementById("galleryCurtain1").addEventListener("click",function(){
	window.open(livingRoomImgArray[track2],"_blank")
	});
	
	document.getElementById("galleryCurtain2").addEventListener("click",function(){
	window.open(BedRoomImgArray[track+1],"_blank")
	});
};