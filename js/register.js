window.onload = function(){
	//定义变量确定账号密码是否按要求填写
	var zhangHu = false;
	var miMa = false;
	var qrMiMa = false;
	var isxieYi = false;
	var yanZhengMa = false;
	//中英文页面切换
	$("#zyqh_btu").click(function(){
		$(".changeBox").eq(0).toggle();
		$("#English").click(function(){
			location.href = "register_2.html";
		});
		$("#zw").click(function(){
			location.href = "register.html";
		});
	});
	//显示国家
	function fun1(obj){
		 obj.css({"border-top-color":"transparent","border-bottom-color":"#dcdcdc","top":"16px"});
	};
	function fun2(obj){
		 obj.css({"border-bottom-color":"transparent","border-top-color":"#dcdcdc","top":"22px"});
	};
	//按钮的旋转
	$(".zoneInput_down").click(function(){
		$("#gj").toggle(500,function(){
			if($("#gj").css("display") == "block"){
				fun1($(".zoneInput_down"));
			}else{
				fun2($(".zoneInput_down"));
			}
		});
		$("#phone_gj").css({"display":"none"});
		$("#xlb").css({"border-bottom-color":"transparent","border-top-color":"#dcdcdc","top":"22px"});
	});
	let boxDom = document.getElementById("gj");
	let arr = ["A","B","C","D","E","F","G","H","J","K","L","M","N","O"];
	let gm = [];
	//判断是英文网页用英文是中文网用中午
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
			for(let i=1;i<dq.length-1;i++){
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
				$("#guJia").val($(this).html().split("<span>+89</span>")[0]);
				$("#ss").val("");
				//显示所有的国家
				$(".gj_szm").parent().css({"display":"block"});
				gg.style.display = "none";
				$(".zoneInput_down").css({"border-bottom-color":"transparent","border-top-color":"#dcdcdc","top":"22px"});
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
	//点击li把所显示的国家显示
	$("#gj").children().children().children().click(function(){
		$("#guJia").val($(this).html().split("<span>+89</span>")[0]);
		$("#ss").val();
		//隐藏所有的国际
		$("#gj").css({"display":"none"});
		// gg.style.display = "none";
		$(".zoneInput_down").css({"border-bottom-color":"transparent","border-top-color":"#dcdcdc","top":"22px"});
	});
	//输入手机号显示地区
	$("#phone").change(function(){
		if($("#phone").val().length >= 6){
			$(this).css({"text-indent":"82px"});
			$(".phone_qh").eq(0).css({"display":"block"});
			$("#xlb").click(function(){
				//显示所有的国家
				$(".gj_szm").parent().css({"display":"block"});
				$("#phone_gj").eq(0).toggle(500,function(){
					if($("#phone_gj").css("display") == "block"){
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
	let phoneBoxDom = document.getElementById("phone_gj");
	for(let i=0;i<15;i++){
		gj(phoneBoxDom,17,arr[i],gm);
	}
	//点击li把所显示的国家的区号显示
	$("#phone_gj").children().children().children().click(function(){
		$("#phone_qh").html($(this).children().html().split());
		$("#phone_ss").val();
		//隐藏所有的国家
		$("#phone_gj").css({"display":"none"});
		// gg.style.display = "none";
		$("#xlb").css({"border-bottom-color":"transparent","border-top-color":"#dcdcdc","top":"22px"});
	});
	//账号下的国家
	//在输入框输入字显示地区
	let phone_dq = [];
	for(let i=0;i<$("#phone_gj").children().length;i++){
		for(let y=1;y<$("#phone_gj").children().eq(i).children().length;y++){
			for(let k=1;k<$("#phone_gj").children().eq(i).children().eq(y).children().length;k++){
				phone_dq.push($("#phone_gj").children().eq(i).children().eq(y).children().eq(k).html());
			}
		}
	}
	//在输入框输入首字母显示地区
	$("#phone_ss").focus(function(){
		$(this).change(function(){
			let phone_xcdq = [];
			$(".b").remove();
			let zhi = document.getElementById("phone_ss").value;
			for(let i=1;i<phone_dq.length-1;i++){
				if(phone_dq[i].indexOf(zhi) >=0){
					phone_xcdq.push(dq[i]);
				}
			}
			//隐藏所有的国际
			$(".gj_szm").parent().css({"display":"none"});
			//显示搜索到的国家
			let gg = document.getElementById("phone_gj");
			ssgj(gg,phone_xcdq.length,phone_xcdq);
			//把搜索到的内容点击后放在input标题里
			$(".b").children().children().click(function(){
				$("#phone_qh").html($(this).children().html().split(""));
				$("#phone_ss").val("");
				//隐藏所有的国际
				$(".gj_szm").parent().css({"display":"block"});
				gg.style.display = "none";
				$("#xlb").css({"border-bottom-color":"transparent","border-top-color":"#dcdcdc","top":"22px"});
			});
		});
	});
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
	//判断手机号是否注册过
	function sfzc(data){
		if(data == "0"){
			if($(".zyqh").html().indexOf("English")>=20){
				$("#cwts").html("账号可以使用");
			}else{
				$("#cwts").html("Accounts can be used");
			}
			$("#cwts").css({"opacity":1});
		}else{
			if($(".zyqh").html().indexOf("English")>=20){
				$("#cwts").html("账号已注册");
			}else{
				$("#cwts").html("Account Registered");
			}
			$("#cwts").css({"opacity":1});
		}
	}
	//判断手机号是否正确
	$("#phone").blur(function(){
		//手机的规则：11位数字，1开头
		let sj = /^1[1-9]\d{9}$/;
		//电子邮箱的规则：至少3个数字字母下划线@至少2个数字字母下划线.(com|cn|net|com.cn)
		let yx = /^\w{3,}@\w{2,}\.(com|cn|net|com\.cn)$/;
		if($("#phone").val() != ""){
			if(sj.test(this.value) || yx.test(this.value)){
				zhangHu = true;
				$.post("php/registerId.php", {"userId":$("#phone").val()},sfzc);
			}else{
				if($(".zyqh").html().indexOf("English")>=20){
					$("#cwts").html("手机号或者邮箱格式错误");
				}else{
					$("#cwts").html("Mobile phone format or password error");
				}
				$("#cwts").css({"opacity":1});
				zhangHu = false;
			}
		}else{
			$("#cwts").css({"opacity":1});
				if($(".zyqh").html().indexOf("English")>=20){
					$("#cwts").html("手机号或者邮箱不能为空");
				}else{
					$("#cwts").html("Mobile phone number or mailbox cannot be empty");
				}
			zhangHu = false;
		}
	});
	//随机生成验证码
	function yzm(n){
		var arr=["a","b","c","d","e","f","g","h","0","1","2","3","4","5","6","7","8","9","i"];
		var yz="";
		for(var i=0;i<n;i++){
			var zm = parseInt(Math.random()*arr.length);
			yz += arr[zm];
		}
		return yz;
	}
	//判断验证码
	$("#yanZheng").click(function(){
		let a = yzm(4);
		$("#yanZheng").html(a);
		$("#yz").blur(function(){
			if(a == $("#yz").val()){
				if($(".zyqh").html().indexOf("English")>=20){
					$("#yzm").html("验证正确");
				}else{
					$("#yzm").html("Verify correctness");
				}
				$("#yzm").css({"opacity":1,"color":"greenyellow"});
				yanZhengMa = true;
			}else{
				if($(".zyqh").html().indexOf("English")>=20){
					$("#yzm").html("验证错误");
				}else{
					$("#yzm").html("Validation error");
				}				
				$("#yzm").css({"opacity":1});							yanZhengMa = false;
			}
		});
		
	});
	//密码的规则：密码由6-16位数字、字母或符号组成、至少包含两种字符
	$("#pass").blur(function(){
		let mm = /^[a-zA-Z0-9]\w{5,14}$/;
		if($("#pass").val() != ""){
			if(mm.test(this.value)){
				$("#region_tip").html("√");
				$("#region_tip").css({"color":"greenyellow","opacity":1});
				miMa = true;
			}else{
				if($(".zyqh").html().indexOf("English")>=20){
					$("#region_tip").html("密码格式错误");
				}else{
					$("#region_tip").html("Password Format Error");
				}
				$("#region_tip").css({"color":"red","opacity":1});
				miMa = false;
			}
		}else{
			if($(".zyqh").html().indexOf("English")>=20){
				$("#region_tip").html("密码不能为空");
			}else{
				$("#region_tip").html("Password cannot be empty");
			}
			$("#region_tip").css({"color":"red","opacity":1});
			miMa = false;
		}
	});
	//密码的显示隐藏
	$("#pass_ycxs").click(function(){
		if($("#pass").eq(0).attr("type") == "text"){
			$("#pass").eq(0).attr({"type":"password"});
		}else{
			$("#pass").eq(0).attr({"type":"text"});
		}
	});
	$("#pass_zc").click(function(){
		if($("#pass_zcqr").eq(0).attr("type") == "text"){
			$("#pass_zcqr").eq(0).attr({"type":"password"});
		}else{
			$("#pass_zcqr").eq(0).attr({"type":"text"});
		}
	});
	//判断两次输入的密码是否一样
	$("#pass_zcqr").blur(function(){
		if($("#pass").val() == $("#pass_zcqr").val()){
			if($(".zyqh").html().indexOf("English")>=20){
				$("#zcsr").html("两次密码一样");
			}else{
				$("#zcsr").html("Two passwords are the same");
			}
			$("#zcsr").css({"color":"greenyellow","opacity":1});
			qrMiMa = true;
		}else{
			if($(".zyqh").html().indexOf("English")>=20){
				$("#zcsr").html("两次密码不一样");
			}else{
				$("#zcsr").html("Two passwords are different");
			}
			$("#zcsr").css({"color":"red","opacity":1});
			qrMiMa = false;
		}
	});
	//判断是否勾选协议
	$("#checkbox").click(function(){
		let isNo = $(this).attr("checked");
		if(isNo == undefined){
			isxieYi = true;
			$("#checkbox").attr({"checked":"checked"});
		}else{
			isxieYi = false;
			$("#checkbox").removeAttr("checked");
		}
	});
	var zhangHu = false;
	var miMa = false;
	var qrMiMa = false;
	var isxieYi = false;
	//判断是否都填写
	$("#but").click(function(){
		if(zhangHu == true && miMa == true && qrMiMa == true && isxieYi == true && yanZhengMa == true){
			//判断是否注册成功
			$.post("php/register.php", {"userPhone":$("#phone").val(),"userPass":$("#pass").val()},loginCg);
		}else{
			if(zhangHu == true){
				$("#phone").css({"border":"none"})
				if(miMa == true){
					$("#pass").css({"border":"none"})
					if(qrMiMa == true){
						$("#pass_zcqr").css({"border":"none"})
						if(isxieYi == true){
							$("#checkbox").css({"border":"none"})
						}else{
							$("#checkbox").css({"border":"1px solid rde"})
						}
					}else{
						$("#pass_zcqr").css({"border":"1px solid rde"})
					}
				}else{
					$("#pass").css({"border":"1px solid rde"})
				}
			}else{
				$("#phone").css({"border-width":"1px","border-color":"red"})
			}
		}
	});
	//成功后执行
	function loginCg(data){
		if(data == "1"){
			$(".loginTips").eq(0).css({"opacity":0});
			location.href="login.html";
		}else{
			$(".loginTips").eq(0).css({"opacity":1});
		}
	}
}