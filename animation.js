const user = document.querySelector(".name")

let userN = JSON.parse(localStorage['localCart']);//парсим localStorage
console.log(userN)
/* renderData(userN)
function renderData(userN) { */
    user.innerHTML = `<h1 class="title">${userN}</h1>`
//}