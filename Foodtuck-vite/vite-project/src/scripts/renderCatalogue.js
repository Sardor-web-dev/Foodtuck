function updateProductsDisplay() {
    productsBlock.innerHTML = '';

    renderProducts(filteredProducts);
}

function filterByCategory() {
    const checkboxes = document.querySelectorAll('.categories input[type="checkbox"]');
    const selectedCategories = [];

    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            const categoryText = checkbox.nextElementSibling.textContent;
            selectedCategories.push(categoryText);
        }
    });

    if (selectedCategories.length === 0) {
        filteredProducts = [...products];
    } else {
        filteredProducts = products.filter(product => {
            return selectedCategories.some(category =>
                product.name.toLowerCase().includes(category.toLowerCase())
            );
        });
    }

    updateProductsDisplay();
}

function filterByPrice() {
    updateProductsDisplay();
}

function searchProducts(searchTerm) {
    if (!searchTerm.trim()) {
        filteredProducts = [...products];
    } else {
        filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    updateProductsDisplay();
}

function sortProducts(sortType) {
    switch (sortType) {
        case 'newest':
            filteredProducts = [...filteredProducts];
            break;
        case 'more expensive':
            filteredProducts.sort((a, b) => {
                const priceA = parseFloat(a.price.replace('$', ''));
                const priceB = parseFloat(b.price.replace('$', ''));
                return priceB - priceA;
            });
            break;
        case 'cheaper':
            filteredProducts.sort((a, b) => {
                const priceA = parseFloat(a.price.replace('$', ''));
                const priceB = parseFloat(b.price.replace('$', ''));
                return priceA - priceB;
            });
            break;
        default:
            break;
    }

    updateProductsDisplay();
}

function initFilters() {
    const categoryCheckboxes = document.querySelectorAll('.categories input[type="checkbox"]');
    categoryCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterByCategory);
    });

    const searchInput = document.querySelector('.search__input');
    const searchButton = document.querySelector('.search__button');

    searchButton.addEventListener('click', () => {
        searchProducts(searchInput.value);
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchProducts(searchInput.value);
        }
    });

    const sortSelects = document.querySelectorAll('.sorting__select');
    sortSelects.forEach((select, index) => {
        select.addEventListener('change', (e) => {
            if (index === 0) {
                sortProducts(e.target.value);
            }
        });
    });

    const priceFilter = document.querySelector('.price-text p');
    priceFilter.addEventListener('click', filterByPrice);
}

const logo = document.getElementById("logo")
const productsBlock = document.querySelector(".products")

console.log(logo);

logo.onclick = () => {
    window.location.href = "/";
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

        img.onclick = () => {
            window.location.href = `/pages/productPage.html?id=${product.id}`
        }

        priceDiv.append(span, discount)
        div.append(img, p, priceDiv)
        productsBlock.append(div)
    }
}

const ApiUrl = "https://690b37d76ad3beba00f3f77d.mockapi.io/api/v1/products"
let products = []

const getProducts = async () => {
    showLoader(); 

    try {
        const response = await fetch(ApiUrl);
        products = await response.json();
        renderProducts(products);
        console.log(products);
    } catch (e) {
        console.error("Something went wrong:", e);
    } finally {
        hideLoader(); 
    }
};


function showLoader() {
    const loader = document.getElementById("loader");
    if (loader) loader.classList.remove("hidden");
}

function hideLoader() {
    const loader = document.getElementById("loader");
    if (loader) loader.classList.add("hidden");
}


getProducts()

initFilters();

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

        textBlock.append(p, stars, span)
        div.append(img, textBlock)
        latestProducts.append(div)
    }
}

renderLatestProducts(latestProductsArr)

const recentPostsBlock = document.querySelector(".recentPosts")

const renderRecentPosts = (arr) => {
    for (let post of arr) {
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