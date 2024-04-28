$(document).ready(function () {
    'use strict';

//	var owl = $('.owl-carousel');
	//console.log(owl);
	$('.owl-carousel').owlCarousel( {
		onInitialized: $('body').addClass('loaded')
	});

});

$(function () {
	$('[data-toggle="tooltip"]').tooltip()
  })

  $("#show-pass").click(function() {
	$(this).toggleClass("fa-eye fa-eye-slash");
	var input = $($(this).attr("toggle"));
	if(input.attr("type") == "password") {
	input.attr("type", "text");
	} else {
	input.attr("type", "password");
	}
	});
	
	$("#show-confirm-pass").click(function() {
	$(this).toggleClass("fa-eye fa-eye-slash");
	var input = $($(this).attr("toggle"));
	if(input.attr("type") == "password") {
	input.attr("type", "text");
	} else {
	input.attr("type", "password");
	}
	});
	
	$("#show-new-pw").click(function() {
	$(this).toggleClass("fa-eye fa-eye-slash");
	var input = $($(this).attr("toggle"));
	if(input.attr("type") == "password") {
	input.attr("type", "text");
	} else {
	input.attr("type", "password");
	}
	});

$('.toast').toast("show");

$(document).ready(function(){

	$.validator.addMethod("Strongpassword",function(value){
        return /(?=.*[!@#$%^&*Z()<>,./?])((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(value);
    },"Please use at least one capital letter, special character and number.");

	$("#loginForm").validate({
		rules:{
			email:{
				required:true,
				email: true,
			},
			password:{
				required:true,
			},
		},
		messages:{
			email:{ 
				required: "Please enter email",
				email: "Please enter valid email",
			},
			password:{ 
				required:"Please enter password. ",	
			},
		}
	});

	$("#changePasswordForm").validate({
		rules:{
			old_pwd:{
				required:true,
				minlength: 6,
			},
			new_pwd:{
				required:true,
				minlength: 6,
				Strongpassword: true
			},
			comfirm_pwd:{
				required:true,
				minlength: 6,
				Strongpassword: true,
				equalTo:"#new_pwd"
			},
		},
		messages:{
		}
	});

	$("#accountForm").validate({
		rules:{
			name:{
				required:true,
				minlength: 2,
				maxlength: 50,
			},
			mobile:{
				required:true,
				minlength: 10,
				maxlength: 10,
				number:true,
			},
			profession:{
				required:true,
				minlength: 2,
				maxlength: 20,
			},
			country:{
				required:true,
			},
			state:{
				required:true,
			},
			city:{
				required:true,
			},
		},
		messages:{
			mobile:{ 
				minlength: "Please enter valid mobile number ",
				maxlength: "Please enter valid mobile number ",
				number: "Please enter valid mobile number ",
			},
			profession:{ 
				minlength: "Please enter valid mobile number ",
				maxlength: "Please enter valid mobile number ",
				number: "Please enter valid mobile number ",
			},
		}
	});

	$("#checkoutForm").validate({
		rules:{
			name:{
				required:true,
			},
			email:{
				required:true,
				email:true,
			},
			country:{
				required:true,
			},
			city:{
				required:true,
			},
			state:{
				required:true,
			},
		},
		messages:{
			email:{ 
				email:"Please enter valid email.",	
			},
		}
	});

	$("#registerForm").validate({
		rules:{
			name:{
				required:true,
				minlength: 2,
				maxlength: 40,
			},
			email:{
				required:true,
				email: true,
				remote:"/check-email"
			},
			profession:{
				required:true,
			},
			mobile:{
				required:true,
				minlength: 10,
				maxlength: 10,
				number:true,
			},
			password:{
				required:true,
				Strongpassword: true,
				minlength:6,
			},
			password_confirmation:{
				required:true,
				Strongpassword: true,
				minlength:6,
				equalTo: "#password",
			}
		},
		messages:{
			email:{ 
				email: "Please enter valid email. ",
				remote: "Email already exist! please use another email."
			},
			mobile:{ 
				minlength: "Please enter valid mobile number ",
				maxlength: "Please enter valid mobile number ",
				number: "Please enter valid mobile number ",
			},
			password:{
				required:"Please enter password",
				minlength: "Your password must be atleast 6 characters long"
			},
			password_confirmation:{
				required:"Please confirm password",
				equalTo: "Please enter the same password"
			}
		}
	});

	$("#contributorRegForm").validate({
		rules:{
			name:{
				required:true,
				minlength: 2,
				maxlength: 40,
			},
			email:{
				required:true,
				email: true,
				remote:"/check-artist-email"
			},
			username:{
				required:true,
				maxlength: 20,
				remote:"/check-artist-username"
			},
			profession:{
				required:true,
				maxlength: 20,
			},
			nationality:{
				required:true,
			},
			photo_id_image:{
				required:true,
				accept: 'jpg|png'
			},
			mobile:{
				required:true,
				minlength: 10,
				maxlength: 10,
				number:true,
			},
			password:{
				required:true,
				Strongpassword: true,
				minlength:6,
			},
			password_confirmation:{
				required:true,
				Strongpassword: true,
				minlength:6,
				equalTo: "#password",
			}
		},
		messages:{
			email:{ 
				email: "Please enter valid email. ",
				remote: "Email already exist! please enter another email."
			},
			username:{ 
				remote: "Username already taken! please enter another username."
			},
			mobile:{ 
				minlength: "Please enter valid mobile number ",
				maxlength: "Please enter valid mobile number ",
				number: "Please enter valid mobile number ",
			},
			password:{
				required:"Please enter password",
				minlength: "Your password must be atleast 6 characters long"
			},
			password_confirmation:{
				required:"Please confirm password",
				equalTo: "Please enter the same password"
			}
		}
	});

	$("#contactForm").validate({
		rules:{
			name:{
				required:true,
				minlength: 2,
				maxlength: 50,
			},
			email:{
				required:true,
				email: true,
			},
			phone:{
				required:true,
				minlength: 10,
				maxlength: 10,
				number:true,
			},
			subject:{
				required:true,
			},
			message:{
				required:true,
			},
		},
		messages:{
			phone:{ 
				minlength: "Please enter valid mobile number ",
				maxlength: "Please enter valid mobile number ",
				number: "Please enter valid mobile number ",
			},
		}
	});
});