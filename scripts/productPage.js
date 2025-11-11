const ApiUrl = "https://690b37d76ad3beba00f3f77d.mockapi.io/api/v1/products"
const updateBtn = document.querySelector(".update")


const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
console.log(id);


const getProductsById = async () => {
    try {
        const response = await fetch(`${ApiUrl}/${id}`)
        const product = await response.json()
        renderProduct(product)

        console.log(product);

    } catch (e) {
        console.log(e, "Something went wrong");

    }
}
getProductsById()   

const productBlock = document.querySelector(".productBlock")

function renderProduct(product) {
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
    productBlock.append(div)
}

const changeProducts = async () => {
    try {
        for (let product of data) {
            const response = await fetch(ApiUrl, {
                method: "POST",
                body: JSON.stringify(product),
                headers: {
                    "Content-type": "application/json"
                }
            })

            products = await response.json()
        }

        console.log(products);

    } catch (e) {
        console.log(e, "Something went wrong");
    }
}

updateBtn.onclick = () => {
    changeProducts()
}

const data = [
    {
        name: "Fresh Lime",
        img: "../images/product1.jpg",
        price: "$38.00",
        discount: "$45.00"
    },
    {
        name: "Chocolate Mulin",
        img: "../images/product2.jpg",
        price: "$28.00",
    },
    {
        name: "Burger",
        img: "../images/product3.jpg",
        price: "$21.00",
        discount: "$45.00"
    },
    {
        name: "Country Burger",
        img: "../images/product4.jpg",
        price: "$45.00",
    },
    {
        name: "Drink",
        img: "../images/product5.jpg",
        price: "$23.00",
        discount: "$45.00"
    },
    {
        name: "Pizza",
        img: "../images/product6.jpg",
        price: "$43.00",
    },
    {
        name: "Cheese Butter",
        img: "../images/product7.jpg",
        price: "$10.00",
    },
    {
        name: "Sandwiches",
        img: "../images/product8.jpg",
        price: "$25.00",
    },
    {
        name: "Chicken Chup",
        img: "../images/product9.jpg",
        price: "$12.00",
    },
    {
        name: "Country Burger",
        img: "../images/product4.jpg",
        price: "$45.00",
    },
    {
        name: "Drink",
        img: "../images/product5.jpg",
        price: "$23.00",
        discount: "$45.00"
    },
    {
        name: "Pizza",
        img: "../images/product6.jpg",
        price: "$43.00",
    },
    {
        name: "Cheese Butter",
        img: "../images/product7.jpg",
        price: "$10.00",
    },
    {
        name: "Sandwiches",
        img: "../images/product8.jpg",
        price: "$25.00",
    },
    {
        name: "Chicken Chup",
        img: "../images/product9.jpg",
        price: "$12.00",
    },
]
