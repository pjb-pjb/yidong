{
	let banner=document.querySelector(".bar .small");
	let list=document.querySelectorAll(".bar ul.big li");
	let left=document.querySelector(".bar .btn-left");
	let right=document.querySelector(".bar .btn-right");
	let yuan=document.querySelectorAll(".bar .yuan li");
	list[0].style.opacity=1;
	let n=0;
	function lunbo(){
		n++;
		if(n==list.length){
			n=0;
		}
		if(n<0){
			n=list.length-1;
		}
		for(let i=0;i<list.length;i++){
			list[i].style.opacity=0;
			yuan[i].classList.remove("color");
		}
		list[n].style.opacity=1;
		yuan[n].classList.add("color");
	}
	let time=setInterval(lunbo,4000);
	banner.onmouseover=function(){
		clearInterval(time);
	}
	banner.onmouseout=function(){
		time=setInterval(lunbo,4000);
	}
	left.onclick=function(){
		n=n-2;
		lunbo();
	}
	right.onclick=function(){
		lunbo();
	}
	yuan.forEach(function(ele,index){
		ele.onclick=function(){
			n=index-1;
			lunbo();
		}
	});
}
{
	let list=document.querySelectorAll(".yh .big li");
	let small=document.querySelector(".yh .small");
	let big=document.querySelector(".yh .big");
	let left=document.querySelector(".yh .btn-left");
	let right=document.querySelector(".yh .btn-right");
	let n=0;
	let size1=list.length;
	for(let i=0;i<list.length;i++){
		var listNew=list[i].cloneNode(true);
		big.appendChild(listNew);
	}
	list=document.querySelectorAll(".yh .big li");
//	console.log(list[0].style.background);
	function yidong(){
		if(n>size1){
			n=0;
			big.style.transition="all 0s";
			big.style.left=-n*242+"px";		
			n++;
		}
		if(n<0){
			n=6;
			big.style.transition="all 0s";
			big.style.left=-n*242+"px";	
			n--;
		}
		else{
			big.style.transition="all 1s";
			big.style.left=-n*242+"px";
		}
	}
	let time=setInterval(function(){
		//n++;
		//yidong();
	},2000);
	left.onclick=function(){
		//n--;
		//yidong();				
	}
}
