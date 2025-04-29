setInterval(timer, 1000);

function timer() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}