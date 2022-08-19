$(document).ready(function() {
	current_page = "" + $(".current-page").attr('id');

	{ /* Navbar animation */
		$("#navbar-"+ current_page).css({"opacity" : "100%"});	

		$(".navbar-links").hover(function() {		
			$("#"+ this.id +"-underline").stop();
			$("#"+ this.id +"-underline").animate({"width" : "40%"},200,'swing');
			if(this.id != "navbar-"+current_page) {
				$(this).stop();
				$(this).animate({"opacity" : "100%"},200,'swing');
			}			
		},function() {		
			$("#"+ this.id +"-underline").stop();
			$("#"+ this.id +"-underline").animate({"width" : "0%"},200,'swing');
			if(this.id != "navbar-"+current_page) {
				$(this).stop();
				$(this).animate({"opacity" : "50%"},200,'swing');
			}		
		});		
	}	
	{ /* Mobile Navbar animation */
		$("#mobnavbar-button").click(function() {
			if( $("#mobnavbar-list").css("display") == "none" )
				$("#mobnavbar-list").css({"display" : "block"});
			else 
				$("#mobnavbar-list").css({"display" : "none"});
			this.classList.toggle("change"); 
		});
	}

	{ /* About entry template Arrow animation */
		setTimeout(function() {
			setInterval(function() {
				$("#about-entry-template-arrow").animate({top: "0px"},500,"swing");
			},500);
		},400);

		setInterval(function() {
			$("#about-entry-template-arrow").animate({top: "8px"},500,"swing");
		},500);		
	}	
	{ /* About entry template buttons animation */
		$("#about-entry-template-moreinfo").hover(function() {
			$(this).stop();
			$(this).animate({"font-size" : "0.88em"},200,'swing');
		},function() {
			$(this).stop();
			$(this).animate({"font-size" : "1em"},200,'swing');
		});

		$("#about-entry-template-resume").hover(function() {
			$(this).stop();
			$(this).animate({"font-size" : "0.88em"},200,'swing');
		},function() {
			$(this).stop();
			$(this).animate({"font-size" : "1em"},200,'swing');
		});
	}	
});