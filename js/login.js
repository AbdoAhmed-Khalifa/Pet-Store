
//////////// login page //////////////////////////
let emailInput = document.querySelector(".emailInput");
let passInput = document.querySelector(".passInput");
let submitBtn = document.querySelector(".submitBtn");
let message = document.querySelector(".message")
let accounts = [{
    owner: 'abdo',
    email: "abdo@yahoo.com",
    pin: "1111",
}, {
    owner: 'ezz',
    email: "ezz@yahoo.com",
    pin: "2222",
},
{
    owner: 'ahmed',
    email: "ahmed@yahoo.com",
    pin: "3333",
}]
if (localStorage.getItem("accounts")) {
    accounts = JSON.parse(localStorage.getItem("accounts"))
} else {
    localStorage.setItem("accounts", JSON.stringify(accounts))
}
let currentAccount;
submitBtn.addEventListener("click", function () {
    message.innerHTML = ""
    currentAccount = accounts.find(
        acc => acc.email === emailInput.value
    );
    if (currentAccount?.pin === passInput.value) {
        message.insertAdjacentHTML("beforeend", `<div class="alert alert-success" role="alert">
        Welcome ${currentAccount.owner} please wait Home page will open now
      </div>`)
        setTimeout(() => {
            window.open("/index.html", "_self")
            emailInput.value = "";

        }, 2000);
    } else {
        message.insertAdjacentHTML("beforeend", `<div class="alert alert-danger" role="alert">
        your email or password is incorrect
      </div>`)
        emailInput.value = "";
        passInput.value = "";
    }
})

