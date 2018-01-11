{
	let banner = document.querySelector(".f5-bar");
	let list = document.querySelectorAll(".f5-bar>li");
	let yuan = document.querySelectorAll(".f5-bar .yuan li");
	console.log(yuan);
	let n = 0;
	banner.onmouseover = function() {
		clearInterval(time2);
	}
	banner.onmouseout = function() {
		time2 = setInterval(lunbo, 1000);
	}
	yuan.forEach(function(val, index) {
		val.onmouseover = function() {
			n = index - 1;
			for(let i = 0; i < list.length; i++) {
				yuan[i].classList.remove("color");
			}
			yuan[index].classList.add("color");
			lunbo();
		}
	});

	function lunbo() {
		n++;
		if(n == list.length) {
			n = 0;
		}
		if(n < 0) {
			n = list.length - 1;
		}
		for(let i = 0; i < list.length; i++) {
			list[i].style.opacity = 0;
			yuan[i].classList.remove("color");
		}
		list[n].style.opacity = 1;
		yuan[n].classList.add("color");
	}
	let time2 = setInterval(lunbo, 2000);
} {
	function Tz(list, left, right, num) {
		let n = 0;
		right.onclick = function() {
			//			alert(n);
			//			console.log("p");
			n++;
			if(n >= list.length) {
				n = list.length - 1;
				return;
			}
			for(let i = 0; i < list.length; i++) {
				list[i].style.display = "none";
			}
			list[n].style.display = "block";
			num.innerHTML = n + 1 + "/" + list.length;
		}
		left.onclick = function() {
			//			alert(n);		
			n--;
			if(n < 0) {
				n = 0;
				return;
			}
			for(let i = 0; i < list.length; i++) {
				list[i].style.display = "none";
			}
			list[n].style.display = "block";
			num.innerHTML = n + 1 + "/" + list.length;
		}
	}
	let btn = document.querySelectorAll(".f5-bar1 .fanye img");
	let left = btn[0];
	let right = btn[1];
	let list = document.querySelectorAll(".f5-bar1 li");
	let num = document.querySelector(".f5-bar1 em");
	Tz(list, left, right, num);
	let all = document.querySelectorAll(".f5 .l2 .big>li");
	all.forEach(function(val, index) {
		let btn = val.querySelectorAll(".f5 .title img");
		let left = btn[0];
		let right = btn[1];
		let list = val.querySelectorAll(".f5 .small1");
		let num = val.querySelector(".f5 .title em");
		console.log(num);
		Tz(list, left, right, num);
	});
} {
	let list = document.querySelectorAll(".f5 .l1 li");
	let list1 = document.querySelectorAll(".f5 .l2 .big>li")
	list.forEach(function(val, index) {
		val.onmouseover = function() {
			for(let i = 0; i < list.length; i++) {
				list1[i].style.display = "none";
				list[i].querySelector("span").classList.remove("line");
			}
			val.querySelector("span").classList.add("line");
			list1[index].style.display = "block";
		}
	});
} {
	let banner = document.querySelector(".bar .small");
	let list = document.querySelectorAll(".bar ul.big li");
	let left = document.querySelector(".bar .btn-left");
	let right = document.querySelector(".bar .btn-right");
	let yuan = document.querySelectorAll(".bar .yuan li");
	list[0].style.opacity = 1;
	let n = 0;

	function lunbo() {
		n++;
		if(n == list.length) {
			n = 0;
		}
		if(n < 0) {
			n = list.length - 1;
		}
		for(let i = 0; i < list.length; i++) {
			list[i].style.opacity = 0;
			yuan[i].classList.remove("color");
		}
		list[n].style.opacity = 1;
		yuan[n].classList.add("color");
	}
	let time = setInterval(lunbo, 4000);
	banner.onmouseover = function() {
		clearInterval(time);
	}
	banner.onmouseout = function() {
		time = setInterval(lunbo, 4000);
	}
	left.onclick = function() {
		n = n - 2;
		lunbo();
	}
	right.onclick = function() {
		lunbo();
	}
	yuan.forEach(function(ele, index) {
		ele.onclick = function() {
			n = index - 1;
			lunbo();
		}
	});
}
$(function() {
	let list = document.querySelectorAll(".yh .big li");
	let small = document.querySelector(".yh .small");
	let big = document.querySelector(".yh .big");
	let left = document.querySelector(".yh .btn-left");
	let right = document.querySelector(".yh .btn-right");
	let n = 0;
	let x = 1;
	let size1 = list.length;
	console.log(list);
	for(let i = 0; i < list.length; i++) {
		var listNew = list[i].cloneNode(true);
		big.appendChild(listNew);
	}
	list = document.querySelectorAll(".yh .big li");
	//	console.log(list[0].style.background);
	function yidong() {
		if(n > size1) {
			n = 0;
			big.style.transition = "all 0s";
			big.style.left = -n * 242 + "px";
			n++;
		}
		if(n < 0) {
			n = 6;
			big.style.transition = "all 0s";
			big.style.left = -n * 242 + "px";
			n--;
		}
		setTimeout(function() {
			//			alert(getComputedStyle(big).transition);
			big.style.transition = "all 1s";
			big.style.left = -n * 242 + "px";
		}, 30);
	}
	let time = setInterval(function() {
		n++;
		if(n == 1) {
			$(".yh .big").animate({
				left: -n * 242 + "px"
			}, 1000);
			return;
		}
		yidong();
	}, 2000);
	left.onclick = function() {
		x=0;
		n--;
		yidong();
	}
	right.onclick = function() {
		x = 1;
		n++;
		yidong();
	}
	small.onmouseover=function(){
		console.log(x);
		clearInterval(time);
	}
	small.onmouseout=function(){
		if(x == 0) {
			time = setInterval(function() {
				n--;
				yidong();
			}, 2000);
				}
		if(x == 1) {
			time = setInterval(function() {
			n++;
			yidong();
			}, 2000);
		}
	}
}); 
{
	let list = document.querySelectorAll(".fixed li");
	let aside = document.querySelector(".fixed");
	let span = document.querySelectorAll(".fixed span");
	let f = document.querySelectorAll(".f");
	let a = 0;
	list.forEach(function(ele, index) {
		window.onscroll = function() {};
		ele.onclick = function() {
			a = 1;
			for(let i = 0; i < span.length; i++) {
				span[i].classList.remove("fixed-color");
			}
			span[index].classList.add("fixed-color");
			let height = document.body.scrollTop;
			let all = Number(f[index].offsetTop) - 60;
			let yidong = all - height;
			let sudu = yidong * 30 / 300;
			let time = setInterval(function() {
				height += sudu;
				console.log(height);
				if(sudu >= 0 && height >= all) {
					height = all;
					clearInterval(time);
					a = 0;
				}
				if(sudu <= 0 && height <= all) {
					height = all;
					clearInterval(time);
					a = 0;
				}
				document.body.scrollTop = height;
			}, 30);
		}
	});
	window.onscroll = function() {
		if(document.body.scrollTop >= 595) {
			document.querySelector(".head2").style.display = "block";
		} else {
			document.querySelector(".head2").style.display = "none";
		}
		if(a == 0) {
			let flag = 0;
			f.forEach(function(ele, index) {
				if(document.body.scrollTop >= ele.offsetTop - 60) {
					console.log(1);
					aside.style.display = "block";
					for(let i = 0; i < span.length; i++) {
						span[i].classList.remove("fixed-color");
					}
					span[index].classList.add("fixed-color");
					flag = 1;
				}
			});
			if(document.body.scrollTop > (Number(f[f.length - 1].offsetHeight) + f[f.length - 1].offsetTop)) {
				for(let i = 0; i < span.length; i++) {
					span[i].classList.remove("fixed-color");
				}
			}
			if(flag == 0) {
				aside.style.display = "none";
			}
		}
	}
}
{
	let liuliang=document.querySelector("#liuliang");
	liuliang.onfocus=function(){
		liuliang.placeholder="";
	}
	liuliang.onblur=function(){
		liuliang.placeholder="流量";
	}
}
{
	let left=document.querySelector(".gonggao .btn-left");
	let right=document.querySelector(".gonggao .btn-right");
	let big=document.querySelector(".gonggao ul");
	let n=0;
	let flag=0;
	function move(){
		let list=document.querySelectorAll(".gonggao li");
		let list1=Array.from(list);
		if(flag==0){
			big.appendChild(list[0]);
		}
		if(flag==1){
			big.insertBefore(list[4],list[0]);
		}
	}
	left.onclick=function(){
		
		flag=1;
		move();
	}
	right.onclick=function(){
		flag=0;
		move();
	}
	let time=setInterval(function(){
		flag=0;
		move();
	},2000);
	big.onmouseenter=function(){
		clearInterval(time);
	}
	big.onmouseleave=function(){
		time=setInterval(function(){
			flag=0;
			move();
		},2000);
	}
}
{
	let addres=document.querySelector("#address");
	let city=document.querySelector("#DivCity");
	let dishi=document.querySelector("#divdishi");
	let fanhui=document.querySelector("#fanhui");
	let sf=document.querySelector("#sf");
	let flag=0;
	addres.onclick=function(){
		city.style.display="none";
		dishi.style.display="block";
	}
	fanhui.onclick=function(){
		city.style.display="block";
		dishi.style.display="none";
	}
	city.onclick=function(e){
		console.log(e.target.nodeName);
		if(e.target.nodeName=="A"){ 
			let text=e.target.innerHTML;
			city.style.display="none";
			dishi.style.display="block";
			sf.innerHTML=text;
			flag=1;
		}
	}
	window.onclick=function(e){
		console.log(e.target.id);
		if(e.target.id!=="address"&&e.target.id!=="fanhui"&&flag==0){
			flag=0;
			city.style.display="none";
			dishi.style.display="none";
		}
		flag=0;
	}
}
{
	let bar=document.querySelector(".bar");
	let list=document.querySelectorAll(".bar .aside1 li");
	let list1=document.querySelectorAll(".navbox");
	let list3;
//	let time=null;
	list.forEach(function(ele,index){
		list1[index].onmouseenter=ele.onmouseenter=function(){
			clearInterval(time);
			for(let i=0;i<list.length;i++){
				list1[i].style.display="none";
				list[i].style.width="";
				list[i].classList.remove("boder");
			}
			list[index].classList.add("boder");
			list1[index].style.display="block";	
			ele.style.width="234px";
			list3=list1[index];
		}
		list1[index].onmouseleave=ele.onmouseleave=function(){
//			setTimeout(function(){
//				list1[index].style.display="none";
//				list[index].style.width="";		
//				list[index].classList.remove("boder");
//			},500);
		}
	});
	bar.onmouseleave=bar.onmouseenter=function(){
		time=setTimeout(function(){
			console.log(list3);
			list3.style.display="none";
			list3.style.width="";
		},500);
	}

}
