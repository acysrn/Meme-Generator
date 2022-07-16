document.addEventListener("DOMContentLoaded", function(){
    const memeForm = document.getElementById("meme-form");
    const listGallery = document.querySelector(".gallery");
    const btn = document.getElementById('btn');


    memeForm.addEventListener("submit", function(event){
        event.preventDefault();

        const memeLi = document.createElement('li');
        memeLi.classList.add("meme-img");

        const topText = document.getElementById("text-top");
        const urlInput = document.getElementById("uploaded-img").value,
        src = urlInput,
        img = document.createElement("img");
        img.src = src;

        const topTextDiv = document.createElement("div");
        topTextDiv.classList.add("text", "top");
        topTextDiv.innerText = document.getElementById("text-top").value;

        const bottomTextDiv = document.createElement("div");
        bottomTextDiv.classList.add("text", "bottom");
        bottomTextDiv.innerText = document.getElementById("text-bottom").value;

        const removeDiv = document.createElement("div");
        removeDiv.classList.add("red-cross");
        removeDiv.innerText = "X";
        removeDiv.style.color = "red";

        listGallery.appendChild(memeLi);
        memeLi.appendChild(img);
        memeLi.appendChild(topTextDiv);
        memeLi.appendChild(bottomTextDiv);
        memeLi.appendChild(removeDiv);
       
        memeForm.reset();

    });


    function remove(event) {
        event.target.parentNode.remove();
    }

    listGallery.addEventListener("click", remove, false);
    
 
    });

