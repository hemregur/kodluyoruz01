let time = new Date;
let tHour = time.getHours();
let tMint = time.getMinutes();
let tSeco = time.getSeconds();
function saat() {
    time = new Date;
    tHour = time.getHours();
    tMint = time.getMinutes();
    tSeco = time.getSeconds();
    if (tHour < 10)
        tHour = "0" + tHour;
    if (tMint < 10)
        tMint = "0" + tMint;
    if (tSeco < 10)
        tSeco = "0" + tSeco;
    document.getElementById("myClock").innerHTML = `<span class="clockItem">${tHour}</span><span class="dot">:</span><span class="clockItem">${tMint}</span><span class="dot">:</span><span class="clockItem">${tSeco}</span>`;
}
setInterval(saat, 1000);

let popup = document.querySelector(".popup")
let lText = document.querySelector(".userName");
let lButton = document.querySelector("button");
let lError = document.querySelector("#error");
let lTime = document.querySelector(".time");
function pops() {
    if (lText.value) {
        let userName = lText.value;
        document.getElementById("myName").innerHTML = userName;
        popup.style.display = "none";
        lTime.innerHTML = `Giriş: ${tHour}:${tMint}:${tSeco}`;
    } else {
        error.innerText = "Boş olamaz!"
    }
}
lButton.addEventListener("click", pops);
