function myTabs(){
	var myTabs = $('.club-school-tab li');
	var myconts= $('#club_school_special ul');
	myTabs.click(function(){
		$(this).addClass('active').siblings().removeClass(); 
		myconts.hide().eq(myTabs.index(this)).show(); 
		$('#club_school_special ul').first('ul').show();
	});	
}
myTabs();
		
function recTabs(){
	var recTabs = $('.club-school-tab li');
	var recconts= $('#club_school_special ul');
	recTabs.click(function(){
		$(this).addClass('active').siblings().removeClass(); 
		recconts.hide().eq(recTabs.index(this)).show(); 
	});	
}
recTabs();

function myTabs2(){
	var myTabs = $('.club-renwokan-tab li');
	var myconts= $('#club_renwokan_special ul');
	myTabs.click(function(){
		$(this).addClass('active').siblings().removeClass(); 
		myconts.hide().eq(myTabs.index(this)).show(); 
		$('#club_renwokan_special ul').first('ul').show();
	});	
}
myTabs2();
		
function recTabs2(){
	var recTabs = $('.club-renwokan-tab li');
	var recconts= $('#club_renwokan_special ul');
	recTabs.click(function(){
		$(this).addClass('active').siblings().removeClass(); 
		recconts.hide().eq(recTabs.index(this)).show(); 
	});	
}
recTabs2();

function myTabs3(){
	var myTabs = $('#product_tab li');
	var myconts= $('#product_content ul');
	myTabs.click(function(){
		$(this).addClass('active').siblings().removeClass(); 
		myconts.hide().eq(myTabs.index(this)).show(); 
		$('#product_content ul').first('ul').show();
	});	
}
myTabs3();
		
function recTabs3(){
	var recTabs = $('#product_tab li');
	var recconts= $('#product_content ul');
	recTabs.click(function(){
		$(this).addClass('active').siblings().removeClass(); 
		recconts.hide().eq(recTabs.index(this)).show(); 
	});	
}
recTabs3();