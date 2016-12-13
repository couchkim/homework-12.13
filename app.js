function init(){
    
    let button2 = document.querySelector('#like');
    button2.addEventListener('click', function(){
        console.log("Likes " + "username")
    })

    let button3 = document.querySelector('#nope');
        button3.addEventListener('click', function(){
        console.log("username " + "has been noped!")
        })

}

let button1 = document.querySelector('#new');
    button1.addEventListener('click', addProfile);



window.addEventListener('load', init);