function init(){
   
let button1 = document.querySelector('#new');
    button1.addEventListener('click', addProfile);

    let button2 = document.querySelector('#like');
    button2.addEventListener('click', function(){
        console.log("Likes " + "Thumbs Up Guy");
    })

    let button3 = document.querySelector('#nope');
        button3.addEventListener('click', function(){
        console.log("Thumbs Up Guy" + " has been noped!");
        })
}

function addProfile(){
   
   
    let parent= document.createElement('li');
    let divParent= document.createElement('div');
   
    let pic = document.createElement('img');
    pic.src = "https://randomuser.me/api/portraits/men/3.jpg";
    let name = document.createElement('h2');
    name.textContent = "Thumbs Up Guy";
    
    // let like = document.querySelector('#like');
    like = document.createElement('button');
    like.textContent = "Like";
    like.addEventListener('click', function(){
        console.log("Likes " + "Thumbs Up Guy");
        like.classList.add('faded');
    })
    let nope = document.createElement('button');
    nope.textContent = "Nope";
    nope.addEventListener('click', function(){
        console.log("Thumbs Up Guy" + " has been noped!");
        nope.classList.add('faded');
    })
 

    parent.appendChild(pic);
    divParent.appendChild(name);
    divParent.appendChild(like);
    divParent.appendChild(nope);

    parent.appendChild(divParent);
    

    let grandparent = document.querySelector('#list');
    grandparent.appendChild(parent);
    
}



window.addEventListener('load', init);