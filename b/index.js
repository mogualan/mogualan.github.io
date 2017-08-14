var html = document.documentElement;
html.style.fontSize = html.clientWidth / 16 + 'px';
document.addEventListener('touchstart',function(ev){
	ev.preventDefault();
});
//兼容移动端
var wrap = document.getElementById("wrap");
var str = ""; 
for (var i = 0; i <70; i++) {
	str += "<div style='background-position-x:"+(-10*i)+"px'></div>";
}
wrap.innerHTML = str;
var divs = wrap.getElementsByTagName("div");
var num = 0;
var timer;
var srcNum = 2;
go();
function go(){
	timer = setInterval(function(){
		tab(num);
		num++;
		if(num == 71){
			clearInterval(timer);
			srcNum ++;
			if(srcNum == 5){
				srcNum = 1;
			}
			num = 0;
			setTimeout(go,500);
		}
	},100)
}
function tab(n){
	if(divs[n-1]){
		divs[n-1].style.opacity = 1;
	}
	if(divs[n]){
		divs[n].style.opacity = 0;
		divs[n].style.backgroundImage = "url(img/"+srcNum+".jpg)";
	}
}
//切换图片
var arr =[1,2,3,4,5];
function change(e){
	var div = document.createElement('div');
	div.className = "circle";
	div.style.background = "url(img/"+arr.sort(function(){
		return 0.5 -Math.random()
	})[0]+".png)";
	div.style.left = e.clientX +"px";
	div.style.top = e.clientY +"px";
	document.body.appendChild(div);
	var x = 3- Math.ceil(Math.random()*6);
	var y = -Math.ceil(Math.random()*6);
	div.timer = setInterval(function(){
		y +=0.1;
		var l = div.offsetLeft + x;
		var t = div.offsetTop + y;
		
		div.style.left = l + 'px';
		div.style.top = t + 'px';
		if (t>=window.innerHeight) {
			document.body.removeChild(div);
			clearInterval(div.timer);
			div = null;
		}
	},16)
}
wrap.onclick = function(e){
	for (var i = 0; i < 17; i++) {
		change(e);
	}
}
//生成小礼品
var monster = document.getElementById('little-monsters');
var music = document.getElementById('music');
monster.onoff = false;
monster.onclick = function(){
  if (monster.onoff ) {
    music.play();
  }else{
    music.pause();
  }
  monster.onoff = !monster.onoff ;
}
//控制音乐播放
