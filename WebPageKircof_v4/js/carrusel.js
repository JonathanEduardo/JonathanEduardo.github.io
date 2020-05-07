var timer = 4000;

var i = 0;
var max = $('#c > li').length;
 
	$("#c > li").eq(i).addClass('active').css('left','0');
	$("#c > li").eq(i + 1).addClass('active').css('left','25%');
	$("#c > li").eq(i + 2).addClass('active').css('left','50%');
	$("#c > li").eq(i + 3).addClass('active').css('left','75%');
 

	setInterval(function(){ 

		$("#c > li").removeClass('active');

		$("#c > li").eq(i).css('transition-delay','0.25s');
		$("#c > li").eq(i + 1).css('transition-delay','0.5s');
		$("#c > li").eq(i + 2).css('transition-delay','0.75s');
		$("#c > li").eq(i + 3).css('transition-delay','1s');

		if (i < max-4) {
			i = i+4; 
		}

		else { 
			i = 0; 
		}  

		$("#c > li").eq(i).css('left','0').addClass('active').css('transition-delay','1.25s');
		$("#c > li").eq(i + 1).css('left','25%').addClass('active').css('transition-delay','1.5s');
		$("#c > li").eq(i + 2).css('left','50%').addClass('active').css('transition-delay','1.75s');
		$("#c > li").eq(i + 3).css('left','75%').addClass('active').css('transition-delay','2s');
	
	}, timer);

 
	window.addEventListener('scroll',function(){
		let amAnimacion = this.document.getElementsByClassName('am');
		let am = this.document.getElementById('s');
		let objeto1 = amAnimacion[0].getBoundingClientRect().top;
		let objeto2 = amAnimacion[1].getBoundingClientRect().top;
		let objeto3 = amAnimacion[2].getBoundingClientRect().top;
		let objeto4 = amAnimacion[3].getBoundingClientRect().top;
		let objeto5 = amAnimacion[4].getBoundingClientRect().top;

		var y ;
		var h = this.screen.height;
		

		if(h < 500){
			 y = this.screen.height/(.5);
		}else{
			y = this.screen.height/(1.5);
		}



		if(objeto1 <= y && objeto1 > -5){
			this.console.log("ya puedes hacer el efecto 1")
			amAnimacion[0].style.animation = "slide 3s";
			amAnimacion[0].style.backgroundSize = "100% 80%"
			
		}else{
			this.console.log("ya puedes hacer el efecto 1")
			amAnimacion[0].style.animation = "noslide 3s";
			amAnimacion[0].style.backgroundSize = "0% 80%"

		}

		if(objeto2 <= y && objeto2 > -5){
			this.console.log("ya puedes hacer el efecto 2")
			amAnimacion[1].style.animation = "slide 3s";
			amAnimacion[1].style.backgroundSize = "100% 80%"
			
		}else{
			this.console.log("ya puedes hacer el efecto 2")
			amAnimacion[1].style.animation = "noslide 3s";
			amAnimacion[1].style.backgroundSize = "0% 80%"

		}


		if(objeto3 <= y && objeto3 > -5){
			this.console.log("ya puedes hacer el efecto 2")
			amAnimacion[2].style.animation = "slide 3s";
			amAnimacion[2].style.backgroundSize = "100% 80%"
			
		}else{
			this.console.log("ya puedes hacer el efecto 2")
			amAnimacion[2].style.animation = "noslide 3s";
			amAnimacion[2].style.backgroundSize = "0% 80%"

		}

		if(objeto4 <= y && objeto4 > -5){
			this.console.log("ya puedes hacer el efecto 2")
			amAnimacion[3].style.animation = "slide 3s";
			amAnimacion[3].style.backgroundSize = "100% 80%"
			
		}else{
			this.console.log("ya puedes hacer el efecto 2")
			amAnimacion[3].style.animation = "noslide 3s";
			amAnimacion[3].style.backgroundSize = "0% 80%"

		}


		if(objeto5 <= y && objeto5 > -5){
			this.console.log("ya puedes hacer el efecto 2")
			amAnimacion[4].style.animation = "slide 3s";
			amAnimacion[4].style.backgroundSize = "100% 80%"
			
		}else{
			this.console.log("ya puedes hacer el efecto 2")
			amAnimacion[4].style.animation = "noslide 3s";
			amAnimacion[4].style.backgroundSize = "0% 80%"

		}


	})