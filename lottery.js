let tic1 = document.getElementById("ticket1")
let tic2 = document.getElementById("ticket2")
let tic3 = document.getElementById("ticket3")
let tic4 = document.getElementById("ticket4")
let tic5 = document.getElementById("ticket5")
let result = document.querySelector(".headline")
let empty = document.querySelector(".input")
let retry = document.getElementById("button")

retry.addEventListener("click", () =>{
    empty.style.opacity="100";
    result.innerHTML="Choose one of those tickets"
    retry.style.opacity="0";
    newgame()
})

newgame()

function newgame() {
    tic1.innerHTML = Math.floor(Math.random() * 100 + 1)
    tic2.innerHTML = Math.floor(Math.random() * 100 + 1)
    tic3.innerHTML = Math.floor(Math.random() * 100 + 1)
    tic4.innerHTML = Math.floor(Math.random() * 100 + 1)
    tic5.innerHTML = Math.floor(Math.random() * 100 + 1)

    let arr = [tic1,tic2,tic3,tic4,tic5]

    let num = arr[Math.floor(Math.random() * 5)]

    console.log(num);

    tic1.addEventListener("click", function(){
        if(tic1 == num){
            result.innerHTML = "You Won a Car"
            empty.style.opacity="0";
            retry.style.opacity="100";
        } else{
            result.innerHTML = "You lose the game"
            empty.style.opacity="0";
            retry.style.opacity="100";
        }
    })
    tic2.addEventListener("click", function(){
        if(tic2 == num){
            result.innerHTML = "You Won a Car"
            empty.style.opacity="0";
            retry.style.opacity="100";
        } else{
            result.innerHTML = "You lose the game"
            empty.style.opacity="0";
            retry.style.opacity="100";
        }
    })
    tic3.addEventListener("click", function(){
        if(tic3 == num){
            result.innerHTML = "You Won a Car"
            empty.style.opacity="0";
            retry.style.opacity="100";
        } else{
            result.innerHTML = "You lose the game"
            empty.style.opacity="0";
            retry.style.opacity="100";
        }
    })
    tic4.addEventListener("click", function(){
        if(tic4 == num){
            result.innerHTML = "You Won a Car"
            empty.style.opacity="0";
            retry.style.opacity="100";
        } else{
            result.innerHTML = "You lose the game"
            empty.style.opacity="0";
            retry.style.opacity="100";
        }
    })
    tic5.addEventListener("click", function(){
        if(tic5 == num){
            result.innerHTML = "You Won a Car"
            empty.style.opacity="0";
            retry.style.opacity="100";
        } else{
            result.innerHTML = "You lose the game"
            empty.style.opacity="0";
            retry.style.opacity="100";
        }
    })
}

