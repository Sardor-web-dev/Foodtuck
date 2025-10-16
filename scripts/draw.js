const achievements = document.querySelector(".achievements__block")

function renderAchievements(arr) {
    achievements.innerHTML = '';
    for (let achievement of arr) {
        const div = document.createElement("div")
        const img = document.createElement("img")
        const p = document.createElement("p")
        const span = document.createElement("span")

        div.classList.add("achievements__item")
        img.classList.add("achievements__image")
        p.classList.add("achievements__name")
        span.classList.add("achievements__count")

        img.src = achievement.img
        p.innerHTML = achievement.name
        span.innerHTML = achievement.count

        div.append(img, p, span)
        achievements.append(div)
    }
}


const foodTypesBlock = document.querySelector(".benefits__items")

function renderFoodTypes(arr) {
    for (let foodType of arr) {
        const div = document.createElement("div")
        const p = document.createElement("p")
        const img = document.createElement("img")

        div.classList.add("foodTypes")
        img.src = foodType.img
        p.innerHTML = foodType.foodType

        div.append(img, p)
        foodTypesBlock.append(div)
    }
}

