//Setting Selectors
var meme=document.getElementById("user-info");
var memes=document.getElementById("memeArea");

//Event Function
meme.addEventListener("submit", function(e){
    
    var down=document.createElement('div');
    down.setAttribute('id', 'down');
    down.innerText=document.getElementById("bottom-text").value;

    var up=document.createElement("div");
    up.setAttribute("id", "up");
    up.innerText = document.getElementById("top-text").value;
    
    var del=document.createElement('button');
    del.textContent="Delete";
    del.setAttribute('id','del')

	var imgUrl=document.createElement("img");
	imgUrl.src=document.getElementById("img-url").value;
	
	var newMeme=document.createElement("li");

    del.addEventListener('click', function(){
		newMeme.remove();
	})

    e.preventDefault();

    memes.appendChild(newMeme);
	newMeme.appendChild(imgUrl);
    newMeme.appendChild(up);
	newMeme.appendChild(down);
	newMeme.appendChild(del);
    meme.reset();
});
