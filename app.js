const form = document.querySelector("#form");
const newMemes = document.querySelector('#newMemes'); //area where new memes are created
const url = document.querySelector('#url');
const topText = document.querySelector('#onTop');
const botText = document.querySelector('#onBot');

function MemeGenerator(){
    form.addEventListener('submit',function(event){
        if(url.value === "" || topText.value === "" || botText.value === ""){ 
            alert("Please fill in all text boxes.")
            event.preventDefault();
            return; //in case any are blank, stop user from submitting
        }
            event.preventDefault();
            
            //create new elements after submit
            let meme = document.createElement('div'); //div that contains img, top text and bot text
            let img = document.createElement('img'); //image
            let top = document.createElement('div'); //top text
            let bot = document.createElement('div'); //bot text

            //set bot text value into meme img
            bot.innerText = botText.value; 
            bot.setAttribute('class', 'botText');

            //set top text value into meme img
            top.innerText = topText.value;
            top.setAttribute('class', 'topText');
            
            //set image from url
            img.setAttribute('src', url.value);
            img.setAttribute('class','images');

            //set class name to edit meme div box in css
            meme.setAttribute('class','meme');

            //appending all created elements after submit
            newMemes.appendChild(meme);
            meme.appendChild(img);
            meme.appendChild(top);
            meme.appendChild(bot);

            //make all text boxes blank after submission
            url.value = "";
            topText.value = "";
            botText.value = "";
         

            newMemes.addEventListener('click',function(event){
                if(event.target.nodeName === "IMG" || event.target.className === "topText" || event.target.className === "botText"){
                    event.target.parentNode.remove();
                }
            }) //deletes clicked meme
        
    })
            
}
MemeGenerator();