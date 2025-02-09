const API_KEY = "cc820919d92e4289a957306caa1c5b7f";
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener("load",()=> fetchNews("India"));

function reload(){
    window.location.reload();
}

async function fetchNews(query){
    const result = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data = await result.json();
    alldata(data.articles);
}

function alldata(articles){
    const cards = document.getElementById("cards-container");
    const newstemplate = document.getElementById("template-card");
    cards.innerHTML = "";
    articles.forEach((article) => {
        if(!article.urlToImage) return;
        const cardclone = newstemplate.content.cloneNode(true);
        filldata(cardclone,article);
        cards.appendChild(cardclone);
    });
}

function filldata(cardclone,article){
    const img = cardclone.querySelector('#news-img');
    const title = cardclone.querySelector('#news-title');
    const source = cardclone.querySelector('#news-source');
    const description = cardclone.querySelector('#news-desc');

    img.src = article.urlToImage;
    title.innerHTML = article.title;
    description.innerHTML = article.description;

    const date = new Date(article.publishedAt).toLocaleString('en-US',{
        timeZone: "Asia/Jakarta",
    });
    source.innerHTML = `${article.source.name} . ${date}`;
    cardclone.firstElementChild.addEventListener("click",()=> {
        window.open(article.url, "_blank");
    });
}

let selected = null;
function navClick(id){
    fetchNews(id);
    const item = document.getElementById(id);
    selected?.classList.remove("active");
    selected = item;
    selected.classList.add('active');
}

