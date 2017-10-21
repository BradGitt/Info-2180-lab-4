
function changecolor () {
	 document.getElementById("div").backgroundColor = "red"
	    
    }
	document.getElementById("div").onmouseover = changecolor()

  

var x = document.getElementById("boundary1");
var y = document.querySelectorAll(".boundary");
var e = document.getElementById("end");
var boundary = false;
var status = document.getElementById("status");
var s = document.getElementById("start");
var maze = document.getElementById("maze");

for (var a=0; i<y.length; a++){
		y[a].onmouseover = function(){
			for (var b=0; b<b.length-1; b++) {
				y[b].className = "boundary youlose";
			}
		boundary=true;
		}
    }		
	s.onclick = function (){
		for (var a=0; i<y.length; a++){
          y[1].onmouseover = function()
		  {
			for (var b=o; b<y,length-1; b++){
			  y[b].className = "boundary youlose";		
				status.innerHTML = "You Lose!";
			}	
			boundary=true;
		  }
		} 
		for (var a=0; a<y.length-1; a++){
			y[1].className="boundary";
		}
        boundary = false;		