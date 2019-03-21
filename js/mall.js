
//轮播图
let myTime;
let currIndex = 0;
function autoPlay(){
	myTime = setInterval(()=>{
		let outIndex = currIndex;
		currIndex++;
		if(currIndex>4){
			currIndex=0;
		}
		showImg(currIndex,outIndex);
	},3000);
}
function stopPlay(){
	window.clearInterval(myTime);
}
function goImg(index){
	let outIndex = currIndex;
	currIndex = index;
	if(currIndex<0 || currIndex>4){
		currIndex = 0;
	}
	showImg(currIndex,outIndex);
}
function showImg(inIndex,outIndex){
	if(inIndex == outIndex){
		return;
	}
	if(inIndex<0 || inIndex>4){
		return;
	}
	if(outIndex<0 || outIndex>4){
		return;
	}
	$1("#banner").children[inIndex].style.left = $1("#banner").children[0].offsetWidth+"px";
	slideInOut($1("#banner").children[inIndex],$1("#banner").children[outIndex],1000);
	let douDou = $1("#banner_nav").children;
	for(let i=0;i<douDou.length;i++){
		douDou[i].style.background = "#757F8C";
	}
	douDou[inIndex].style.background = "red";
}
function slideInOut(domInObj,domOutObj,timeLong,func){
	
	let timeSpace = 10 ;//时间间隔 = 总时间/步子数
	let stepCount = timeLong/timeSpace; //步子数 = 总时间/时间间隔
	let step = domInObj.offsetWidth/stepCount ;//步长 = 路程/步子数


	let currLeft = 0;
	let myTimer = setInterval(()=>{

		currLeft -= step;

		if(currLeft<=-1*domInObj.offsetWidth){
			currLeft=-1*domInObj.offsetWidth;
			clearInterval(myTimer);
			func&&func();
		}

		domInObj.style.left =(currLeft+domInObj.offsetWidth)+"px";
		domOutObj.style.left = currLeft+"px";
	},timeSpace);
}
window.onload = function(){
// 	for(let i=0;i<$1("#banner").children.length-1;i++){
// 		$1("#banner").children[i].style.left = $1("#banner").children[0].offsetWidth+"px";
// 	}
// 	$1("#banner").children[0].style.left = 0+"px";
	//导航滑过效果
	$("#nav").children().hover(function(){
		$(this).children().css({"color":"#a9a7a7"});
	},function(){
		$(this).children().css({"color":"#333"});
	});
	$("#nav_gw").children().hover(function(){
		$(this).css({"color":"#a9a7a7"});
	},function(){
		$(this).css({"color":"#1a1a1a"});
	});
	
	
	autoPlay();
	$1("#banner").onmouseenter = function(){
		stopPlay();
	}
	$1("#banner").onmouseleave = function(){
		autoPlay();
	}
	let douDou = $1("#banner_nav").children;
	for(let i=0;i<douDou.length;i++){
		douDou[i].onclick = function(){
			goImg(this.getAttribute("index"));
		}
	}
	
}

function $1(str){
		if(str.startsWith("#")){
			return document.getElementById(str.substring(1));
		}else if(str.startsWith(".")){
			return document.getElementsByClassName(str.substring(1));
		}else{
			return document.getElementsByTagName(str);
		}
}