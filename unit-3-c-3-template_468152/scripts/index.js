// Store the wallet amount to your local storage with key "amount"
function addmoney() {
    let money = document.querySelector("#amount").value
    let wallet = document.querySelector("#wallet")

    wallet.innerText = money

    let arr = []
    arr.push(wallet.innerText)
    console.log(arr)
    localStorage.setItem("amount", JSON.stringify(arr))


}