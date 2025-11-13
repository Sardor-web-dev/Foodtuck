const ApiUrl = "https://690b37d76ad3beba00f3f77d.mockapi.io/api/v1/products"
const updateBtn = document.querySelector(".update")


const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
console.log(id);


const getProductsById = async () => {
    showLoader()
    try {
        const response = await fetch(`${ApiUrl}/${id}`)
        const product = await response.json()
        renderProduct(product)

        console.log(product);

    } catch (e) {
        console.log(e, "Something went wrong");

    }
    finally {
        hideLoader()
    }
}
getProductsById()

const productBlock = document.querySelector(".productBlock")

function renderProduct(product) {
    const div = document.createElement("div");
    const img = document.createElement("div");
    const info = document.createElement("div");
    const name = document.createElement("h2");
    const priceDiv = document.createElement("div");
    const span = document.createElement("span");
    const discount = document.createElement("span");
    const desc = document.createElement("p");

    div.classList.add("product");
    img.classList.add("product__image");
    info.classList.add("product__info");
    name.classList.add("product__name");
    priceDiv.classList.add("product-price__block");
    span.classList.add("product__price");
    discount.classList.add("discount");
    desc.classList.add("product__description");

    img.style.backgroundImage = `url(${product.img})`;
    name.textContent = product.name;
    span.textContent = product.price;
    if (product.discount) discount.textContent = product.discount;
    desc.textContent =
        product.description || "No description provided for this product.";

    priceDiv.append(span, discount);
    info.append(name, priceDiv, desc);
    div.append(img, info);
    productBlock.append(div);
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

function showLoader() {
    const loader = document.getElementById("loader");
    if (loader) loader.classList.remove("hidden");
}

function hideLoader() {
    const loader = document.getElementById("loader");
    if (loader) loader.classList.add("hidden");
}


renderRecentPosts(recentPosts)

// const data = [
//   {
//     id: "1",
//     name: "Fresh Lime",
//     img: "https://mf4ddx6arn.ufs.sh/f/uiFdSWrbqmFv3mAWZ5wABHu64bLMNmP1hsUGpzaYSCOlFtnR",
//     price: "$38.00",
//     discount: "$45.00",
//     category: "Drinks",
//     rating: 4.7,
//     reviews: 124,
//     description: "Refreshing lime drink made from natural lime extract, perfect for summer.",
//     ingredients: ["Lime", "Sugar", "Water", "Ice"],
//     availability: "In stock",
//     delivery: "Free delivery over $50"
//   },
//   {
//     id: "2",
//     name: "Chocolate Mulin",
//     img: "https://mf4ddx6arn.ufs.sh/f/uiFdSWrbqmFvOWHpidaEZ6m0yzPRQAXpL41Nq8w59nDBdaGt",
//     price: "$28.00",
//     category: "Desserts",
//     rating: 4.9,
//     reviews: 210,
//     description: "Soft chocolate muffin with creamy filling and rich cocoa flavor.",
//     ingredients: ["Flour", "Cocoa", "Butter", "Sugar", "Eggs"],
//     availability: "In stock",
//     delivery: "1-2 days"
//   },
//   {
//     id: "3",
//     name: "Burger",
//     img: "https://mf4ddx6arn.ufs.sh/f/uiFdSWrbqmFvYoxePDSqhuwa5UMm0veJfx1ECsGndcLji8QK",
//     price: "$21.00",
//     discount: "$45.00",
//     category: "Fast Food",
//     rating: 4.4,
//     reviews: 356,
//     description: "Classic beef burger with cheese, lettuce, tomato, and special house sauce.",
//     ingredients: ["Beef", "Cheese", "Lettuce", "Tomato", "Bun"],
//     availability: "Limited stock",
//     delivery: "Pickup or delivery"
//   },
//   {
//     id: "4",
//     name: "Country Burger",
//     img: "https://mf4ddx6arn.ufs.sh/f/uiFdSWrbqmFvsffaGKOlQUSIEHk2tcXgKzCVFoTMnuL0ql6R",
//     price: "$45.00",
//     category: "Fast Food",
//     rating: 4.5,
//     reviews: 178,
//     description: "Juicy country-style burger with grilled chicken and fresh vegetables.",
//     ingredients: ["Chicken", "Bun", "Tomato", "Lettuce", "Cheese"],
//     availability: "In stock",
//     delivery: "Delivery within 30 minutes"
//   },
//   {
//     id: "5",
//     name: "Drink",
//     img: "https://mf4ddx6arn.ufs.sh/f/uiFdSWrbqmFvoBpqFPd7qPJ4RHwEhGLtrj8N2uaSng1cZCpX",
//     price: "$23.00",
//     discount: "$45.00",
//     category: "Drinks",
//     rating: 4.3,
//     reviews: 97,
//     description: "Cool and refreshing drink to energize your day.",
//     ingredients: ["Water", "Lemon", "Sugar"],
//     availability: "In stock",
//     delivery: "Pickup or delivery"
//   },
//   {
//     id: "6",
//     name: "Pizza Margherita",
//     img: "https://mf4ddx6arn.ufs.sh/f/uiFdSWrbqmFv6mO9qdpZnubMRjVLD2O6kxUWTX7ycdwF8oiB",
//     price: "$43.00",
//     category: "Pizza",
//     rating: 4.8,
//     reviews: 178,
//     description: "Authentic Italian pizza with mozzarella, tomato sauce, and fresh basil leaves.",
//     ingredients: ["Dough", "Tomato sauce", "Mozzarella", "Basil"],
//     availability: "In stock",
//     delivery: "30 min delivery"
//   },
//   {
//     id: "7",
//     name: "Cheese Butter",
//     img: "https://mf4ddx6arn.ufs.sh/f/uiFdSWrbqmFv3MSzuCwABHu64bLMNmP1hsUGpzaYSCOlFtnR",
//     price: "$10.00",
//     category: "Dairy",
//     rating: 4.1,
//     reviews: 56,
//     description: "Creamy butter with high-quality cheese blend.",
//     ingredients: ["Cheese", "Butter", "Salt"],
//     availability: "Limited stock",
//     delivery: "Pickup only"
//   },
//   {
//     id: "8",
//     name: "Sandwiches",
//     img: "https://mf4ddx6arn.ufs.sh/f/uiFdSWrbqmFvh8b0Ow1YBhT0XvdDZkGLiQeRqW4UIFzCc1pP",
//     price: "$25.00",
//     category: "Fast Food",
//     rating: 4.2,
//     reviews: 89,
//     description: "Freshly made sandwiches with choice of fillings.",
//     ingredients: ["Bread", "Lettuce", "Tomato", "Cheese", "Ham"],
//     availability: "In stock",
//     delivery: "Pickup or delivery"
//   },
//   {
//     id: "9",
//     name: "Chicken Chup",
//     img: "https://mf4ddx6arn.ufs.sh/f/uiFdSWrbqmFv0hS7fkLLMoS2rDh4qFAmejQkfd8n5NCzwygX",
//     price: "$12.00",
//     category: "Snacks",
//     rating: 4.3,
//     reviews: 97,
//     description: "Crispy chicken bites served with spicy mayo and garlic sauce.",
//     ingredients: ["Chicken", "Flour", "Garlic", "Spices"],
//     availability: "In stock",
//     delivery: "Dine-in or takeaway"
//   },
//   {
//     id: "10",
//     name: "Veggie Salad",
//     img: "https://mf4ddx6arn.ufs.sh/f/uiFdSWrbqmFvVeggieImage",
//     price: "$18.00",
//     category: "Salads",
//     rating: 4.6,
//     reviews: 76,
//     description: "Healthy fresh vegetable salad with a tangy dressing.",
//     ingredients: ["Lettuce", "Tomato", "Cucumber", "Olives"],
//     availability: "In stock",
//     delivery: "Free delivery over $30"
//   },
//   {
//     id: "11",
//     name: "French Fries",
//     img: "https://mf4ddx6arn.ufs.sh/f/uiFdSWrbqmFvFriesImage",
//     price: "$9.00",
//     category: "Snacks",
//     rating: 4.4,
//     reviews: 134,
//     description: "Golden crispy French fries with a pinch of salt.",
//     ingredients: ["Potatoes", "Salt", "Oil"],
//     availability: "In stock",
//     delivery: "Pickup or delivery"
//   },
//   {
//     id: "12",
//     name: "Ice Cream",
//     img: "https://mf4ddx6arn.ufs.sh/f/uiFdSWrbqmFvIceCreamImage",
//     price: "$7.00",
//     category: "Desserts",
//     rating: 4.9,
//     reviews: 200,
//     description: "Delicious creamy ice cream in various flavors.",
//     ingredients: ["Milk", "Sugar", "Cream", "Flavorings"],
//     availability: "In stock",
//     delivery: "Pickup or delivery"
//   }
// ];
