/* 

    Merhaba, Kodluyoruz...

*/

let list = document.querySelector("#list");
let taskValue;
let storageData;

//list.forEach()
function domList() {
    list.innerHTML = ``;
    for (let i = 0; i < localStorage.length; i++) {
        const loKey = localStorage.key(i);
        let getData = JSON.parse(localStorage.getItem(loKey)) ? JSON.parse(localStorage.getItem(loKey)) : { id: 0, title: "hata", class: "unChecked" };
        list.innerHTML += `<li class="${getData.class}"><p>${loKey}</p> <span class="close">X</span></li>`;
    }
}
domList();
// Add
function newElement() {
    var regEx = /[0-9a-z]/;
    taskValue = document.querySelector("#task").value;
    if (taskValue.match(regEx)) {
        let listItem = document.createElement("li");
        listItem.innerHTML = `<p>${taskValue}</p> <span class="close">X</span>`;
        list.appendChild(listItem);

        $('.success').toast('show');

        storageData = {
            class: "unChecked"
        }
        localStorage.setItem(`${taskValue}`, JSON.stringify(storageData));
    } else {
        $('.error').toast('show');
    }
    domList();
}
// Done and Delete
list.addEventListener("click", (x) => {
    // Done  
    let setDatas;
    if (x.target.tagName === "LI") {
        setDatas = x.target.children;
        let getDatas = JSON.parse(localStorage.getItem(setDatas[0].textContent));
        if (x.target.classList.contains("checked")) {
            x.target.classList.remove("checked");
            getDatas.class = "unChecked";
            localStorage.setItem(`${setDatas[0].textContent}`, JSON.stringify(getDatas))
        } else {
            x.target.classList.add("checked");
            getDatas.class = "checked";
            localStorage.setItem(`${setDatas[0].textContent}`, JSON.stringify(getDatas))
        }
    }
    // Delete
    if (x.target.classList.contains("close")) {
        setDatas = x.target.parentElement.children;
        localStorage.removeItem(`${setDatas[0].textContent}`);
        x.target.parentElement.remove();
    }
});

