layer.config({
	type: 1, 
	area: '100%',
	title: false,
	anim: 5,
	isOutAnim: false,
	shade: [0.9, '#000'],
	shadeClose:false,
});


function login(){
	layer.open({
		type: 1, 
		area: '100%',
		content: $('#login'),
		shade: [0.8, '#000'],
		offset:'15%',
	});
};
function success(){
	layer.open({
		type: 1, 
		area: '100%',
		content: $('#waiting'),
		shade: [0.8, '#000'],
		offset:'25%',
	});
};

function wait_fail(){
	layer.open({
		type: 1, 
		area: '100%',
		content: $('#waiting'),
		shade: [0.8, '#000'],
		offset:'25%',
		success: function(layero, index){
			setTimeout("layer.closeAll();",2000);
			setTimeout("fail();",2000);
		}
	});
};
function wait_success(){
	layer.open({
		type: 1, 
		area: '100%',
		content: $('#waiting'),
		shade: [0.8, '#000'],
		offset:'25%',
		success: function(layero, index){
			setTimeout("layer.closeAll();",2000);
			setTimeout("success();",2000);
		}
	});
};

function fail(){
	layer.open({
		type: 1, 
		area: '100%',
		content: $('#fail'),
		shade: [0.8, '#000'],
		offset:'25%',
	});
};

function success(){
	layer.open({
		type: 1, 
		area: '100%',
		content: $('#success'),
		shade: [0.8, '#000'],
		offset:'25%',
	});
};

function dinggou(){
	layer.open({
		type: 1, 
		area: '100%',
		content: $('#dinggou'),
		shade: [0.8, '#000'],
		offset:'25%',
	});
};

function joinCj(){
	layer.open({
		type: 1, 
		area: '100%',
		content: $('#joinCj'),
		shade: [0.8, '#000'],
		offset:'25%',
	});
};

function dinggou_success(){
	layer.closeAll();
	window.location="success.html";
};

function taocan_success(){
	layer.closeAll();
	mySwiper1.slidePrev();
	///mySwiper1.slideTo(2, 1000, false);
	menuid = $('#school_nav .swiper-slide-active img').attr("class");
	menu();
};



$(document).ready(function(){
  $(".close").click(function(){
	$("body").css({"position":"relative","overflow":"auto"});
	layer.closeAll();
  });
  $("#quanyi1 .slide-app").click(function(){
	$("#quanyi1 .slide-app").removeClass("select");
	$(this).addClass("select");
  });
  $("#quanyi2 .slide-app").click(function(){
	$("#quanyi2 .slide-app").removeClass("select");
	$(this).addClass("select");
  });
  $("#product_renwokan1 .swiper-slide").click(function(){
	$("#product_renwokan1 .swiper-slide").removeClass("select");
	$(this).addClass("select");
  });
  $("#product_renwokan2 .swiper-slide").click(function(){
	$("#product_renwokan2 .swiper-slide").removeClass("select");
	$(this).addClass("select");
  });
  $("#quanyi_change .swiper-slide").click(function(){
	$("#quanyi_change .swiper-slide").removeClass("select");
	$(this).addClass("select");
  });
  $(".club-renwokan-price-block .club-renwokan-price").click(function(){
	$(".club-renwokan-price-block .club-renwokan-price").removeClass("club-renwokan-price-select");
	$(this).addClass("club-renwokan-price-select");
  });
  $(".headnav span").click(function(){
	window.location='my.html';
  });
  $(".myhead .person_back").click(function(){
	history.back();
  });
	
});

function menu(){
	
	console.log(menuid);
	if (menuid == "img2") {
	  $("#content1").hide();
	  $("#content2").show();
	  $("#content3").hide();
	  $("#content4").hide();
	}
	else if (menuid == "img3") {
	  $("#content1").hide();
	  $("#content2").hide();
	  $("#content3").show();
	  $("#content4").hide();
	}
	else if (menuid == "img4") {
	  $("#content1").hide();
	  $("#content2").hide();
	  $("#content3").hide();
	  $("#content4").show();
	}
	else {
	  $("#content1").show();
	  $("#content2").hide();
	  $("#content3").hide();
	  $("#content4").hide();
	}

};


/*获取验证码倒计时*/
function invokeSettime(obj){
    var countdown=15;
    settime(obj);
    function settime(obj) {
        if (countdown == 0) {
            $(obj).attr("disabled",false);
            $(obj).text("重新获取");
            countdown = 15;
            return;
        } else {
            $(obj).attr("disabled",true);
            $(obj).text("请稍候(" + countdown + ") s");
            countdown--;
        }
        setTimeout(function() {
			settime(obj) }
		,1000)
    }
}
/*校验输入正确性*/
$(".login_btn_block #login_btn").click(function(){
	if ($("#phone").val() == ""){
		phonetips();
	}else if($("#authcode").val() == ""){
		authcodetips();
	}else{
		layer.closeAll();
	}
	
});
$(".login_btn_block #cancel_btn,.msg_close").click(function(){
	layer.closeAll();
});

/*输入提示toast*/
function phonetips() {
	layer.msg('请输入正确的手机号码！',{area: '60%',offset:'25%',time: 12000});
}
function authcodetips() {
	layer.msg('请输入正确的动态码！',{area: '60%',offset:'25%',});
}

