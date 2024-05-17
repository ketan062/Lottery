let lottery = document.querySelectorAll('.lotteryno');
let result = document.querySelector(".headline");
let empty = document.querySelector(".input");
let retry = document.getElementById("button");
let amount = document.getElementById("amt");
let x = 10;
amount.innerHTML = x;
newgame()
retry.addEventListener("click", () => {
    empty.style.opacity = "1";
    result.innerHTML = "Choose one of the tickets";
    retry.style.opacity = "0";
    newgame();
});

function newgame() {
    lottery.forEach(function (ticket) {
        let newTicket = ticket.cloneNode(true);
        ticket.parentNode.replaceChild(newTicket, ticket);
    });
    lottery = document.querySelectorAll('.lotteryno');

    lottery.forEach(function (ticket) {
        ticket.innerHTML = Math.floor(Math.random() * 100 + 1);
    });

    let num = lottery[Math.floor(Math.random() * lottery.length)];

    lottery.forEach(function (ticket) {
        ticket.addEventListener('click', function () {
            if (ticket === num) {
                result.innerHTML = "You Won 5 coins";
                empty.style.opacity = "0";
                x += 5;
                retry.style.opacity = "1";
            } else {
                result.innerHTML = "You lose the game";
                empty.style.opacity = "0";
                retry.style.opacity = "1";
                x--;
            }
            amount.innerHTML = x;
        });
    });
}
