let searchForm = document.querySelector('.header .search-form');
let searchResult = document.querySelector('.search-result')

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    searchResult.classList.toggle('active')
}

let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}

let slides = document.querySelectorAll('.home .slide');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}


/* SEARCH SECTION */
document.getElementById("search-form").addEventListener("submit", function (e) {
    e.preventDefault()
    search();
});

document.getElementById("searchInput").addEventListener("keyup", function (event) {        
    if (event.key === "Enter") {
        search();
    }
});

function search() {
    var searchQuery = document.getElementById("searchInput").value.toLowerCase();
    var itemsToSearch = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, a"); // Defina os elementos nos quais deseja realizar a busca

    var resultsList = document.querySelector(".search-result");
    resultsList.innerHTML = "";

    Array.from(itemsToSearch).forEach(function (item) {
        var text = item.textContent.toLowerCase();
        if (text.includes(searchQuery)) {
            var listItem = document.createElement("li");
            var link = document.createElement("a");
            link.textContent = item.textContent;
            link.href = "#" + item.id; // Adicione o link para a âncora do elemento, se aplicável
            listItem.appendChild(link);
            resultsList.appendChild(listItem);

            console.log(resultsList)
        }
    });
}