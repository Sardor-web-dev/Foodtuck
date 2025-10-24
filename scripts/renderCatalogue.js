const logo = document.getElementById("logo")
const productsBlock = document.querySelector(".products")

console.log(logo);


logo.onclick = () => {
    window.location("/")
}

function renderProducts(arr) {
    for (let product of arr) {
        const div = document.createElement("div")
        const img = document.createElement("div")
        const p = document.createElement("p")
        const priceDiv = document.createElement("div")
        const span = document.createElement("span")
        const discount = document.createElement("span")


        div.classList.add("product")
        img.classList.add("product__image")
        p.classList.add("product__name")
        priceDiv.classList.add("product-price__block")
        span.classList.add("product__price")
        discount.classList.add("discount")

        p.innerText = product.name
        img.style.backgroundImage = `url(${product.img})`
        span.innerText = product.price
        product.discount ? discount.innerText = product.discount : discount.innerText = ''

        priceDiv.append(span, discount)
        div.append(img, p, priceDiv)
        productsBlock.append(div)
    }
}

renderProducts(products)


const latestProducts = document.querySelector(".latest-products")

const renderLatestProducts = (arr) => {
    for (let product of arr) {
        const div = document.createElement("div")
        const img = document.createElement("img")
        const textBlock = document.createElement("div")
        const p = document.createElement("p")
        const stars = document.createElement("img")
        const span = document.createElement("span")

        div.classList.add("product__card")
        img.src = product.image
        img.classList.add("product__card-image")
        textBlock.classList.add("product__card-text")
        p.innerText = product.name
        stars.src = "../images/stars.svg"
        span.innerText = product.price

        textBlock.append(p, stars,span)
        div.append(img, textBlock)
        latestProducts.append(div)
    }
}

renderLatestProducts(latestProductsArr)

const recentPostsBlock = document.querySelector(".recentPosts")

const renderRecentPosts = (arr) => {
    for(let post of arr) {
        const div = document.createElement("div")
        const img = document.createElement("img")
        const textDiv = document.createElement("div")
        const p = document.createElement("p")
        const span = document.createElement("span")


        div.classList.add("recentPost")
        img.classList.add("recentPost__image")
        textDiv.classList.add("recentPost__text")
        p.classList.add("recentPost__title")
        span.classList.add("recentPost__date")

        img.src = post.image;
        p.innerText = post.title;
        span.innerText = post.date

        textDiv.append(p, span)
        div.append(img, textDiv)
        recentPostsBlock.append(div)
    }
}

renderRecentPosts(recentPosts)