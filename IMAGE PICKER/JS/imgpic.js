// JavaScript Document
function pilih(){
 var pil=document.getElementById("form1").pic.value;
  if (pil=="1")
    {
        document.getElementById("img").innerHTML="<img src='IMG/backyard.jpeg'>";
		window.alert("Ini Adalah Gambar my back yard.jpeg");
    }
	else if (pil=="2")
    {
        document.getElementById("img").innerHTML="<img src='IMG/livingroom.jpeg'>";
		window.alert("Ini Adalah Gambar my living room.jpeg");
    }
	else if (pil=="3")
    {
        document.getElementById("img").innerHTML="<img src='IMG/parlour.jpeg'>";
		window.alert("Ini Adalah Gambar my parlour.jpeg");
    }
	else if (pil=="4")
    {
        document.getElementById("img").innerHTML="<img src='IMG/kitchen.jpeg'>";
		window.alert("Ini Adalah Gambar my kitchen.jpeg");
    }
	else if (pil=="5")
    {
        document.getElementById("img").innerHTML="<img src='IMG/bedroom.jpeg'>";
		window.alert("Ini Adalah Gambar my bedroom.jpeg");
    }
	else if (pil=="6")
    {
        document.getElementById("img").innerHTML="<img src='IMG/bathroom.jpeg'>";
		window.alert("Ini Adalah Gambar my bathroom.jpeg");
    }
	else if (pil=="7")
    {
        document.getElementById("img").innerHTML="<img src='IMG/closet.jpeg'>";
		window.alert("Ini Adalah Gambar closet.jpeg");
    }
    else{
		document.getElementById("img").innerHTML="<img src='IMG/PILIH.jpg'>";
	}
	
}
