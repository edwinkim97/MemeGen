//Setting Selectors
let meme=document.getElementById("user-info");

//Event Function
meme.addEventListener("submit", function(e){
	e.preventDefault();

    let down=document.createElement('div');
	down.setAttribute('class', 'down');
	down.innerText=document.getElementById("bottom-text").value;
	
    let up=document.createElement("div");
	up.setAttribute("class", "up");
	up.innerText = document.getElementById("top-text").value;

	let del=document.createElement('button');
    del.setAttribute('id','del')
	del.setAttribute('type', 'button');
    del.innerText="Delete";
	del.addEventListener('click', function(){
		unlistedMeme.remove();
	})

	let imgUrl=document.createElement("img");
	imgUrl.src=document.getElementById("img-url").value;
	
	let memes=document.getElementById("memeArea");
	let unlistedMeme=document.createElement("li");

    memes.appendChild(unlistedMeme);
	unlistedMeme.appendChild(imgUrl);
    unlistedMeme.appendChild(up);
	unlistedMeme.appendChild(down);
	unlistedMeme.appendChild(del);
    meme.reset();
});
