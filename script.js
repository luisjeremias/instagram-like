let img = document.querySelector('.img1');
let like = document.querySelector('.like');
let container = document.querySelector('.img-container');
img.addEventListener('dblclick',()=>{
	like.style.display = "block"
	setTimeout(()=>{
		like.style.display = "none";
	},380)
	
	
})
