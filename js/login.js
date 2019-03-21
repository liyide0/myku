window.onload = function(){
	//中英文页面切换
	$("#zyqh_btu").click(function(){
		$(".changeBox").eq(0).toggle();
		$("#English").click(function(){
			location.href = "login_2.html";
		});
		$("#zw").click(function(){
			location.href = "login.html";
		});
	});
	//输入内容显示地区
	function fun1(obj){
		 obj.css({"border-top-color":"transparent","border-bottom-color":"#dcdcdc","top":"16px"});
	};
	function fun2(obj){
		 obj.css({"border-bottom-color":"transparent","border-top-color":"#dcdcdc","top":"22px"});
	};
	$("#phone").change(function(){
		if($("#phone").val().length >= 6){
			$(this).css({"text-indent":"82px"});
			$(".phone_qh").eq(0).css({"display":"block"});
			$("#xlb").click(function(){
				$("#gj").eq(0).toggle(500,function(){
					if($("#gj").css("display") == "block"){
						fun1($("#xlb"));
					}else{
						fun2($("#xlb"));
					}
				});
			});
		}else{
			$(this).css({"text-indent":"13px"});
			$(".phone_qh").eq(0).css({"display":"none"});
			$("#gj").eq(0).css({"display":"none"});
		}
	});
	//选择地区(动态创建)
	let boxDom = document.getElementById("gj");
	let arr = ["A","B","C","D","E","F","G","H","J","K","L","M","N","O"];
	let gm = [];
	if($(".zyqh").html().indexOf("English")>=20){
		gm = ["中国","美国","中非共和国","中国台湾","中国香港","阿根延","奥地利","中国","美国","中非共和国","中国台湾","中国香港","阿根延","奥地利","中国","美国","中非共和国","中国台湾","中国香港","阿根延","奥地利"];
	}else{
		gm = ["Angola","Benin","China","Angola","Benin","China","Angola","Benin","China","Angola","Benin","China","Angola","Benin","China","Angola","Benin","China","Angola","Benin","China"];
	}
	for(let i=0;i<15;i++){
		gj(boxDom,17,arr[i],gm);
	}
	//在输入框输入字显示地区
	let dq = [];
	for(let i=0;i<$("#gj").children().length;i++){
		for(let y=1;y<$("#gj").children().eq(i).children().length;y++){
			for(let k=1;k<$("#gj").children().eq(i).children().eq(y).children().length;k++){
				dq.push($("#gj").children().eq(i).children().eq(y).children().eq(k).html());
			}
		}
	}
	dq = dq.join();
	dq = dq.split("<span>+89</span>,");
	$("#ss").focus(function(){
		$(this).blur(function(){
			let xcdq = [];
			$(".b").remove();
			let zhi = document.getElementById("ss").value;
			for(let i=0;i<dq.length-1;i++){
				if(dq[i].indexOf(zhi) >=0){
					xcdq.push(dq[i]);
				}
			}
			//隐藏所有的国际
			$(".gj_szm").parent().css({"display":"none"});
			//显示搜索到的国家
			let gg = document.getElementById("gj");
			ssgj(gg,xcdq.length,xcdq);
			//把搜索到的内容点击后放在input标题里
			$(".b").children().children().click(function(){
				$("#phone_qh").html($(this).children().html().split(""));
				$("#ss").val("");
				//显示所有的国家
				$(".gj_szm").parent().css({"display":"block"});
				gg.style.display = "none";
				$("#xlb").css({"border-bottom-color":"transparent","border-top-color":"#dcdcdc","top":"22px"});
			});
		});
	});
	//动态创建根据内容搜索到的国家
	function ssgj(box,num,gjm){
		let divDom = document.createElement("div");
		divDom.style.width = "100%";
		divDom.className = "b";
		let ulDom = document.createElement("ul");
		divDom.appendChild(ulDom);
		for(let i=0;i<num;i++){
			let liDom = document.createElement("li");
			liDom.innerHTML = gjm[i];
			ulDom.appendChild(liDom);
			let spanDom = document.createElement("span");
			spanDom.innerHTML = "+"+89;
			liDom.appendChild(spanDom);
		}
		box.appendChild(divDom);
	}
	function gj(box,num,gjszm,gm){
		let divDom = document.createElement("div");
		divDom.style.width = "100%";
		let szm = document.createElement("div");
		szm.className = "gj_szm";
		szm.innerHTML = gjszm;
		divDom.appendChild(szm);
		let ulDom = document.createElement("ul");
		divDom.appendChild(ulDom);
		for(let i=0;i<num;i++){
			let liDom = document.createElement("li");
			liDom.innerHTML = gm[i];
			liDom.className = "lis";
			ulDom.appendChild(liDom);
			let spanDom = document.createElement("span");
			spanDom.innerHTML = "+"+89;
			liDom.appendChild(spanDom);
		}
		box.appendChild(divDom);
	}
	//点击li把所显示的国家显示
	$("#gj").children().children().children().click(function(){
		$("#phone_qh").html($(this).children().html().split(""));
		//隐藏所有的国际
		$("#gj").css({"display":"none"});
		$("#xlb").css({"border-bottom-color":"transparent","border-top-color":"#dcdcdc","top":"22px"});
	});
	//密码的显示隐藏
	$("#pass_ycxs").click(function(){
		if($("#pass").eq(0).attr("type") == "text"){
			$("#pass").eq(0).attr({"type":"password"});
		}else{
			$("#pass").eq(0).attr({"type":"text"});
		}
	});
	//切换登录方式
	$(".tab_two").eq(0).click(function(){
		$("#sm").eq(0).css({"display":"block"});
		$("div.login_input,div.login_fx").css({"display":"none"});
	});
	$(".tab_noe").eq(0).click(function(){
		$("#sm").eq(0).css({"display":"none"});
		$("div.login_input,div.login_fx").css({"display":"block"});
	});
	//判断是否登录成功
	$("#login_btn").click(function(){
		$.post("php/login.php", {"userId":$("#phone").val(),"passId":$("#pass").val()},loginCg);
	});
	//成功后执行
	function loginCg(data){
		if(data == "1"){
			$(".loginTips").eq(0).css({"opacity":0});
			location.href="mall.html";
		}else{
			$(".loginTips").eq(0).css({"opacity":1});
		}
	}
	//点击注册跳转页面
	$(".zc").click(function(){
		location.href="register.html";
	});
}