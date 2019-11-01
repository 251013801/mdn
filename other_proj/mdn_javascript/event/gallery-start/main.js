const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* 遍历图片并添加至缩略图区 */

for(let i=1;i<6;i++){
	const newImage = document.createElement('img');
	newImage.setAttribute('src', 'images/pic'+i+'.jpg');
	newImage.onclick=function (e) {
		displayedImage.setAttribute('src',e.target.getAttribute('src'));
	};
	thumbBar.appendChild(newImage);
}

/* 编写 变亮/变暗 按钮 */

btn.onclick=function () {
	if (btn.getAttribute('class')==='dark') {
		btn.textContent='变亮';
		btn.setAttribute('class','light');
		overlay.style.backgroundColor='rgba(0,0,0,0.5)';
	}else{
		btn.textContent='变暗';
		btn.setAttribute('class','dark');
		overlay.style.backgroundColor='rgba(0,0,0,0)';
	}
}