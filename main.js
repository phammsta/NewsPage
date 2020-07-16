let newsList = []
let count = 1

const callApi = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=94f4840e422b428fbcbc7c4f75bb069d&pageSize=8`
    let data = await fetch(url)
    let result = await data.json()
    newsList = result.articles
    console.log(newsList)

    render(newsList)
}

callApi()

const render = (list) => {
    let newsHTML = list.map(item => {
        return `
        <div class="col-md-6">
        <div class="card cardmargin" style="width:35rem">
        <img src="${item.urlToImage}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title"><a href="${item.url}">${item.title}</a></h5>
          <p class="card-text">${item.description}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Source: <a href="${item.url}">${item.source.name}</a></li>
          <li class="list-group-item">${item.author}</li>
          <li class="list-group-item">${moment(item.publishedAt == null ? " " : item.publishedAt).fromNow()}</li>
        </ul>
        <div class="card-body">
          <a href="${item.url}" class="card-link">Read More</a>
        </div>
      </div>
      </div>`
    }).join('')


    document.getElementById("newsListArea").innerHTML = newsHTML
}

const searchButton = async() => {
    let keyword = document.getElementById("keywordArea").value
    let url =  `http://newsapi.org/v2/top-headlines?country=us&apiKey=142886cc0f1e4e63aab375de5c1f124e&pageSize=6&q=${keyword}`
    let data = await fetch(url)
    let result = await data.json()
    newsList = result.articles

    render(newsList)
}


const moreButton = async() => {
    count++
    let url = `http://newsapi.org/v2/top-headlines?country=us&apiKey=142886cc0f1e4e63aab375de5c1f124e&pageSize=6`
    let data = await fetch(url)
    let result = await data.json()
    newsList = newsList.concat(result.articles);
    
    render(newsList)
}

const allDrop = async() => {   
    let url = `http://newsapi.org/v2/top-headlines?country=us&apiKey=142886cc0f1e4e63aab375de5c1f124e&pageSize=6&category=general`
    let data = await fetch(url)
    let result = await data.json()
    newsList = result.articles
    
    render(newsList)
}
const businessDrop = async() => {   
    let url = `http://newsapi.org/v2/top-headlines?country=us&apiKey=142886cc0f1e4e63aab375de5c1f124e&pageSize=6&category=business`
    let data = await fetch(url)
    let result = await data.json()
    newsList = result.articles
    
    render(newsList)
}
const entertainmentDrop = async() => {   
    let url = `http://newsapi.org/v2/top-headlines?country=us&apiKey=142886cc0f1e4e63aab375de5c1f124e&pageSize=6&category=entertainment`
    let data = await fetch(url)
    let result = await data.json()
    newsList = result.articles
    
    render(newsList)
}
const healthDrop = async() => {   
    let url = `http://newsapi.org/v2/top-headlines?country=us&apiKey=142886cc0f1e4e63aab375de5c1f124e&pageSize=6&category=health`
    let data = await fetch(url)
    let result = await data.json()
    newsList = result.articles
    
    render(newsList)
}
const scienceDrop = async() => {   
    let url = `http://newsapi.org/v2/top-headlines?country=us&apiKey=142886cc0f1e4e63aab375de5c1f124e&pageSize=6&category=science`
    let data = await fetch(url)
    let result = await data.json()
    newsList = result.articles
    
    render(newsList)
}
const sportsDrop = async() => {   
    let url = `http://newsapi.org/v2/top-headlines?country=us&apiKey=142886cc0f1e4e63aab375de5c1f124e&pageSize=6&category=sports`
    let data = await fetch(url)
    let result = await data.json()
    newsList = result.articles
    
    render(newsList)
}
const technologyDrop = async() => {   
    let url = `http://newsapi.org/v2/top-headlines?country=us&apiKey=142886cc0f1e4e63aab375de5c1f124e&pageSize=6&category=technology`
    let data = await fetch(url)
    let result = await data.json()
    newsList = result.articles
    
    render(newsList)
}


