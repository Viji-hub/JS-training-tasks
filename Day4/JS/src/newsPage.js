// 01e4f285ba5a49eca5163c437ebb72af

const carouselTemplate = `<div class="carousel-item">
                        <div class="card-wrapper d-flex justify-content-center"></div></div>`;
const carouselCardTemplate = `<div class="card w-25 m-3 p-3 bg-dark-subtle">
                    <img class="img-fluid mx-auto rounded">
                    <div class="card-body px-0 pb-0 text-primary-emphasis text-center">
                        <h5 class="card-title"></h5>
                        <a href="#" target="_blank" class="btn btn-primary mt-0 fw-bolder fst-italic">Read More</a>
                        </div>
                    </div>`;
const newsCardTemplate = `<div class="card m-3 p-2 w-25 bg-dark-subtle">
                    <img class="img-fluid rounded">
                    <div class="card-body px-0 pb-0 text-primary-emphasis text-center">
                        <h5 class="card-title text-start"></h5>
                        <p class="card-text card-desc text-muted text-start mb-0"></p>
                        <p class="card-category card-text fst-italic fw-bold text-end text-muted mb-0"></p>
                        <a href="#" target="_blank" class="btn btn-primary mt-2 fs-6 fw-bolder fst-italic">Read More</a>
                    </div>
                </div>`;
const errorMsg = `News not found for the day...!!!!`;

let initialLoad = true;

const API_KEY = '01e4f285ba5a49eca5163c437ebb72af';
// const URL = 'https://newsapi.org/v2/top-headlines';
const URL = 'https://jsonplaceholder.org/posts';
const carouselEle = document.querySelector('.carousel-inner');
const newsWrapperEle = document.querySelector('.news-wrapper');

const country = new Map([
    ['india', 'in'],
    ['argentina', 'ar'],
    ['canada', 'ca'],
    ['france', 'fr'],
    ['usa', 'us'],
    ['italy', 'it']
]);

async function fetchNews(country='us', category='health') {
    try {
        const res = await fetch(`${URL}`);
        // const res = await fetch(`${URL}?country=${country}&category=${category}&apiKey=${API_KEY}`);
        const newsData = await res.json();
        // console.log(newsData.articles);
        // if(newsData.articles.length === 0) {
        //     carouselEle.innerHTML= errorMsg;
        //     return;
        // }
        // carouselEle.innerHTML = '';
        // loadNews(newsData.articles);

        if(newsData.length === 0) {
            alert(errorMsg);
            throw new Error(errorMsg);
        }

        if(initialLoad) {
            carouselEle.innerHTML = '';
            loadCarouselNews(newsData);
            loadNews(newsData);
            initialLoad = false;
        }
        else {
            console.log(country, category);
            loadNews(newsData);   
        }
    }
    catch(e) {
        alert(e);
        throw new Error(e);    }
}

function updateNews() {
    const countryOption = document.querySelector('#country').value;
    const categoryOption = document.querySelector('#category').value;
    fetchNews(country.get(countryOption), categoryOption);
}

function getCarouselCard(cardWrapper, data) {
    const tempEle = document.createElement('div');
    tempEle.innerHTML = carouselCardTemplate;
    const tempCard = tempEle.firstChild;

    const titleEle = tempCard.querySelector('.card-title');
    const linkEle = tempCard.querySelector('a.btn');
    const imgEle = tempCard.querySelector('img');
    
    // titleEle.innerHTML = data?.source?.title;
    // linkEle.setAttribute('href', data?.source?.urlToImage);

    titleEle.innerHTML = data?.title.length > 15 ? `${data?.title.slice(0, 15)}...` : data?.title;
    linkEle.setAttribute('href', data?.url);
    imgEle.setAttribute('src', data?.thumbnail);
    cardWrapper.appendChild(tempCard);
}

function loadCarouselNews(newsData) {
    const tempDiv = document.createElement('div');
    let clonedNode, cardWrapper;
    tempDiv.innerHTML = carouselTemplate;
    
    newsData.forEach((data, index) => {
        if(index === 0 || index%3 === 0) {
            clonedNode = tempDiv.children[0].cloneNode(true);
            cardWrapper = clonedNode.querySelector('.card-wrapper');
        }
        getCarouselCard(cardWrapper, data);
        if(index === 0) {
            clonedNode.classList.add('active');
        }
        carouselEle.appendChild(clonedNode);
    });
}

function getNewsCard(cardWrapper, data) {

    const titleEle = cardWrapper.querySelector('.card-title');
    const descEle = cardWrapper.querySelector('.card-desc');
    const categoryEle = cardWrapper.querySelector('.card-category');
    const linkEle = cardWrapper.querySelector('a.btn');
    const imgEle = cardWrapper.querySelector('img');
    
    // titleEle.innerHTML = data?.source?.title;
    // descEle.innerHTML = data?.source?.description;
    // linkEle.setAttribute('href', data?.source?.urlToImage);
    titleEle.innerHTML = data?.title;
    descEle.innerHTML = data?.content.length > 100 ? data?.content.slice(0, 100) : data?.content;
    categoryEle.innerHTML = `- ${data?.category}`;

    linkEle.setAttribute('href', data?.url);
    imgEle.setAttribute('src', data?.thumbnail);
}

function loadNews(newsData) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = newsCardTemplate;
    
    newsData.forEach((data, index) => {
        const cardWrapper = tempDiv.children[0].cloneNode(true);
        getNewsCard(cardWrapper, data);
        newsWrapperEle.appendChild(cardWrapper);
    });
}

fetchNews();