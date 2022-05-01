// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let waldata = JSON.parse(localStorage.getItem("amount"))
let wallet = document.querySelector("#wallet").innerText = waldata[0]

console.log(waldata[0])

let id;
let movdiv = document.querySelector("#movies");
async function searchmov() {
    try {
        const searcher = document.getElementById("search").value
        let res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=47da5fa485392b368f99c265ecbe2acd&language=en-US&page=1&include_adult=false&query=${searcher}`)
        const data = await res.json();

        return data

    } catch (err) {
        console.log("err")
    }
}

function appendmovs(data) {
    movdiv.innerHTML = ""
    if (data == undefined) {
        return false;
    }
    console.log(data)
    printer(data.results)
}


async function main() {
    let data = await searchmov();

    appendmovs(data)
}

function debounce(fun, delay) {
    if (id) {
        clearTimeout(id);
    }
    id = setTimeout(function () {
        fun()
    }, delay);

}






//printer////////////////////////////////////











var IMG_URL = "https://image.tmdb.org/t/p/w500"
var appen = document.querySelector("#movies")
function printer(data) {
    appen.innerHTML = ""
    data.map(function (ele) {


        let img = document.createElement("img")
        let title = document.createElement("h3")
        let rldat = document.createElement("h4")
        let rating = document.createElement("h4")



        img.src = `${IMG_URL}${ele.poster_path}`
        title.innerText = `Title :${ele.original_title}`
        rldat.innerText = `Release Date :${ele.release_date}`
        rating.innerText = `IMDB :${ele.vote_average + 0.5}`




        let booknow = document.createElement("button")
        booknow.innerText = "book now"
        booknow.setAttribute("class", "book_now")

        booknow.onclick = () => {

            viddata(ele);

        };


        let cont = document.createElement("div")
        cont.setAttribute("id", "cont")
        cont.append(img, title, rldat, rating, booknow)

        appen.append(cont)



    })
}
//////////boker///////

const viddata = (x) => {
    console.log(x)
    window.location.href = "checkout.html";
    localStorage.setItem("movie", JSON.stringify(x))
}