// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
var waldata = JSON.parse(localStorage.getItem("amount"))
var wallet = document.querySelector("#wallet").innerText = waldata[0]



function moncut() {
    let noseat = document.querySelector("#number_of_seats").value
    console.log(noseat)
    let waldata = JSON.parse(localStorage.getItem("amount"))
    if (waldata[0] >= noseat * 100) {
        alert("Booking successfull!")
        let resdat = []
        resdat.push(waldata[0] - (noseat * 100))

        console.log(resdat)

        localStorage.setItem("amount", JSON.stringify(resdat))

        let wallet = document.querySelector("#wallet")
        console.log(waldata[0])
        wallet.innerText = resdat
    }
    else {
        alert("Insufficient Balance!")
    }

}

let movdata = JSON.parse(localStorage.getItem("movie"))



var IMG_URL = "https://image.tmdb.org/t/p/w500"
console.log(movdata)

var movdiv = document.querySelector("#movie")

printer(movdata)
function printer(ele) {

    let img = document.createElement("img")
    let title = document.createElement("h1")
    let rldat = document.createElement("h2")
    let rating = document.createElement("h2")



    img.src = `${IMG_URL}${ele.poster_path}`
    title.innerText = `Title :${ele.original_title}`
    rldat.innerText = `Release Date :${ele.release_date}`
    rating.innerText = `IMDB :${ele.vote_average + 0.5}`

    let cont = document.createElement("div")
    cont.setAttribute("id", "cont")
    cont.append(img, title, rldat, rating)

    let movdiv = document.querySelector("#movie")
    movdiv.innerHTML = ""

    movdiv.append(cont)



}