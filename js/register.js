let nameInput = document.querySelector(".nameInput");
let emailInput = document.querySelector(".emailInput");
let passInput = document.querySelector(".passInput");
let submitBtn = document.querySelector(".submitBtn");
let message = document.querySelector(".message")
let accounts;
if (localStorage.getItem("accounts")) {
    accounts = JSON.parse(localStorage.getItem("accounts"));
} else {
    localStorage.setItem("accounts", JSON.stringify([]))
}
let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
submitBtn.addEventListener("click", function () {
    message.innerHTML = ""
    if (!(emailInput.value && nameInput.value && passInput.value)) {
        message.insertAdjacentHTML("beforeend", `<div class="alert alert-danger" role="alert">
       please fill fields
      </div>`)
    } else if (!regex.test(emailInput.value)) {
        message.insertAdjacentHTML("beforeend", `<div class="alert alert-danger" role="alert">
       Invalid email please write email like test@yahoo.com 
      </div>`)
    }
    else if (Object.values(accounts).find((acc) => acc.email == emailInput.value)) {
        message.insertAdjacentHTML("beforeend", `<div class="alert alert-danger" role="alert">
       this account is used
      </div>`)
    } else {
        let acc = {
            owner: nameInput.value,
            email: emailInput.value,
            pin: passInput.value
        }
        accounts.push(acc)
        localStorage.setItem("accounts", JSON.stringify(accounts))
    }

    setTimeout(() => {
        window.open("/login.html", "_self")
        emailInput.value = "";
        nameInput.value = "";
    }, 2000);
})
