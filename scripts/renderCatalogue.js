const productsBlock = document.querySelector(".products")

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