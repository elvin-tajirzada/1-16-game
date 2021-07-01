let tbody = document.getElementById("tbody");
let time = document.getElementById("time");
let max_time;
let set;
let check;

Start();

function Start() {
    time.innerHTML = `The game ends after 15 seconds`;
    check = 1;
    max_time = 14;
    Table();
    set = setInterval(Time, 1000);
}

function Table() {
    let first = [];
    let last = [];
    let rand;
    let number = 0;
    let tbl = ``;
    for (let i = 0; i < 16; i++) {
        first[i] = i + 1;
    }
    for (let i = 0; i < 16; i++) {
        rand = Math.floor(Math.random() * first.length);
        last[i] = first[rand];
        first.splice(rand, 1);
    }
    for (let i = 0; i < 4; i++) {
        tbl += `<tr>`;
        for (let j = 0; j < 4; j++) {
            tbl += `<td class="text-center align-middle" id="click${last[number]}" onclick="Click(${last[number]})" style="height:100px">${last[number]}</td>`;
            number++;
        }
        tbl += `</tr>`;
    }
    tbody.innerHTML = tbl;
}

function Click(number) {
    let td = document.getElementById("click" + number);
    if (check == number) {
        td.style.backgroundColor = "green";
        td.style.color = "white";
        if (check == 16) {
            Finish("You win!")
        }
        check++;
    } else {
        td.style.backgroundColor = "red";
        td.style.color = "white";
        Finish("You lost the game");
    }
}

function Time() {
    time.innerHTML = `The game ends after ${max_time} seconds`;
    max_time--;
    if (max_time < 0) {
        Finish("Time is over. You lost the game");
    }
}

function Finish(par) {
    clearInterval(set);
    setTimeout(() => {
        alert(par);
        Start();
    }, 100);
}
