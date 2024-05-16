let lottery = document.querySelectorAll('.lotteryno')
let result = document.querySelector(".headline")
let empty = document.querySelector(".input")
let retry = document.getElementById("button")
let amount = document.getElementById("amt")
let x=10;
amount.innerHTML = x;

retry.addEventListener("click", () =>{
    empty.style.opacity="100";
    result.innerHTML="Choose one of the tickets"
    retry.style.opacity="0";
    newgame()
})

newgame()
function newgame() {
    lottery.forEach( function (ticket) {
        ticket.innerHTML = Math.floor(Math.random() * 100 + 1)
    })
    let num = lottery[Math.floor(Math.random() * 5)]
    lottery.forEach( function (ticket) {
        ticket.addEventListener('click',function (e) {
            e.preventDefault
            if (ticket == num){
                result.innerHTML = "You Won 5 coins"
                empty.style.opacity="0";
                Math.floor(x+=5);
                retry.style.opacity="100";
                amount.innerHTML = x;
            } 
            if (ticket != num) {
                result.innerHTML = "You lose the game"
                empty.style.opacity="0";
                retry.style.opacity="100";
                Math.floor(x--);
                amount.innerHTML = x;
            }
        })
    })
}
